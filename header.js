import React from 'react';
import styles from '../styles/Home.module.css';

export default function Header() {
    return  (
        <div className={styles.headerContainer}>
            <h1 className={styles.headerText}>KIKI</h1>
        </div>
    );
}