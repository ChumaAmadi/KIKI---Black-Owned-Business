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
                    Kiki is a digital platform focused on sharing
                    stories from black womxn with a special focus on authenticity
                    and online community. Kiki was created with the intention of 
                    being a safe-space for black womxn. It is statistically proven
                    that a tenth of messages received online by black womxn 
                    are abusive.
                    Not only this, but they are not enough podcasts and digital
                    platfroms that target primarily black womxn. This has ultimately
                    led to the lacking of a safe online community for black womxn.
                    Kiki was created to combat to combat this issue and more as the brand 
                    flourishes.
                    </p>
                    <div className={styles.imgContainer} />
                <div className={styles.homeContainer2} />

                    <p className={styles.textContainer2}>

                    </p>

                    <div className={styles.imgContainer2} />

                    <p className={styles.textContainer3}>

                    </p>

                </div>
            </div>
        </div>
    );
}