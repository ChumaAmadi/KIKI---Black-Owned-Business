import React from 'react';
import '../styles/globals.css'
import Head from 'next/head';

export default function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Component {...pageProps} />
    </div>
  );
}
