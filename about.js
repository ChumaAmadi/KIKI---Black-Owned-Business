import React from 'react';
import styles from '../styles/Home.module.css';
import Head from 'next/head';
import Image from 'next/image';

export default function Front() {
    return  (
        <div>
            <Head>
                <title>Home</title>
                <meta charSet="utf-8" />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <div className={styles.textBox}>
                <h1 className={styles.kikiWhat}>WHAT IS KIKI?</h1>
            </div>
            <div className={styles.homeContainer}/>
                <div className={styles.homeContainer1}>
                    <div className={styles.imgContainer} />
                    <p className={styles.textContainer}>
                        Kiki is a digital platform focused on sharing
                        stories from black womxn with a special focus on authenticity
                        and online community. Kiki was created with the intention of 
                        being a safe-space for black womxn. It is statistically proven
                        that a tenth of messages received online by black womxn 
                        are abusive.
                        Not only this, but there are not enough podcasts and digital
                        platfroms that target primarily black womxn. This has 
                        produced a lacking amount  of safe, online communities for black womxn.
                        Kiki was created to combat this issue and more as the brand 
                        flourishes.
                    </p>
                    <div className={styles.imgContainer2} />
                <div className={styles.homeContainer2} />

                    <p className={styles.textContainer1}>

                    </p>

                    <div className={styles.imgContainer3} />

                    <p className={styles.textContainer3}>

                    </p>

            </div>
        </div>
    );
}