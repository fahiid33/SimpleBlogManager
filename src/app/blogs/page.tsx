import BlogList from "@/components/blogs/blog-list";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function extractAllBlogs() {
  let posts = [];
  try {
     posts = await prisma.post.findMany();
    console.log("Fetched posts:", posts); // Log fetched posts
    }

   catch (e) {
    console.error("Failed to fetch blog posts", e);
    return [];
  }
  return posts;
}

export default async function Blogs() {
  const blogPostsList = await extractAllBlogs();

  return <BlogList lists={blogPostsList} />;
}
