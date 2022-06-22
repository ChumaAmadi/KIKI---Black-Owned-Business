import '../styles/globals.css';
import React from 'react';
import Navbar from './navbar';

// import login from './pages/login'; //

export default function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Component {...pageProps} />
      <Navbar />
    </div>
  );
}
