import { Suspense } from "react";
import styles from './edit.module.css';
import CreatePost from "@/app/components/CreatePost/CreatePost";
import { redirect } from "next/navigation";
import EditPost from "@/app/components/EditPost/EditPost";
import { API_URL } from "@/app/constants/app";
import { Post } from "@/app/types/post";
import { revalidatePath } from "next/cache";

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

async function updatePost(data:FormData) {
    "use server"
    const {title, body, id} = Object.fromEntries(data);

    const response = await fetch(`${API_URL}/posts/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title, body }),
      });
    
      const post = await response.json();
    
      revalidatePath(`/blog/${post.id}`);
      redirect(`/blog/${post.id}`);
}

export default async function Edit({ params }: { params: Params }) {
    const { id } = await params;
    const post = await getData(id);  

   const onSuccess = async (id?: number) => {
    'use server'

    if (id) {
        redirect(`/blog/${id}`)
    }
   } 

   return (
        <Suspense>
            <div className={styles.container}>
                <h1>Edit post</h1>
                <div className={styles.root}>
                    <form action={updatePost}>
                        <div className={`${styles.formItem}`}>
                            <input 
                                type="text" 
                                name='title'
                                required
                                className={`${styles.formInput}`}
                                defaultValue={post.title}
                            />
                        </div>
                        <div className={`${styles.formItem}`}>
                            <input 
                                type="text"
                                name='body'
                                required
                                className={`${styles.formInput}`} 
                                defaultValue={post.body}
                            />
                        </div>
                        <input type="hidden" name="id" value={post.id} />
                        <div className={styles.formItem}>
                            <button className={styles.formButton}>Save</button>
                        </div>
                    </form> 
                </div>  
            </div>
        </Suspense>
    )
}