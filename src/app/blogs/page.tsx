import BlogList from "@/components/blogs/blog-list";

async function extractAllBlogs() {
  try {
    const res = await fetch(`${process.env.URL}/api/blog-post/get-all-posts`, {
      method: "GET",
      cache: "no-store",
    });

    if (!res.ok) {
      console.error("Network response was not ok", res.statusText);
      return [];
    }

    const data = await res.json();
    console.log("Fetched data:", data); // Log fetched data

    if (data.success) return data.data;
    else {
      console.error("API response indicates failure", data);
      return [];
    }
  } catch (e) {
    console.error("Failed to fetch blog posts", e);
    return [];
  }
}

export default async function Blogs() {
  const blogPostsList = await extractAllBlogs();

  return <BlogList lists={blogPostsList} />;
}
