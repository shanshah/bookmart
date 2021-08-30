import Link from 'next/link'

import styles from  './NavLink.module.css';

export default function NavLink ({ text, navPath }) {
    return (
        <Link href={navPath}>
            <span className={styles.link}>
                { text }
            </span>
        </Link>
    );
}