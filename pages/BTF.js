import React from 'react';
import styles from '../styles/Home.module.css';
import Head from 'next/head';

export default function Article1() { 
    return (
        <div className={styles.articleContainer}>
            <Head>
                <title>Being The First...</title>
                <meta charSet="utf-8" />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <article>
                <div className={styles.articlePicture} />
                <h1 className={styles.articleTitle} />
                <p className={styles.articleText}>

                </p>
            </article>
        </div>
    );
}
