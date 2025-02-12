import Link from "next/link";
import styles from './about-layout.module.css';

export default function AboutLayout({children}: {children: React.ReactNode}) {
    return (
        <section>
            <h1>About Us</h1>
            <div className={styles.root}>
                <ul className={styles.aboutMenu}>
                    <li><Link href='/about/contacts'>Contacts</Link></li>
                    <li><Link href='/about/team'>Team</Link></li>
                </ul>
                <div>
                {children}
                </div>
            </div>
            
        </section>
    )
}