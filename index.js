import React from "react";
import Head from 'next/head';
import styles from '../styles/Home.module.css'
import "../src/config/firebase-config.js";

export default function Home() {
  return (
      <><Head>
      <div className="page-header">
        <title>KIKI</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </div>
    </Head>
    <body>
      <div className={styles.container}>
        <h1 className={styles.text}>KIKI</h1>
      </div>
    </body>
    </>
    );
};
