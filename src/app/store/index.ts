import {create} from 'zustand';
import { Post } from '../types/post';
import { getPosts, getPostsBySearchParams } from '../services/getPosts';

type UsePosts = {
    posts: Post[];
    loading: boolean;
    getAllPosts: () => Promise<void>;
    getPostsBySearch: (value: string) => Promise<void>;

}

export const usePosts = create<UsePosts>()((set) => ({
    posts: [],
    loading: false,
    getAllPosts: async () => {
        set({loading: true});
        const posts = await getPosts()
        set({posts, loading: false})
    },
    getPostsBySearch: async (value) => {
        set({loading: true});
        const posts = await getPostsBySearchParams(value)
        set({posts, loading: false})
    } 
}))