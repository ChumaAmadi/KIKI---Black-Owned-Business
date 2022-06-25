import React from 'react';
import styles from '../styles/Home.module.css';

export default function About() {
    return  (
        <div>
            <div className={styles.homeContainer}>
                <h1 className={styles.homeH1}>What Is KIKI About?</h1>
                <p className={styles.textContainer}></p>

                <div className={styles.imgContainer} />

                <p className={styles.textContainer}></p>
                    
            </div>
        </div>
    );
}
