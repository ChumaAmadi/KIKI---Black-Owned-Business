import React from 'react';
import '../styles/globals.css';
import '../styles/Home.module.css';

export default function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Component {...pageProps} />
    </div>
  );
}
