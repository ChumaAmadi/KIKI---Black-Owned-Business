import React from 'react';
import styles from '../styles/Home.module.css';
import Head from 'next/head';

export default function Tl() {
    return  (
        <div>
            <Head>
                <title>Tl</title>
                <meta charSet="utf-8" />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
        <div className={styles.container}>
   
            <div className={styles.container_line} />

                <ul className={styles.container_items}>

                <li className={styles.container_item}>

                    <div className={styles.container_top}>

                    <div className={styles.container_circle} />

                        <h1 className={styles.container_title}>
                            Summer 2022
                        </h1>
                    </div>

                        <h4 className={styles.container_desc}>
                        Profiles and timelines will be fully launched by 
                        August 30th. Those with beta codes will have access
                        by August 10th. The visual section will also be finished on
                        the 10th.
            </h4>
        </li>

        <li className={styles.container_item}>

            <div className={styles.container_top}>

                <div className={styles.container_circle} />

                <h1 className={styles.container_title}>
                    September 2022
                </h1>
            </div>

            <h4 className={styles.container_desc}>
            Over 50+ articles available for free. We hope to launched
            our video blogs & podcasts section before the month ends
            </h4>
        </li>

        <li className={styles.container_item}>

            <div className={styles.container_top}>

                <div className={styles.container_circle} />

                <h1 className={styles.container_title}>
                    November 2022
                </h1>
            </div>

            <h4 className={styles.container_desc}>
            Our revenue model will be implemented before the end of November.
            This is also when we leave beta and fully launch the web application.
            </h4>
        </li>

        <li className={styles.container_item}>

        <div className={styles.container_top}>

        <div className={styles.container_circle} />

            <h1 className={styles.container_title}>
             Decemeber 2022
            </h1>
        </div>

        <h4 className={styles.container_desc}>
        Roadmap for 2023 will be presented along with merchandise
        </h4>
        </li>

    </ul>
    </div>
    </div>
    );
}