import React from 'react';
import styles from '../styles/Home.module.css';
import Head from 'next/head';

export default function Front() {
    return  (
        <div>
            <Head>
                <title>Home</title>
                <meta charSet="utf-8" />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <style>{'body { background-color: black; }'}</style>
            </Head>
            <div className={styles.textBox}>
                <h1 className={styles.kikiWhat}>WHAT IS KIKI?</h1>
            </div>

            <div className={styles.homeContainer}>
                <div className={styles.homeContainer1}>
                    <div className={styles.imgContainer} />
                    <p className={styles.textContainer}>
                </p>
                    
                </div>
            </div>
        </div>
    );
}