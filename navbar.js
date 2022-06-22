import React from 'react';
import Link from 'next/link';
import styles from '../styles/Home.module.css';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';

function Navbar() {
    return (
        <nav className={styles.navBox}>
            <DropdownMenu.Root>
                <DropdownMenu.Trigger className={styles.Trigger}>KIKI</DropdownMenu.Trigger>

                <DropdownMenu.Content className={styles.navbarContent}>
                
                    <Link href='/home'><DropdownMenu.Item className={styles.navbarItem}>Home</DropdownMenu.Item></Link>

                    <Link href='/podcasts'><DropdownMenu.Item className={styles.navbarItem}>Podcasts</DropdownMenu.Item></Link>

                    <Link href='/videoblogs'><DropdownMenu.Item className={styles.navbarItem}>Video Blogs</DropdownMenu.Item></Link>

                    <Link href='/forum'><DropdownMenu.Item className={styles.navbarItem}>Forum</DropdownMenu.Item></Link>

                    <Link href='/articles'><DropdownMenu.Item className={styles.navbarItem}>Articles</DropdownMenu.Item></Link>

                    </DropdownMenu.Content>

            </DropdownMenu.Root>
        </nav>
    );
}

export default Navbar;