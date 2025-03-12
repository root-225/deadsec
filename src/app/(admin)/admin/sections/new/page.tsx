'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

interface MultilingualContent {
  en: string;
  fr: string;
}

export default function NewSectionPage() {
  const router = useRouter();
  const [selectedLanguage, setSelectedLanguage] = useState<'en' | 'fr'>('en');
  const [formData, setFormData] = useState({
    key: '',
    title: {
      en: '',
      fr: ''
    },
    content: {
      en: '',
      fr: ''
    },
    isVisible: true
  });
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      if (!formData.key || !formData.title.en || !formData.content.en) {
        throw new Error('Key, title, and content are required in English');
      }

      const response = await fetch('/api/admin/sections', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || 'Failed to create section');
      }

      router.push('/admin/sections');
    } catch (err) {
      console.error('Error creating section:', err);
      setError(err instanceof Error ? err.message : 'Failed to create section');
    }
  };

  return (
    <div className="max-w-4xl mx-auto py-8 px-4">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold">Create New Section</h1>
        <select
          value={selectedLanguage}
          onChange={(e) => setSelectedLanguage(e.target.value as 'en' | 'fr')}
          className="rounded-md border border-gray-300 px-3 py-2"
        >
          <option value="en">English</option>
          <option value="fr">Français</option>
        </select>
      </div>

      {error && (
        <div className="bg-red-50 border-l-4 border-red-400 p-4 mb-6">
          <p className="text-red-700">{error}</p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6 bg-white rounded-lg shadow p-6">
        <div>
          <label htmlFor="key" className="block text-sm font-medium mb-1">
            Section Key (unique identifier)
          </label>
          <input
            type="text"
            id="key"
            value={formData.key}
            onChange={(e) => setFormData({ ...formData, key: e.target.value })}
            className="w-full rounded-md border border-gray-300 px-3 py-2"
            placeholder="e.g., about-section, hero-banner"
            required
          />
          <p className="mt-1 text-sm text-gray-500">
            This key will be used to identify the section in the code. Use lowercase letters, numbers, and hyphens only.
          </p>
        </div>

        <div>
          <label htmlFor="title" className="block text-sm font-medium mb-1">
            Title ({selectedLanguage.toUpperCase()})
          </label>
          <input
            type="text"
            id="title"
            value={formData.title[selectedLanguage]}
            onChange={(e) =>
              setFormData({
                ...formData,
                title: {
                  ...formData.title,
                  [selectedLanguage]: e.target.value,
                },
              })
            }
            className="w-full rounded-md border border-gray-300 px-3 py-2"
            required={selectedLanguage === 'en'}
          />
          {selectedLanguage === 'en' && (
            <p className="mt-1 text-sm text-gray-500">
              English title is required. French translation can be added later.
            </p>
          )}
        </div>

        <div>
          <label htmlFor="content" className="block text-sm font-medium mb-1">
            Content ({selectedLanguage.toUpperCase()})
          </label>
          <textarea
            id="content"
            rows={6}
            value={formData.content[selectedLanguage]}
            onChange={(e) =>
              setFormData({
                ...formData,
                content: {
                  ...formData.content,
                  [selectedLanguage]: e.target.value,
                },
              })
            }
            className="w-full rounded-md border border-gray-300 px-3 py-2"
            required={selectedLanguage === 'en'}
          />
          {selectedLanguage === 'en' && (
            <p className="mt-1 text-sm text-gray-500">
              English content is required. French translation can be added later.
            </p>
          )}
        </div>

        <div>
          <label className="flex items-center">
            <input
              type="checkbox"
              checked={formData.isVisible}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  isVisible: e.target.checked,
                })
              }
              className="rounded border-gray-300"
            />
            <span className="ml-2 text-sm">Make this section visible on the website</span>
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
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
          >
            Create Section
          </button>
        </div>
      </form>
    </div>
  );
}
