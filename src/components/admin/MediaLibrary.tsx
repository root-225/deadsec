'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

interface MediaItem {
  id: string;
  url: string;
  filename: string;
  alt: {
    en: string;
    fr: string;
  };
  uploadedAt: string;
}

interface MediaLibraryProps {
  onSelect?: (url: string) => void;
  isModal?: boolean;
}

export default function MediaLibrary({ onSelect, isModal = false }: MediaLibraryProps) {
  const [media, setMedia] = useState<MediaItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [uploadingFiles, setUploadingFiles] = useState<File[]>([]);
  const [selectedLanguage, setSelectedLanguage] = useState<'en' | 'fr'>('en');

  useEffect(() => {
    fetchMedia();
  }, []);

  const fetchMedia = async () => {
    try {
      const response = await fetch('/api/admin/media');
      if (!response.ok) throw new Error('Failed to fetch media');
      const data = await response.json();
      setMedia(data);
    } catch (err) {
      console.error('Error fetching media:', err);
      setError('Failed to load media');
    } finally {
      setLoading(false);
    }
  };

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    setUploadingFiles(files);

    for (const file of files) {
      const formData = new FormData();
      formData.append('file', file);
      formData.append('alt', JSON.stringify({ en: file.name, fr: file.name }));

      try {
        const response = await fetch('/api/admin/upload', {
          method: 'POST',
          body: formData,
        });

        if (!response.ok) throw new Error('Upload failed');
        await fetchMedia();
      } catch (err) {
        console.error('Error uploading file:', err);
        setError('Failed to upload file');
      }
    }

    setUploadingFiles([]);
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this image?')) return;

    try {
      const response = await fetch(`/api/admin/media/${id}`, {
        method: 'DELETE',
      });

      if (!response.ok) throw new Error('Failed to delete media');
      await fetchMedia();
    } catch (err) {
      console.error('Error deleting media:', err);
      setError('Failed to delete media');
    }
  };

  const handleUpdateAlt = async (id: string, alt: { en: string; fr: string }) => {
    try {
      const response = await fetch(`/api/admin/media/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ alt }),
      });

      if (!response.ok) throw new Error('Failed to update alt text');
      await fetchMedia();
    } catch (err) {
      console.error('Error updating alt text:', err);
      setError('Failed to update alt text');
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <div className={`bg-white ${isModal ? 'p-6 rounded-lg max-w-4xl w-full' : ''}`}>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold">Media Library</h2>
        <div className="flex items-center space-x-4">
          <select
            value={selectedLanguage}
            onChange={(e) => setSelectedLanguage(e.target.value as 'en' | 'fr')}
            className="rounded-md border border-gray-300 px-3 py-2"
          >
            <option value="en">English</option>
            <option value="fr">Français</option>
          </select>
          <label className="cursor-pointer px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
            Upload Images
            <input
              type="file"
              multiple
              accept="image/*"
              onChange={handleFileChange}
              className="hidden"
            />
          </label>
        </div>
      </div>

      {error && (
        <div className="bg-red-50 border-l-4 border-red-400 p-4 mb-6">
          <p className="text-red-700">{error}</p>
        </div>
      )}

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {media.map((item) => (
          <div
            key={item.id}
            className="relative group border rounded-lg overflow-hidden"
          >
            <div className="relative aspect-square">
              <Image
                src={item.url}
                alt={item.alt[selectedLanguage]}
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-opacity flex items-center justify-center opacity-0 group-hover:opacity-100">
              <div className="space-x-2">
                {onSelect && (
                  <button
                    onClick={() => onSelect(item.url)}
                    className="px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700"
                  >
                    Select
                  </button>
                )}
                <button
                  onClick={() => handleDelete(item.id)}
                  className="px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700"
                >
                  Delete
                </button>
              </div>
            </div>
            <div className="p-2">
              <input
                type="text"
                value={item.alt[selectedLanguage]}
                onChange={(e) =>
                  handleUpdateAlt(item.id, {
                    ...item.alt,
                    [selectedLanguage]: e.target.value,
                  })
                }
                className="w-full text-sm px-2 py-1 border rounded"
                placeholder={`Alt text (${selectedLanguage})`}
              />
            </div>
          </div>
        ))}
      </div>

      {uploadingFiles.length > 0 && (
        <div className="fixed bottom-4 right-4 bg-white rounded-lg shadow-lg p-4">
          <h3 className="font-semibold mb-2">Uploading...</h3>
          {uploadingFiles.map((file, index) => (
            <div key={index} className="text-sm text-gray-600">
              {file.name}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
