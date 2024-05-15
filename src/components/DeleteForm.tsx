import { useState } from 'react';

const DeletePostButton: React.FC<{ postId: number }> = ({ postId }) => {
  const [loading, setLoading] = useState<boolean>(false);

  const deletePost = async () => {
    setLoading(true);
    const res = await fetch(`/api/posts/${postId}`, {
      method: 'DELETE',
    });

    if (res.ok) {
      // Handle success (e.g., redirect to posts list)
    } else {
      // Handle error
      console.error('Failed to delete post');
    }
    setLoading(false);
  };

  return (
    <button onClick={deletePost} disabled={loading}>Delete Post</button>
  );
};

export default DeletePostButton;
