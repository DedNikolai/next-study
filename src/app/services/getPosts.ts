import { Post } from "../types/post";

export async function getPosts(): Promise<Post []> {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
      next: {
        revalidate: 60
      }
    })
  
    return response.json();
  }

  export async function getPostsBySearchParams(search: string) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts?q=${search}`, {
        next: {
          revalidate: 60
        }
      })

      if (!response.ok) throw new Error('Posts not Found')
    
      return response.json();
  }