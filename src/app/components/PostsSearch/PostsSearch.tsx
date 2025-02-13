'use client'
// import { getPostsBySearchParams } from "@/app/services/getPosts";
import { usePosts } from "@/app/store";
// import { Post } from "@/app/types/post";
import { FormEventHandler, useState } from "react";
import { useShallow } from "zustand/shallow";

// type Props = {
//     onSearch: (value: Post[]) => void;
// }

export default function PostsSearch() {
    const [search, setSearch] = useState<string>('');
    const [getPostsBySearch] = usePosts(useShallow(state => [state.getPostsBySearch]))

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value);
    }

    const handleSubmit: FormEventHandler<HTMLFormElement>  = async (event) => {
        event.preventDefault();
        getPostsBySearch(search);

    }

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="search" 
                placeholder="search" 
                value={search}
                onChange={handleSearch}
            />
            <button type="submit">Search</button>
        </form>
    )
}

