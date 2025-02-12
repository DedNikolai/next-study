import Link from "next/link";
import styles from './header.module.css';

const Header = () => {
    return (
        <header>
            <menu className={styles.root}>
                <ul className={styles.menu}>
                    <li className={styles.menuItem}><Link href='/'>Home</Link></li>
                    <li className={styles.menuItem}><Link href='/about'>About</Link></li>
                    <li className={styles.menuItem}><Link href='/blog'>Blog</Link></li>
                </ul>
            </menu>
        </header>
    )
}

export default Header;