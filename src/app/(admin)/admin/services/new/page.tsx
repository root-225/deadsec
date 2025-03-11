'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function NewServicePage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    icon: 'default',
    features: [''],
    status: 'active' as 'active' | 'inactive',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the data to your API
    console.log('Form submitted:', formData);
    router.push('/admin/services');
  };

  const addFeature = () => {
    setFormData({
      ...formData,
      features: [...formData.features, ''],
    });
  };

  const removeFeature = (index: number) => {
    setFormData({
      ...formData,
      features: formData.features.filter((_, i) => i !== index),
    });
  };

  const updateFeature = (index: number, value: string) => {
    const newFeatures = [...formData.features];
    newFeatures[index] = value;
    setFormData({
      ...formData,
      features: newFeatures,
    });
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-white">New Service</h1>
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
            onChange={(e) => setFormData({ ...formData, title: e.target.value })}
            className="mt-1 block w-full rounded-md bg-slate-700 border-slate-600 text-white shadow-sm focus:border-blue-500 focus:ring-blue-500"
            required
          />
        </div>

        <div>
          <label htmlFor="description" className="block text-sm font-medium text-white">
            Description
          </label>
          <textarea
            id="description"
            rows={4}
            value={formData.description}
            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
            className="mt-1 block w-full rounded-md bg-slate-700 border-slate-600 text-white shadow-sm focus:border-blue-500 focus:ring-blue-500"
            required
          />
        </div>

        <div>
          <label htmlFor="icon" className="block text-sm font-medium text-white">
            Icon
          </label>
          <select
            id="icon"
            value={formData.icon}
            onChange={(e) => setFormData({ ...formData, icon: e.target.value })}
            className="mt-1 block w-full rounded-md bg-slate-700 border-slate-600 text-white shadow-sm focus:border-blue-500 focus:ring-blue-500"
          >
            <option value="default">Default</option>
            <option value="cloud">Cloud</option>
            <option value="ai">AI</option>
            <option value="security">Security</option>
            <option value="digital">Digital</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-white mb-2">
            Features
          </label>
          <div className="space-y-2">
            {formData.features.map((feature, index) => (
              <div key={index} className="flex gap-2">
                <input
                  type="text"
                  value={feature}
                  onChange={(e) => updateFeature(index, e.target.value)}
                  className="flex-1 rounded-md bg-slate-700 border-slate-600 text-white shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  placeholder="Enter a feature"
                />
                <button
                  type="button"
                  onClick={() => removeFeature(index)}
                  className="px-3 py-2 text-red-400 hover:text-red-300"
                >
                  Remove
                </button>
              </div>
            ))}
            <button
              type="button"
              onClick={addFeature}
              className="px-4 py-2 text-blue-400 hover:text-blue-300"
            >
              Add Feature
            </button>
          </div>
        </div>

        <div>
          <label htmlFor="status" className="block text-sm font-medium text-white">
            Status
          </label>
          <select
            id="status"
            value={formData.status}
            onChange={(e) => setFormData({ ...formData, status: e.target.value as 'active' | 'inactive' })}
            className="mt-1 block w-full rounded-md bg-slate-700 border-slate-600 text-white shadow-sm focus:border-blue-500 focus:ring-blue-500"
          >
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
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
            Save Service
          </button>
        </div>
      </form>
    </div>
  );
} 