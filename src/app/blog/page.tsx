
import type { Metadata } from "next";
// import { useEffect, useState } from "react";
import { shallow } from "zustand/shallow";
import Posts from "../components/Posts/Posts";
// import { getPosts } from "../services/getPosts";
import PostsSearch from "../components/PostsSearch/PostsSearch";
import { usePosts } from "../store";
import Link from "next/link";
import styles from './blog.module.css';
import CreatePost from "../components/CreatePost/CreatePost";
import { revalidatePath } from "next/cache";
import { getPosts } from "../services/getPosts";

// type Post = {
//   id: string;
//   title: string;
//   body: string;
// }

export const metadata: Metadata = {
    title: "Blog page",
    description: "About us description",
  };

// export const revalidate = 10;

export default async function Blog() {
    const posts = await getPosts();
    // const [posts, setPosts] = useState<Post[]>([]);
    // const [loading, setLoading] = useState(true);

    // useEffect(() => {
    //   getPosts().then(res => setPosts(res))
    //            .finally(() => setLoading(false))
    // }, [])
   const onSuccess = async () => {
    "use server";
    revalidatePath('/blog')
   }     
   
    return (
      <>
        <h1>Blog</h1>
        <div className={styles.addNew}><Link href='/blog/create'><button>Add new</button></Link></div>
        <PostsSearch />
        <Posts posts={posts}/>
        <hr />
        <CreatePost onSuccess={onSuccess}/>
      </>
    )
}