'use client';

import { useEffect, useRef } from 'react';
import dynamic from 'next/dynamic';
import 'react-quill/dist/quill.snow.css';

const QuillEditor = dynamic(() => import('react-quill'), {
  ssr: false,
  loading: () => (
    <div className="h-64 w-full animate-pulse bg-gray-100 rounded-md"></div>
  ),
});

interface RichTextEditorProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

const modules = {
  toolbar: [
    [{ header: [1, 2, 3, 4, 5, 6, false] }],
    ['bold', 'italic', 'underline', 'strike'],
    [{ list: 'ordered' }, { list: 'bullet' }],
    [{ indent: '-1' }, { indent: '+1' }],
    [{ align: [] }],
    ['link', 'image'],
    ['clean'],
  ],
  clipboard: {
    matchVisual: false,
  },
};

const formats = [
  'header',
  'bold',
  'italic',
  'underline',
  'strike',
  'list',
  'bullet',
  'indent',
  'align',
  'link',
  'image',
];

export default function RichTextEditor({
  value,
  onChange,
  placeholder = 'Start writing...',
}: RichTextEditorProps) {
  const quillRef = useRef<any>(null);

  useEffect(() => {
    // Add custom image handler when the editor is ready
    if (quillRef.current) {
      const quill = quillRef.current.getEditor();
      const toolbar = quill.getModule('toolbar');
      toolbar.addHandler('image', () => handleImage(quill));
    }
  }, []);

  const handleImage = (quill: any) => {
    const input = document.createElement('input');
    input.setAttribute('type', 'file');
    input.setAttribute('accept', 'image/*');
    input.click();

    input.onchange = async () => {
      const file = input.files?.[0];
      if (file) {
        try {
          const formData = new FormData();
          formData.append('file', file);

          const response = await fetch('/api/admin/upload', {
            method: 'POST',
            body: formData,
          });

          if (!response.ok) throw new Error('Upload failed');
          const data = await response.json();

          const range = quill.getSelection(true);
          quill.insertEmbed(range.index, 'image', data.url);
        } catch (error) {
          console.error('Error uploading image:', error);
          // You might want to show an error message to the user here
        }
      }
    };
  };

  return (
    <div className="rich-text-editor">
      <QuillEditor
        ref={quillRef}
        theme="snow"
        value={value}
        onChange={onChange}
        modules={modules}
        formats={formats}
        placeholder={placeholder}
        className="min-h-[200px]"
      />
      <style jsx global>{`
        .rich-text-editor .ql-container {
          min-height: 200px;
          font-size: 16px;
          border-bottom-left-radius: 0.375rem;
          border-bottom-right-radius: 0.375rem;
        }
        .rich-text-editor .ql-toolbar {
          border-top-left-radius: 0.375rem;
          border-top-right-radius: 0.375rem;
        }
        .rich-text-editor .ql-editor {
          min-height: 200px;
        }
      `}</style>
    </div>
  );
}
