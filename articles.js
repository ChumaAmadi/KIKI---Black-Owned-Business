import React from 'react';
import styles from '../styles/Home.module.css';
import Head from 'next/head';
import Link from 'next/link';

export default function Articles()  {
        return  (
            <div>
                <Head>
                    <title>Articles</title>
                    <meta charSet="utf-8" />
                    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                </Head>
                <div className={styles.bigHeader}>
                    <h1 className={styles.bigText}>Articles</h1>
                </div>
                <div className={styles.bigHeader2}>
                    <Link href='https://headblackincharge.substack.com/p/local-girl-takes-3-years-to-finish'>
                    <div className={styles.articlesImg} /></Link>
                    <div className={styles.articlesImg1} />
                    <div className={styles.articlesImg2} />
                </div>
                <div className={styles.kikiHomeLogo} />
            </div>
        );
    }