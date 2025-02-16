'use client'

import { useRouter } from 'next/navigation';
import styles from './signinform.module.css';
import { FormEventHandler } from 'react';
import { signIn } from 'next-auth/react';

export default function SignInForm() {
    const router = useRouter();

    const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);

        const res = await signIn('credentials', {
            email: formData.get('email'),
            password: formData.get('password'),
            redirect: false
        })

        if (res && !res.error) {
            router.push('/profile')
        } else {
            console.log(res)
        }
    }

    return (
        <div className={styles.root}>
            <form onSubmit={handleSubmit}>
                <div className={`${styles.formItem}`}>
                    <input 
                        type="email" 
                        name='email'
                        required
                        className={`${styles.formInput}`}
                    />
                </div>
                <div className={`${styles.formItem}`}>
                    <input 
                        type="password"
                        name='password'
                        required
                        className={`${styles.formInput}`} 
                    />
                </div>
                <div className={styles.formItem}>
                    <button className={styles.formButton}>SignIn</button>
                </div>
            </form>
        </div>
    )
}