import { API_URL } from "@/app/constants/app";
import { getPosts } from "@/app/services/getPosts";
import { Post } from "@/app/types/post";
import { Metadata } from "next";
import { revalidatePath } from "next/cache";
import Link from "next/link";
import { redirect } from "next/navigation";

type Params = Promise<{
  id: string
}>

async function getData(id: string): Promise<Post> {
  const response = await fetch(`${API_URL}/posts/${id}`, {
    next: {
      revalidate: 60
    }
  })

  if (!response.ok) {
    throw new Error('No post with such ID')
  }

  return response.json();
}

export async function generateStaticParams() {
  const posts: Post[] = await getPosts();

  return posts.map(post => ({
    slag: post.id.toString()
  }))
}
 
export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
    const { id } = await params;
    const post = await getData(id);
    return (
        {
            title: `${post.title}`
        }
    )
}

export default async function BlogItemPage( {params }: { params: Params }) {
    const { id } = await params;
    const post = await getData(id);

    async function removePost(id: string) {
      'use server'
      await fetch(`${API_URL}/posts/${id}`, {
        method: 'DELETE',
        headers: {
            "Content-Type": "application/json"
        },
      });
      revalidatePath('blog');
      redirect('/blog')
    }

    return (
        <>
            <h1>{`Post:  ${post.title}`}</h1>
            <p>{post.body}</p>
            <form action={removePost.bind(null, id)}>
              <button type="submit">Delet Post</button>
            </form>

            <Link href={`/blog/${id}/edit`}>Edit</Link>
        </>
    )
}