// components/CreatePostForm.tsx

import { useState, FormEvent } from 'react';
import { useSession } from 'next-auth/client';

const CreatePostForm: React.FC = () => {
  const [session] = useSession();
  const [title, setTitle] = useState<string>('');
  const [content, setContent] = useState<string>('');

  const createPost = async (e: FormEvent) => {
    e.preventDefault();
    if (!session || !session.user) return;

    const res = await fetch('/api/posts', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        title,
        content,
        authorId: session.user.id,
      }),
    });

    if (res.ok) {
      // Handle success (e.g., redirect to posts list)
      setTitle('');
      setContent('');
    } else {
      // Handle error
      console.error('Failed to create post');
    }
  };

  return (
    <form onSubmit={createPost}>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <button type="submit">Create Post</button>
    </form>
  );
};

export default CreatePostForm;
