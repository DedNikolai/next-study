import { API_URL } from '@/app/constants/app';
import styles from './create.module.css';


export default function CreatePost({onSuccess}: {onSuccess: (id?: number) => Promise<void> }) {
    
    async function addNewPost(data: FormData) {
        'use server'
        const {title, body} = Object.fromEntries(data);
    
        const response = await fetch(`${API_URL}/posts`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({title, body, userId: 1}),
        });
    
        const post = await response.json();
        await onSuccess(post.id)
    }

    return (
        <div className={styles.root}>
            <form action={addNewPost}>
                <div className={`${styles.formItem}`}>
                    <input 
                        type="text" 
                        name='title'
                        required
                        className={`${styles.formInput}`}
                    />
                </div>
                <div className={`${styles.formItem}`}>
                    <input 
                        type="text"
                        name='body'
                        required
                        className={`${styles.formInput}`} 
                    />
                </div>
                <div className={styles.formItem}>
                    <button className={styles.formButton}>Add New</button>
                </div>
            </form> 
        </div>
    )
}