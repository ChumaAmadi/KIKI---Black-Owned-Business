import React from 'react';
import styles from '../styles/Home.module.css';
import Head from 'next/head';
import Link from 'next/link';
import Navbar from './sidenav';

export default function Articles()  {
        return  (
            <div>
                <Head>
                    <title>Articles</title>
                    <meta charSet="utf-8" />
                    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                </Head>
                <Navbar />
                <div className={styles.bigHeader}>
                    <h1 className={styles.bigText}>Articles</h1>
                </div>
                <Link href='/'><div className={styles.kikiHomeLogo2} /></Link>
                <div className={styles.bigHeader2}>
                    <Link href='https://headblackincharge.substack.com/p/local-girl-takes-3-years-to-finish'>
                    <div className={styles.articlesImg}>
                    <h3 className={styles.articleText}>
                        Being The First...
                    </h3></div></Link>
                    
                    <div className={styles.articlesImg1}>
                        <h3 className={styles.articleText}>
                        Queer Dating
                    </h3></div>

                    <div className={styles.articlesImg2} >
                        <h3 className={styles.articleText}>
                        Girl Getaway
                    </h3>
                </div>
            </div>
        </div>
    );
}