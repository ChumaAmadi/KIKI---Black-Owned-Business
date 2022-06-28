import React from 'react';
import styles from '../styles/Home.module.css';
import Head from 'next/head';
import Navbar from './navbar';

export default function Front() {
    return  (
        <div className={styles.header}>
            <Head>
                <title>Header</title>
                <meta charSet="utf-8" />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <video autoPlay="true" muted="true" loop="true" className={styles.videoStyle} >
                <source src="/kikivid.mp4" type="video/mp4"/>
            </video>
            <Navbar /> 
        </div>
    );
}