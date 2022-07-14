import React from 'react';
import styles from '../styles/Home.module.css';
import Head from 'next/head';
import Timeline from './timeline'
import Link from 'next/link';
import Navbar from './sidenav';

export default function Home() {
    return  (
        <div>
            <Head>
                <title>Home</title>
                <meta charSet="utf-8" />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <Navbar />
            <div className={styles.bigHeader}>
                <h1 className={styles.bigText}>KIKI</h1>
            </div>
            <div className={styles.bigHeader2}>
                <div className={styles.homeImg} />
                <video autoPlay muted loop className={styles.homeVideo}>
                <source src='/twitter.mp4' type='video/mp4' />
                </video>
                <div className={styles.homeImg2} />
            </div>
            <Link href='/'><div className={styles.kikiHomeLogo} /></Link>
            <Timeline />
        </div>
    );
}