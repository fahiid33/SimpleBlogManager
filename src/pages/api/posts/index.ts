// pages/api/posts/index.ts

import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';
import { CreatePostRequest } from '../../../../types/types'

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  switch (req.method) {
    case 'POST':
      try {
        const { title, content, authorId }: CreatePostRequest = req.body;
        const post = await prisma.post.create({
          data: { title, content, authorId },
        });
        res.status(201).json(post);
      } catch (error) {
        res.status(500).json({ error: 'Error creating post' });
      }
      break;
    case 'GET':
      try {
        const posts = await prisma.post.findMany();
        res.status(200).json(posts);
      } catch (error) {
        res.status(500).json({ error: 'Error fetching posts' });
      }
      break;
    default:
      res.status(405).json({ error: 'Method not allowed' });
      break;
  }
}
