import Link from 'next/link'
import styles from '../styles/Home.module.css'
import Navigation from './Navigation';

const Footer = () => (
    <footer className={styles.footer}>
        <Navigation />
    </footer>
);

export default Footer;