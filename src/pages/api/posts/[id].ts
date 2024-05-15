// pages/api/posts/[id].js

import { PrismaClient } from '@prisma/client';
import { NextApiRequest, NextApiResponse } from 'next';

const prisma = new PrismaClient();

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { id } = req.query;
  if (req.method === 'PUT') {
    const { title, content } = req.body;
    try {
      const post = await prisma.post.update({
        where: { id: parseInt(id) },
        data: { title, content },
      });
      res.status(200).json(post);
    } catch (error) {
      res.status(500).json({ error: 'Unable to update post' });
    }
  } else if (req.method === 'DELETE') {
    try {
      await prisma.post.delete({ where: { id: parseInt(id) } });
      res.status(200).json({ message: 'Post deleted' });
    } catch (error) {
      res.status(500).json({ error: 'Unable to delete post' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
};
