import type { Metadata } from "next";
// import { useEffect, useState } from "react";
import { shallow } from "zustand/shallow";
import Posts from "../components/Posts/Posts";
// import { getPosts } from "../services/getPosts";
import PostsSearch from "../components/PostsSearch/PostsSearch";
import { usePosts } from "../store";

// type Post = {
//   id: string;
//   title: string;
//   body: string;
// }

export const metadata: Metadata = {
    title: "Blog page",
    description: "About us description",
  };

export default function Blog() {
    // const posts = await getData();
    // const [posts, setPosts] = useState<Post[]>([]);
    // const [loading, setLoading] = useState(true);

    // useEffect(() => {
    //   getPosts().then(res => setPosts(res))
    //            .finally(() => setLoading(false))
    // }, [])

    return (
      <>
        <h1>Blog</h1>
        <PostsSearch />
        <Posts />
      </>
    )
}