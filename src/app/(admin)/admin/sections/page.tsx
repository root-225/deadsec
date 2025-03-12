'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

interface MultilingualContent {
  en: string;
  fr: string;
}

interface Section {
  id: string;
  key: string;
  title: MultilingualContent;
  content: MultilingualContent;
  isVisible: boolean;
  createdAt: string;
  updatedAt: string;
}

export default function SectionsPage() {
  const router = useRouter();
  const [sections, setSections] = useState<Section[]>([]);
  const [selectedLanguage, setSelectedLanguage] = useState<'en' | 'fr'>('en');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [editingSection, setEditingSection] = useState<Section | null>(null);

  useEffect(() => {
    fetchSections();
  }, [selectedLanguage]);

  const fetchSections = async () => {
    try {
      const response = await fetch(`/api/admin/sections?lang=${selectedLanguage}`);
      if (!response.ok) throw new Error('Failed to fetch sections');
      const data = await response.json();
      setSections(data);
    } catch (err) {
      console.error('Error fetching sections:', err);
      setError('Failed to load sections');
    } finally {
      setLoading(false);
    }
  };

  const handleEditSection = (section: Section) => {
    setEditingSection(section);
  };

  const handleUpdateSection = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingSection) return;

    try {
      const response = await fetch(`/api/admin/sections?key=${editingSection.key}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(editingSection),
      });

      if (!response.ok) throw new Error('Failed to update section');
      
      await fetchSections();
      setEditingSection(null);
    } catch (err) {
      console.error('Error updating section:', err);
      setError('Failed to update section');
    }
  };

  const handleDeleteSection = async (key: string) => {
    if (!confirm('Are you sure you want to delete this section?')) return;

    try {
      const response = await fetch(`/api/admin/sections?key=${key}`, {
        method: 'DELETE',
      });

      if (!response.ok) throw new Error('Failed to delete section');
      
      await fetchSections();
    } catch (err) {
      console.error('Error deleting section:', err);
      setError('Failed to delete section');
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
    <div className="max-w-6xl mx-auto py-8 px-4">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold">Website Sections</h1>
        <div className="flex space-x-4">
          <select
            value={selectedLanguage}
            onChange={(e) => setSelectedLanguage(e.target.value as 'en' | 'fr')}
            className="rounded-md border border-gray-300 px-3 py-2"
          >
            <option value="en">English</option>
            <option value="fr">Français</option>
          </select>
          <button
            onClick={() => router.push('/admin/sections/new')}
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
          >
            Add New Section
          </button>
        </div>
      </div>

      {error && (
        <div className="bg-red-50 border-l-4 border-red-400 p-4 mb-6">
          <p className="text-red-700">{error}</p>
        </div>
      )}

      <div className="grid gap-6">
        {sections.map((section) => (
          <div
            key={section.id}
            className="bg-white rounded-lg shadow p-6 space-y-4"
          >
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-lg font-semibold">{section.title[selectedLanguage]}</h3>
                <p className="text-sm text-gray-500">Key: {section.key}</p>
              </div>
              <div className="flex space-x-2">
                <button
                  onClick={() => handleEditSection(section)}
                  className="px-3 py-1 text-blue-600 hover:text-blue-800"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDeleteSection(section.key)}
                  className="px-3 py-1 text-red-600 hover:text-red-800"
                >
                  Delete
                </button>
              </div>
            </div>
            <div className="prose max-w-none">
              <p>{section.content[selectedLanguage]}</p>
            </div>
            <div className="flex items-center text-sm text-gray-500">
              <span className={section.isVisible ? 'text-green-600' : 'text-red-600'}>
                {section.isVisible ? 'Visible' : 'Hidden'}
              </span>
            </div>
          </div>
        ))}
      </div>

      {editingSection && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg max-w-2xl w-full p-6">
            <h2 className="text-xl font-bold mb-4">Edit Section</h2>
            <form onSubmit={handleUpdateSection} className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">
                  Title ({selectedLanguage.toUpperCase()})
                </label>
                <input
                  type="text"
                  value={editingSection.title[selectedLanguage]}
                  onChange={(e) =>
                    setEditingSection({
                      ...editingSection,
                      title: {
                        ...editingSection.title,
                        [selectedLanguage]: e.target.value,
                      },
                    })
                  }
                  className="w-full rounded-md border border-gray-300 px-3 py-2"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">
                  Content ({selectedLanguage.toUpperCase()})
                </label>
                <textarea
                  rows={6}
                  value={editingSection.content[selectedLanguage]}
                  onChange={(e) =>
                    setEditingSection({
                      ...editingSection,
                      content: {
                        ...editingSection.content,
                        [selectedLanguage]: e.target.value,
                      },
                    })
                  }
                  className="w-full rounded-md border border-gray-300 px-3 py-2"
                  required
                />
              </div>
              <div>
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    checked={editingSection.isVisible}
                    onChange={(e) =>
                      setEditingSection({
                        ...editingSection,
                        isVisible: e.target.checked,
                      })
                    }
                    className="rounded border-gray-300"
                  />
                  <span className="ml-2 text-sm">Visible</span>
                </label>
              </div>
              <div className="flex justify-end space-x-4 mt-6">
                <button
                  type="button"
                  onClick={() => setEditingSection(null)}
                  className="px-4 py-2 text-gray-600 hover:text-gray-900"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                >
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
