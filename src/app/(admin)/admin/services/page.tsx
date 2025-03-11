'use client';

import { useState } from 'react';
import Link from 'next/link';

interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
  features: string[];
  status: 'active' | 'inactive';
}

export default function ServicesPage() {
  const [services, setServices] = useState<Service[]>([
    {
      id: 1,
      title: 'Cloud Solutions',
      description: 'Comprehensive cloud services including migration, optimization, and management for AWS, Azure, and Google Cloud.',
      icon: 'cloud',
      features: [
        'Cloud Migration Services',
        'Cloud Architecture Design',
        'Cost Optimization',
        '24/7 Cloud Support',
        'Security & Compliance'
      ],
      status: 'active',
    },
    {
      id: 2,
      title: 'AI & Machine Learning',
      description: 'Cutting-edge AI solutions including custom model development, data analysis, and intelligent automation.',
      icon: 'ai',
      features: [
        'Custom AI Model Development',
        'Predictive Analytics',
        'Natural Language Processing',
        'Computer Vision Solutions',
        'AI Integration Services'
      ],
      status: 'active',
    },
  ]);

  const handleDelete = (id: number) => {
    if (window.confirm('Are you sure you want to delete this service?')) {
      setServices(services.filter(service => service.id !== id));
    }
  };

  const handleToggleStatus = (id: number) => {
    setServices(services.map(service => 
      service.id === id 
        ? { ...service, status: service.status === 'active' ? 'inactive' : 'active' }
        : service
    ));
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-white">Services</h1>
        <Link
          href="/admin/services/new"
          className="px-4 py-2 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-md text-white font-medium hover:opacity-90 transition-opacity"
        >
          New Service
        </Link>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {services.map((service) => (
          <div key={service.id} className="bg-slate-800 rounded-lg p-6">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-xl font-semibold text-white">{service.title}</h3>
                <p className="text-slate-400 mt-1">{service.description}</p>
              </div>
              <span
                className={`px-2 py-1 text-xs font-semibold rounded-full ${
                  service.status === 'active'
                    ? 'bg-green-100 text-green-800'
                    : 'bg-red-100 text-red-800'
                }`}
              >
                {service.status}
              </span>
            </div>

            <div className="space-y-2 mb-4">
              {service.features.map((feature, index) => (
                <div key={index} className="flex items-center text-sm text-slate-400">
                  <svg className="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  {feature}
                </div>
              ))}
            </div>

            <div className="flex justify-end space-x-3">
              <button
                onClick={() => handleToggleStatus(service.id)}
                className={`px-3 py-1 text-sm font-medium rounded-md ${
                  service.status === 'active'
                    ? 'text-red-400 hover:text-red-300'
                    : 'text-green-400 hover:text-green-300'
                }`}
              >
                {service.status === 'active' ? 'Deactivate' : 'Activate'}
              </button>
              <Link
                href={`/admin/services/${service.id}/edit`}
                className="px-3 py-1 text-sm font-medium text-blue-400 hover:text-blue-300"
              >
                Edit
              </Link>
              <button
                onClick={() => handleDelete(service.id)}
                className="px-3 py-1 text-sm font-medium text-red-400 hover:text-red-300"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 