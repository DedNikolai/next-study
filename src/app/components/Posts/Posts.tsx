'use client'

import Link from "next/link";
import { useShallow } from "zustand/shallow";
import { usePosts } from "@/app/store";
import { useEffect } from "react";
import { Post } from "@/app/types/post";
// import { getPosts } from "../services/getPosts";



export default function Posts({posts}: {posts: Post[]}) {


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