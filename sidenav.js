import React from 'react';
import styles from '../styles/Home.module.css';
import Link from 'next/link';
import { slide as Menu } from "react-burger-menu";

export default function Navbar()    {
  return (
    // Pass on our props
    <Menu>
      <Link className={styles.menuItem} href="/home">
        Home
      </Link>

      <Link className={styles.menuItem} href="/articles">
        Articles
      </Link>

      <Link className={styles.menuItem} href="/about">
        About
      </Link>

      <Link className={styles.menuItem} href="/contact">
        Contact
      </Link>
    </Menu>
  );
}