import BlogDetailsHome from "@/components/blogs/blog-details";
import { Blog } from "@/utils/types";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

interface Param {
  id: string;
}

async function extractBlogDetails(id: string) {
  let blogPost = null;
  try {
    blogPost = await prisma.post.findUnique({
      where: {
        id: parseInt(id),
      },
    });
    console.log("Fetched posts:", blogPost); // Log fetched posts
  } catch (e) {
    console.error("Failed to fetch blog posts", e);
    return null;
  }
  return blogPost;
}

export default async function BlogDetails({ params }: { params: Param }) {
  const { id } = params;

  const blogData = await extractBlogDetails(id) as Blog;

  return <BlogDetailsHome blogData={blogData} />;
}
