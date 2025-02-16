'use client'

import { signIn } from "next-auth/react";
import { useSearchParams } from "next/navigation";
import styles from './googlebutton.module.css';

export default function GoogleButton() {
    const searchParams = useSearchParams();
    const callBackUrl = searchParams.get('callBackUrl') || '/profile';
    return (
        <button 
            onClick={() => signIn('google', {callBackUrl})}
            className={styles.root}
        >
            Sign In with Google
        </button>
    )
}