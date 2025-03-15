'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Editor from '@/components/admin/Editor';
import MediaLibrary from '@/components/admin/MediaLibrary';
import ContentPreview from '@/components/admin/ContentPreview';
import LoadingSpinner from '@/components/LoadingSpinner';

export default function NewPostPage() {
  const router = useRouter();
  const [selectedLanguage, setSelectedLanguage] = useState<'en' | 'fr'>('en');
  const [showMediaLibrary, setShowMediaLibrary] = useState(false);
  const [showPreview, setShowPreview] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');
  
  const [formData, setFormData] = useState({
    title: { en: '', fr: '' },
    excerpt: '',
    content: { en: '', fr: '' },
    slug: '',
    imageUrl: '',
    category: '',
    tags: '',
    status: 'draft',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      const response = await fetch('/api/admin/posts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (!response.ok) throw new Error('Failed to create post');
      router.push('/admin/posts');
    } catch (err) {
      setError('Failed to create post. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-900 text-white p-6">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">New Post</h1>
          <button
            onClick={() => router.push('/admin/dashboard')}
            className="bg-slate-700 hover:bg-slate-600 text-white px-4 py-2 rounded-md transition-colors"
          >
            Back to Dashboard
          </button>
        </div>

        {error && (
          <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-4 mb-6">
            <p className="text-red-400">{error}</p>
          </div>
        )}

        <form onSubmit={handleSubmit} className="bg-slate-800/50 p-6 rounded-lg shadow-lg border border-slate-700">
          <div className="space-y-6">
            <div>
              <label htmlFor="title" className="block text-sm font-medium text-slate-300 mb-1">
                Title <span className="text-red-400">*</span>
              </label>
              <input
                type="text"
                id="title"
                name="title"
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
                required
                className="w-full rounded-md bg-slate-700/50 border-slate-600 text-white focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter post title"
              />
            </div>

            <div>
              <label htmlFor="excerpt" className="block text-sm font-medium text-slate-300 mb-1">
                Excerpt <span className="text-red-400">*</span>
              </label>
              <textarea
                id="excerpt"
                name="excerpt"
                value={formData.excerpt}
                onChange={handleChange}
                required
                rows={2}
                className="w-full rounded-md bg-slate-700/50 border-slate-600 text-white focus:ring-blue-500 focus:border-blue-500"
                placeholder="Brief summary of the post"
              />
            </div>

            <div>
              <label htmlFor="content" className="block text-sm font-medium text-slate-300 mb-1">
                Content <span className="text-red-400">*</span>
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

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="category" className="block text-sm font-medium text-slate-300 mb-1">
                  Category <span className="text-red-400">*</span>
                </label>
                <select
                  id="category"
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  required
                  className="w-full rounded-md bg-slate-700/50 border-slate-600 text-white focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="">Select a category</option>
                  <option value="technology">Technology</option>
                  <option value="business">Business</option>
                  <option value="design">Design</option>
                  <option value="development">Development</option>
                  <option value="marketing">Marketing</option>
                </select>
              </div>

              <div>
                <label htmlFor="tags" className="block text-sm font-medium text-slate-300 mb-1">
                  Tags
                </label>
                <input
                  type="text"
                  id="tags"
                  name="tags"
                  value={formData.tags}
                  onChange={handleChange}
                  className="w-full rounded-md bg-slate-700/50 border-slate-600 text-white focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Enter tags separated by commas"
                />
              </div>
            </div>

            <div>
              <label htmlFor="status" className="block text-sm font-medium text-slate-300 mb-1">
                Status
              </label>
              <div className="flex space-x-4">
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    name="status"
                    value="draft"
                    checked={formData.status === 'draft'}
                    onChange={handleChange}
                    className="text-blue-500 focus:ring-blue-500"
                  />
                  <span className="ml-2 text-slate-300">Draft</span>
                </label>
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    name="status"
                    value="published"
                    checked={formData.status === 'published'}
                    onChange={handleChange}
                    className="text-blue-500 focus:ring-blue-500"
                  />
                  <span className="ml-2 text-slate-300">Published</span>
                </label>
              </div>
            </div>

            <div className="pt-4 flex justify-end space-x-4">
              <button
                type="button"
                onClick={() => router.push('/admin/dashboard')}
                className="px-4 py-2 bg-slate-600 text-white rounded-md hover:bg-slate-500 transition-colors"
                disabled={isSubmitting}
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors flex items-center justify-center min-w-[100px]"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <LoadingSpinner size="sm" className="text-white" />
                ) : (
                  'Create Post'
                )}
              </button>
            </div>
          </div>
        </form>
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