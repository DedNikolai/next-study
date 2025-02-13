'use client'

import Link from "next/link";
import styles from './navigation.module.css';
import {usePathname} from 'next/navigation';

type Navlink = {
    label: string;
    href: string;
}

type Props = {
    navLinks: Navlink[];
}

export default function Navigation({navLinks}: Props) {
    const pathName = usePathname();

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
        </ul>
    </menu>
    )
}