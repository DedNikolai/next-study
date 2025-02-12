import { Post } from "@/app/types/post";
import { Metadata } from "next";

type Params = {
    params: {
        id: string
    }
}

async function getData(id: string): Promise<Post> {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    next: {
      revalidate: 60
    }
  })

  if (!response.ok) {
    throw new Error('No post with such ID')
  }

  return response.json();
}

export async function generateMetadata({params}: Params): Promise<Metadata> {
    const {id} = await params;
    const post = await getData(id);
    return (
        {
            title: `${post.title}`
        }
    )
}

export default async function BlogItemPage({params}: Params) {
    const {id} = await params;
    const post = await getData(id);

    return (
        <>
            <h1>{`Post:  ${post.title}`}</h1>
            <p>{post.body}</p>
        </>
    )
}