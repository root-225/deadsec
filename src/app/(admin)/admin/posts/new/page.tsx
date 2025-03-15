'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Editor from '@/components/admin/Editor';
import MediaLibrary from '@/components/admin/MediaLibrary';
import ContentPreview from '@/components/admin/ContentPreview';

export default function NewPostPage() {
  const router = useRouter();
  const [selectedLanguage, setSelectedLanguage] = useState<'en' | 'fr'>('en');
  const [showMediaLibrary, setShowMediaLibrary] = useState(false);
  const [showPreview, setShowPreview] = useState(false);
  const [formData, setFormData] = useState({
    title: { en: '', fr: '' },
    content: { en: '', fr: '' },
    slug: '',
    imageUrl: '',
    isPublished: false
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/admin/posts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (!response.ok) throw new Error('Failed to create post');
      router.push('/admin/posts');
    } catch (error) {
      console.error('Error creating post:', error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto py-8 px-4">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800">Create New Post</h1>
          <div className="flex items-center space-x-4">
            <select
              value={selectedLanguage}
              onChange={(e) => setSelectedLanguage(e.target.value as 'en' | 'fr')}
              className="rounded-md border border-gray-300 px-3 py-2 bg-white shadow-sm focus:ring focus:ring-blue-500"
            >
              <option value="en">English</option>
              <option value="fr">Français</option>
            </select>
            <button
              type="button"
              onClick={() => setShowPreview(!showPreview)}
              className="px-4 py-2 text-white bg-blue-600 hover:bg-blue-700 rounded-md transition duration-200"
            >
              {showPreview ? 'Edit' : 'Preview'}
            </button>
          </div>
        </div>

        {showPreview ? (
          <ContentPreview
            title={formData.title}
            content={formData.content}
            imageUrl={formData.imageUrl}
            selectedLanguage={selectedLanguage}
          />
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6 bg-white rounded-lg shadow p-6">
            <div>
              <label htmlFor="title" className="block text-sm font-medium mb-1 text-gray-700">
                Title ({selectedLanguage.toUpperCase()})
              </label>
              <input
                type="text"
                id="title"
                value={formData.title[selectedLanguage]}
                onChange={(e) => setFormData(prev => ({
                  ...prev,
                  title: {
                    ...prev.title,
                    [selectedLanguage]: e.target.value
                  },
                  slug: selectedLanguage === 'en' 
                    ? e.target.value.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')
                    : prev.slug
                }))}
                className="w-full rounded-md border border-gray-300 px-3 py-2 focus:ring focus:ring-blue-500"
                required={selectedLanguage === 'en'}
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1 text-gray-700">
                Content ({selectedLanguage.toUpperCase()})
              </label>
              <Editor
                value={formData.content[selectedLanguage]}
                onChange={(value) => setFormData(prev => ({
                  ...prev,
                  content: {
                    ...prev.content,
                    [selectedLanguage]: value
                  }
                }))}
                placeholder={`Write your post content in ${
                  selectedLanguage === 'en' ? 'English' : 'French'
                }...`}
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1 text-gray-700">
                Featured Image
              </label>
              <div className="flex items-start space-x-4">
                <button
                  type="button"
                  onClick={() => setShowMediaLibrary(true)}
                  className="flex-1 px-4 py-2 border-2 border-dashed border-gray-300 rounded-md text-gray-600 hover:text-gray-900 hover:border-gray-400 transition duration-200"
                >
                  {formData.imageUrl ? 'Change Image' : 'Select Image'}
                </button>
                {formData.imageUrl && (
                  <div className="relative w-32 h-32">
                    <Image
                      src={formData.imageUrl}
                      alt="Preview"
                      fill
                      className="object-cover rounded-md"
                    />
                    <button
                      type="button"
                      onClick={() => setFormData(prev => ({ 
                        ...prev, 
                        imageUrl: '' 
                      }))}
                      className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1"
                    >
                      ×
                    </button>
                  </div>
                )}
              </div>
            </div>

            <div>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  checked={formData.isPublished}
                  onChange={(e) => setFormData(prev => ({
                    ...prev,
                    isPublished: e.target.checked
                  }))}
                  className="rounded border-gray-300"
                />
                <span className="ml-2 text-sm text-gray-700">Publish immediately</span>
              </label>
            </div>

            <div className="flex justify-end space-x-4 pt-4">
              <button
                type="button"
                onClick={() => router.back()}
                className="px-4 py-2 text-gray-600 hover:text-gray-900"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-200"
              >
                Create Post
              </button>
            </div>
          </form>
        )}
      </div>

      {showMediaLibrary && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-h-[90vh] overflow-y-auto">
            <MediaLibrary 
              onSelect={(url) => {
                setFormData(prev => ({ ...prev, imageUrl: url }));
                setShowMediaLibrary(false);
              }} 
              isModal={true} 
            />
            <div className="p-4 border-t">
              <button
                type="button"
                onClick={() => setShowMediaLibrary(false)}
                className="w-full px-4 py-2 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 transition duration-200"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}