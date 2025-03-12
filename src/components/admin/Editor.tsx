'use client';

import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Image from '@tiptap/extension-image';
import Link from '@tiptap/extension-link';

interface EditorProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

const Toolbar = ({ editor }: { editor: any }) => {
  if (!editor) return null;

  const handleImageUpload = async () => {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*';
    input.onchange = async () => {
      if (input.files?.length) {
        const file = input.files[0];
        const formData = new FormData();
        formData.append('file', file);

        try {
          const response = await fetch('/api/admin/upload', {
            method: 'POST',
            body: formData,
          });

          if (!response.ok) throw new Error('Upload failed');
          const data = await response.json();
          editor.chain().focus().setImage({ src: data.url }).run();
        } catch (error) {
          console.error('Error uploading image:', error);
        }
      }
    };
    input.click();
  };

  return (
    <div className="border-b border-gray-200 p-2 flex flex-wrap gap-2">
      <ToolbarButton
        onClick={() => editor.chain().focus().toggleBold().run()}
        active={editor.isActive('bold')}
        title="Bold"
        icon="format_bold"
      />
      <ToolbarButton
        onClick={() => editor.chain().focus().toggleItalic().run()}
        active={editor.isActive('italic')}
        title="Italic"
        icon="format_italic"
      />
      <ToolbarButton
        onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
        active={editor.isActive('heading', { level: 2 })}
        title="Heading"
        icon="title"
      />
      <ToolbarButton
        onClick={() => editor.chain().focus().toggleBulletList().run()}
        active={editor.isActive('bulletList')}
        title="Bullet List"
        icon="format_list_bulleted"
      />
      <ToolbarButton
        onClick={() => editor.chain().focus().toggleOrderedList().run()}
        active={editor.isActive('orderedList')}
        title="Numbered List"
        icon="format_list_numbered"
      />
      <ToolbarButton
        onClick={handleImageUpload}
        title="Add Image"
        icon="image"
      />
      <ToolbarButton
        onClick={() => {
          const url = window.prompt('Enter the link URL');
          if (url) {
            editor.chain().focus().setLink({ href: url }).run();
          }
        }}
        active={editor.isActive('link')}
        title="Add Link"
        icon="link"
      />
    </div>
  );
};

const ToolbarButton = ({ 
  onClick, 
  active, 
  title, 
  icon 
}: { 
  onClick: () => void; 
  active?: boolean; 
  title: string; 
  icon: string;
}) => (
  <button
    onClick={onClick}
    className={`p-2 rounded ${active ? 'bg-gray-200' : 'hover:bg-gray-100'}`}
    title={title}
  >
    <span className="material-icons text-lg">{icon}</span>
  </button>
);

export default function Editor({
  value,
  onChange,
  placeholder = 'Start writing...',
}: EditorProps) {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Image,
      Link.configure({
        openOnClick: false,
      }),
    ],
    content: value,
    onUpdate: ({ editor }) => {
      onChange(editor.getHTML());
    },
    editorProps: {
      attributes: {
        class: 'prose max-w-none focus:outline-none min-h-[200px] px-4 py-2',
      },
    },
  });

  return (
    <div className="border rounded-lg overflow-hidden">
      <Toolbar editor={editor} />
      <EditorContent editor={editor} />
      <style jsx global>{`
        .ProseMirror {
          min-height: 200px;
          padding: 1rem;
        }
        .ProseMirror:focus {
          outline: none;
        }
        .ProseMirror img {
          max-width: 100%;
          height: auto;
          margin: 1rem 0;
        }
      `}</style>
    </div>
  );
}
