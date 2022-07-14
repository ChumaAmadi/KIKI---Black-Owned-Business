import React from 'react';
import styles from '../styles/Home.module.css';
import Head from 'next/head';
import Navbar from './sidenav';
import Link from 'next/link';

export default function About() {
    return  (
        <div>
            <Head>
                <title>About</title>
                <meta charSet="utf-8" />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <Navbar />
            <div className={styles.bigHeader}>
                <h1 className={styles.bigText5}>About</h1>
            </div>
            <Link href='/'><div className={styles.kikiHomeLogo2} /></Link>
            <div className={styles.textBox}>
                <h1 className={styles.kikiWhat}>WHAT IS KIKI?</h1>
            </div>
            <div className={styles.homeContainer} />
                <div className={styles.imgContainer}>
                    <p className={styles.textContainer}>
                        Kiki is a digital platform focused on sharing
                        stories from black womxn with a special focus on authenticity
                        and online community. Kiki was created with the intention of 
                        being a safe-space for black womxn. It is statistically proven
                        that a tenth of messages received online by black womxn 
                        are abusive.
                    </p>
                </div>
                <div className={styles.imgContainer2}>
                    <p className={styles.textContainer1}>
                        We believe that there are not enough podcasts and digital
                        platforms that target primarily black womxn. This has 
                        produced a lacking amount  of safe, online communities for black womxn.
                        Kiki was created to combat this issue and more as the brand 
                        flourishes.
                    </p>
                </div>
                <div className={styles.neneContainer}>
                    <h1 className={styles.founderText}>
                    </h1>
                    <div className={styles.nenePicture} />
                    <p className={styles.neneDescription}>
                    Nene Nnodim-Amadi is the founder of KIKI. She is a graduate of Smith College
                    & a current Master of Science student in Media Ventures. She is
                    a former contributor on Out Loud With Claudia Jordan on Out Loud
                    with Claudia Jordan on Fox Soul. Also, Nene has years of experience working in podcasting
                    and talent relations. She is currently publishing on headblackincharge.substack.com
                </p>
            </div>
        </div>
    );
}