import React from 'react';
import styles from '../styles/Home.module.css';
import Head from 'next/head';
import Header from '../pages/header';
import Link from 'next/Link';

const Pop = () => {
    alert('Welcome appreciate your feedback! Expect a reply within 2 business days.');
}

export default function Contact() {
    return  (
        <div>
            <Header />
            <Head>
                <title>Contact Us</title>
                <meta charSet="utf-8" />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <div className={styles.contactContainer}>
                <div className={styles.contact}>
                    <form><h1 className={styles.formText}>Name:</h1>
                <br />
                    <input className={styles.textbox} type="text" size='20' />
                <br />
                    <h1 className={styles.formText}>What's The Issue?</h1>
                <br />
                    <input className={styles.textbox2} type="email" size='20' />
                <br />
                    <Link href='/home'><button onClick={Pop} className={styles.submitButton}>Submit</button></Link>
                </form>
                </div>
            </div>
        </div>
    );
}
