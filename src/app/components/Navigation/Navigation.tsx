'use client'

import Link from "next/link";
import styles from './navigation.module.css';
import {usePathname} from 'next/navigation';
import { useSession, signOut } from "next-auth/react";

type Navlink = {
    label: string;
    href: string;
}

type Props = {
    navLinks: Navlink[];
}

export default function Navigation({navLinks}: Props) {
    const pathName = usePathname();
    const session = useSession();


    return (
        <menu className={styles.root}>
        <ul className={styles.menu}>
            {
                navLinks.map(link => {
                    const isActive = pathName === link.href;

                    return (
                        <li className={`${styles.menuItem} ${isActive && styles.isActive}`} key={link.href}>
                            <Link href={link.href}>{link.label}</Link>
                        </li>)
                })
            }
            {
                session?.data && 
                <li className={`${styles.menuItem}`}>
                    <Link href='/profile'>Profile</Link>
                </li>    
            }
            {
                session?.data ? 
                <li className={`${styles.menuItem}`}>
                    <Link 
                        href='' 
                        onClick={() => signOut({
                                    callbackUrl: '/'
                                })}>SignOut
                    </Link>
                </li>     
                :
                <li className={`${styles.menuItem}`}>
                    <Link href='/api/auth/signin'>SignIn</Link>
                </li>    
            }
        </ul>
    </menu>
    )
}