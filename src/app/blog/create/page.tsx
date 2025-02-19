import { Suspense } from "react";
import styles from './create.module.css';
import CreatePost from "@/app/components/CreatePost/CreatePost";
import { redirect } from "next/navigation";

export default function Create() {

   const onSuccess = async (id?: number) => {
    'use server'

    if (id) {
        redirect(`/blog/${id}`)
    }
   } 

   return (
        <Suspense>
            <div className={styles.container}>
                <h1>Create post</h1>
                <CreatePost onSuccess={onSuccess}/>   
            </div>
        </Suspense>
    )
}