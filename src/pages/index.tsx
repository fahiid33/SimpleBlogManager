import { GetStaticProps } from 'next';
import { Post, PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const HomePage: React.FC<{ posts: Post[] }> = ({ posts }) => {
  return (
    <main className="flex flex-col items-center justify-between p-24">
      <div className="max-w-5xl w-full space-y-8">
        <h1 className="text-3xl font-extrabold text-gray-900">Latest Blogs</h1>
        <ul className="space-y-4">
          {posts.map((post) => (
            <li key={post.id}>
              <h2 className="text-xl font-semibold">{post.title}</h2>
              <p className="text-gray-700">{post.content}</p>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  try {
    const posts = await prisma.post.findMany();
    return {
      props: {
        posts,
      },
    };
  } catch (error) {
    console.error('Error fetching latest posts:', error);
    return {
      props: {
        posts: [], // Return empty array in case of error
      },
    };
  }
};

export default HomePage;
