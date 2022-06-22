import React from 'react';
import styles from '../styles/Home.module.css';

export default function Goal() {
    return  (
        <div>
            <div className={styles.textContainer}>
                <h1 className={styles.homeH1}>What Is KIKI About?</h1>
                <p className={styles.homeText}>Kiki is about...</p>
            </div>
        </div>
    );
}
