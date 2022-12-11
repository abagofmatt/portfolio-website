import Head from 'next/head';
import Image from 'next/image';
import styles from './layout.module.css';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';
import { Navbar } from './navbar';

const name = 'Matt Riesterer';
export const siteTitle = 'Matt Riesterer';

export default function Layout({ children, home }) {
    return (
        <div> 
            <div id='home'/>
                <Navbar/>
                    <div className={styles.container}>
                        <header className={styles.header}>
                            {home ? (
                                <>
                        <h1 className={utilStyles.heading2X1}>{name}</h1>
                    </>
                    ) : (
                        <>
                        </>
                    )}
                </header>
                <main>{children}</main>
                {!home && (
                    <div className={styles.backToHome}>
                        <center><Link href="/">
                            <a>Back to home</a>
                        </Link></center>
                    </div>
                )}
            </div>
        </div>
    );
}