import React from 'react';
import styles from '../styles/Home.module.css';
import Head from 'next/head';
import Navbar from './sidenav';
import Link from 'next/link';

export default function Header() {
    return  (
        <div>
            <Head>
                <title>Navbar</title>
                <meta charSet="utf-8" />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <Navbar />
            <div className={styles.bigHeader}>
                <h1 className={styles.bigText}>KIKI</h1>
            </div>
            <Link href='/'><div className={styles.kikiHomeLogo2} /></Link>
        </div>
    );
}