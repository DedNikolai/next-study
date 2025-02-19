import { API_URL } from "../constants/app";
import { Post } from "../types/post";

export async function getPosts(): Promise<Post []> {
    const response = await fetch(`${API_URL}/posts`)
  
    return response.json();
  }

  export async function getPostsBySearchParams(search: string) {
    const response = await fetch(`${API_URL}/posts?title=${search}`, {
        next: {
          revalidate: 60
        }
      })

      if (!response.ok) throw new Error('Posts not Found')
    
      return response.json();
  }