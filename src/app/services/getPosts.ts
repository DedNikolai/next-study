import { Post } from "../types/post";

// const API_URL = 'https://jsonplaceholder.typicode.com';
const API_URL = '/api';

export async function getPosts(): Promise<Post []> {
    const response = await fetch(`${API_URL}/posts`, {
      next: {
        revalidate: 60
      }
    })
  
    return response.json();
  }

  export async function getPostsBySearchParams(search: string) {
    const response = await fetch(`${API_URL}/posts?q=${search}`, {
        next: {
          revalidate: 60
        }
      })

      if (!response.ok) throw new Error('Posts not Found')
    
      return response.json();
  }