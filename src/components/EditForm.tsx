import { useState, useEffect, FormEvent } from 'react';
import { useSession } from 'next-auth/client';

const EditPostForm: React.FC<{ postId: number; initialTitle: string; initialContent: string }> = ({ postId, initialTitle, initialContent }) => {
  const [session] = useSession();
  const [title, setTitle] = useState<string>(initialTitle);
  const [content, setContent] = useState<string>(initialContent);

  useEffect(() => {
    setTitle(initialTitle);
    setContent(initialContent);
  }, [initialTitle, initialContent]);

  const updatePost = async (e: FormEvent) => {
    e.preventDefault();
    if (!session || !session.user) return;

    const res = await fetch(`/api/posts/${postId}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        title,
        content,
      }),
    });

    if (res.ok) {
      // Handle success (e.g., redirect to updated post details)
    } else {
      // Handle error
      console.error('Failed to update post');
    }
  };

  return (
    <form onSubmit={updatePost}>
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
      <button type="submit">Update Post</button>
    </form>
  );
};

export default EditPostForm;
