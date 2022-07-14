import React from "react";
import Image from 'next/image';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Link from 'next/link';
//import "../src/config/firebase-config.js";

export default function Home() {
  return (
    <div>
      <Head>
        <title>KIKI</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <style>{"body { margin: 0; display: flex; }"}</style>
      </Head>
      <body>
        <div className={styles.bgImage}>
        <Link href="/home"><Image src="/4.png" width='890px' height='890px' cursor='pointer' alt='KIKI' /></Link>
        </div>
      </body>
    </div>
  );
}
