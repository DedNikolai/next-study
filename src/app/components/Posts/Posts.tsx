'use client'

import Link from "next/link";
import { useShallow } from "zustand/shallow";
import { usePosts } from "@/app/store";
import { useEffect } from "react";
// import { getPosts } from "../services/getPosts";



export default function Posts() {
    const [posts, loading, getAllPosts] = usePosts(
            useShallow( state => [state.posts, state.loading, state.getAllPosts],)
         )

    useEffect(() => {
        getAllPosts()
    }, []);
    
    if (loading) return <h3>Loading posts.....</h3>

    return (
        <ul>
            {posts.map((post, index) => {
            return (
                <li key={post.id}><Link href={`/blog/${post.id}`}>{`${index}. ${post.title}`}</Link></li>
            )
            })}
      </ul>
    )
}