'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function NewPostPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    title: '',
    slug: '',
    content: '',
    status: 'draft' as 'draft' | 'published',
    author: '',
    tags: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the data to your API
    console.log('Form submitted:', formData);
    router.push('/admin/posts');
  };

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const title = e.target.value;
    setFormData({
      ...formData,
      title,
      slug: title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, ''),
    });
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-white">New Post</h1>
        <button
          onClick={() => router.back()}
          className="px-4 py-2 text-slate-400 hover:text-white transition-colors"
        >
          Cancel
        </button>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="title" className="block text-sm font-medium text-white">
            Title
          </label>
          <input
            type="text"
            id="title"
            value={formData.title}
            onChange={handleTitleChange}
            className="mt-1 block w-full rounded-md bg-slate-700 border-slate-600 text-white shadow-sm focus:border-blue-500 focus:ring-blue-500"
            required
          />
        </div>

        <div>
          <label htmlFor="slug" className="block text-sm font-medium text-white">
            Slug
          </label>
          <input
            type="text"
            id="slug"
            value={formData.slug}
            onChange={(e) => setFormData({ ...formData, slug: e.target.value })}
            className="mt-1 block w-full rounded-md bg-slate-700 border-slate-600 text-white shadow-sm focus:border-blue-500 focus:ring-blue-500"
            required
          />
        </div>

        <div>
          <label htmlFor="content" className="block text-sm font-medium text-white">
            Content
          </label>
          <textarea
            id="content"
            rows={10}
            value={formData.content}
            onChange={(e) => setFormData({ ...formData, content: e.target.value })}
            className="mt-1 block w-full rounded-md bg-slate-700 border-slate-600 text-white shadow-sm focus:border-blue-500 focus:ring-blue-500"
            required
          />
        </div>

        <div>
          <label htmlFor="author" className="block text-sm font-medium text-white">
            Author
          </label>
          <input
            type="text"
            id="author"
            value={formData.author}
            onChange={(e) => setFormData({ ...formData, author: e.target.value })}
            className="mt-1 block w-full rounded-md bg-slate-700 border-slate-600 text-white shadow-sm focus:border-blue-500 focus:ring-blue-500"
            required
          />
        </div>

        <div>
          <label htmlFor="tags" className="block text-sm font-medium text-white">
            Tags (comma-separated)
          </label>
          <input
            type="text"
            id="tags"
            value={formData.tags}
            onChange={(e) => setFormData({ ...formData, tags: e.target.value })}
            className="mt-1 block w-full rounded-md bg-slate-700 border-slate-600 text-white shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
        </div>

        <div>
          <label htmlFor="status" className="block text-sm font-medium text-white">
            Status
          </label>
          <select
            id="status"
            value={formData.status}
            onChange={(e) => setFormData({ ...formData, status: e.target.value as 'draft' | 'published' })}
            className="mt-1 block w-full rounded-md bg-slate-700 border-slate-600 text-white shadow-sm focus:border-blue-500 focus:ring-blue-500"
          >
            <option value="draft">Draft</option>
            <option value="published">Published</option>
          </select>
        </div>

        <div className="flex justify-end space-x-4">
          <button
            type="button"
            onClick={() => router.back()}
            className="px-4 py-2 text-slate-400 hover:text-white transition-colors"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-4 py-2 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-md text-white font-medium hover:opacity-90 transition-opacity"
          >
            Save Post
          </button>
        </div>
      </form>
    </div>
  );
} 