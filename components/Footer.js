import Link from 'next/link'
import styles from '../styles/Home.module.css'

const Footer = () => (
    <footer className={styles.footer}>
        <Link href="/">
            <a>Home</a>
        </Link>
        <Link href="/about">
            <a>About</a>
        </Link>
        <Link href="/contact">
            <a>Contact</a>
        </Link>
    </footer>
);

export default Footer;