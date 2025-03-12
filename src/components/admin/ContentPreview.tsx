'use client';

import Image from 'next/image';

interface MultilingualContent {
  en: string;
  fr: string;
}

interface ContentPreviewProps {
  title: MultilingualContent;
  content: MultilingualContent;
  imageUrl?: string;
  selectedLanguage: 'en' | 'fr';
}

export default function ContentPreview({
  title,
  content,
  imageUrl,
  selectedLanguage,
}: ContentPreviewProps) {
  return (
    <div className="max-w-4xl mx-auto py-8">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        {imageUrl && (
          <div className="relative aspect-video">
            <Image
              src={imageUrl}
              alt={title[selectedLanguage]}
              fill
              className="object-cover"
            />
          </div>
        )}
        <div className="p-8">
          <h1 className="text-4xl font-bold mb-6">
            {title[selectedLanguage]}
          </h1>
          <div 
            className="prose max-w-none"
            dangerouslySetInnerHTML={{ 
              __html: content[selectedLanguage] 
            }}
          />
        </div>
      </div>
      <div className="mt-4 text-center text-sm text-gray-500">
        Previewing in {selectedLanguage === 'en' ? 'English' : 'French'}
      </div>
    </div>
  );
}
