'use client';

import { useState } from 'react';

interface Message {
  id: number;
  name: string;
  email: string;
  subject: string;
  message: string;
  status: 'new' | 'read' | 'replied';
  date: string;
}

export default function MessagesPage() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      name: 'John Doe',
      email: 'john@example.com',
      subject: 'Cloud Services Inquiry',
      message: 'I would like to know more about your cloud migration services.',
      status: 'new',
      date: '2024-03-10T14:30:00',
    },
    {
      id: 2,
      name: 'Jane Smith',
      email: 'jane@example.com',
      subject: 'AI Development Support',
      message: 'Looking for information about your AI development services.',
      status: 'read',
      date: '2024-03-09T16:45:00',
    },
  ]);

  const handleStatusChange = (id: number, newStatus: Message['status']) => {
    setMessages(messages.map(message =>
      message.id === id ? { ...message, status: newStatus } : message
    ));
  };

  const handleDelete = (id: number) => {
    if (window.confirm('Are you sure you want to delete this message?')) {
      setMessages(messages.filter(message => message.id !== id));
    }
  };

  const getStatusColor = (status: Message['status']) => {
    switch (status) {
      case 'new':
        return 'bg-blue-100 text-blue-800';
      case 'read':
        return 'bg-yellow-100 text-yellow-800';
      case 'replied':
        return 'bg-green-100 text-green-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-white">Messages</h1>
        <div className="flex space-x-4">
          <select
            className="px-4 py-2 bg-slate-700 border border-slate-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={(e) => {
              // Add filtering logic here
            }}
          >
            <option value="all">All Messages</option>
            <option value="new">New</option>
            <option value="read">Read</option>
            <option value="replied">Replied</option>
          </select>
        </div>
      </div>

      {/* Messages List */}
      <div className="space-y-4">
        {messages.map((message) => (
          <div key={message.id} className="bg-slate-800 rounded-lg p-6">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-lg font-semibold text-white">{message.subject}</h3>
                <p className="text-slate-400 text-sm">
                  From: {message.name} ({message.email})
                </p>
                <p className="text-slate-400 text-sm">
                  {new Date(message.date).toLocaleString()}
                </p>
              </div>
              <span className={`px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(message.status)}`}>
                {message.status}
              </span>
            </div>

            <p className="text-slate-300 mb-4">{message.message}</p>

            <div className="flex justify-end space-x-3">
              <button
                onClick={() => handleStatusChange(message.id, 'replied')}
                className="px-3 py-1 text-sm font-medium text-green-400 hover:text-green-300"
              >
                Mark as Replied
              </button>
              <button
                onClick={() => handleStatusChange(message.id, 'read')}
                className="px-3 py-1 text-sm font-medium text-yellow-400 hover:text-yellow-300"
              >
                Mark as Read
              </button>
              <button
                onClick={() => window.location.href = `mailto:${message.email}`}
                className="px-3 py-1 text-sm font-medium text-blue-400 hover:text-blue-300"
              >
                Reply
              </button>
              <button
                onClick={() => handleDelete(message.id)}
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