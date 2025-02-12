import type { Metadata } from "next";
import Link from "next/link";

type Post = {
  id: string;
  title: string;
  body: string;
}

async function getData(): Promise<Post []> {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
    next: {
      revalidate: 60
    }
  })

  return response.json();
}

export const metadata: Metadata = {
    title: "Blog page",
    description: "About us description",
  };

export default async function Blog() {
    const posts = await getData();

    return (
      <>
        <h1>Blog</h1>
        <ul>
          {posts.map((post, index) => {
            return (
              <li key={post.id}><Link href={`/blog/${post.id}`}>{`${index}. ${post.title}`}</Link></li>
            )
          })}
        </ul>
      </>
    )
}