
import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';
import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';
import { compare } from 'bcryptjs';

const prisma = new PrismaClient();

export default (req: NextApiRequest, res: NextApiResponse) => 
  NextAuth(req, res, {
    providers: [
      Providers.Credentials({
        name: 'Credentials',
        credentials: {
          email: { label: 'Email', type: 'email' },
          password: { label: 'Password', type: 'password' },
        },
        authorize: async (credentials) => {
          if (!credentials) return null;
          const user = await prisma.user.findUnique({
            where: { email: credentials.email },
          });

          if (user && await compare(credentials.password, user.password)) {
            return { id: user.id, email: user.email };
          }

          return null;
        },
      }),
    ],
    session: {
      jwt: true,
    },
    callbacks: {
      async jwt(token, user) {
        if (user) {
          token.id = user.id;
        }
        return token;
      },
      async session(session, token) {
        session.user.id = token.id;
        return session;
      },
    },
  });
