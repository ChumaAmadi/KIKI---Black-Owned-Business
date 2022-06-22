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
        <style>{'body { background-color: black; }'}</style>
      </Head>
      <div className={styles.bgimage}>
        <Link href="/home"><Image src="/3.png" layout="fill" 
        wrapper="h-60 w-1/2 bg-red-100 relative flex justify-center" />
      </Link>
      </div>
    </div>
  );
}
