import React from 'react';
import styles from '../styles/Home.module.css';
import Head from 'next/head';
import Navbar from './sidenav';
import Link from 'next/Link';

const Pop = () => {
    alert('Welcome appreciate your feedback! Expect a reply within 2 business days.');
}

export default function Contact() {
    return  (
        <div>
            <Head>
                <title>Contact Us</title>
                <meta charSet="utf-8" />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <Navbar />
            <div className={styles.bigHeader}>
                <h1 className={styles.bigText6}>Contact</h1>
            </div>
            <Link href='/'><div className={styles.kikiHomeLogo2} /></Link>
            <div className={styles.contactContainer}>
                <div className={styles.contact}>
                    <form><h1 className={styles.formText}>Name:</h1>
                <br />
                    <input className={styles.textbox} type="text" size='20' />
                <br />
                    <h1 className={styles.formText}>Need Support?</h1>
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
