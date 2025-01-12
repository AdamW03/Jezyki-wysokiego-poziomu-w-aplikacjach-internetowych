import React from 'react';
import Link from 'next/link';
import Image from 'next/image'
import styles from './main-header.module.css';
import logoImg from '@/assets/logo.png';
import mealsImg from '@/assets/icons/meal.png';
import communityImg from '@/assets/icons/community.png';
import NavLink from "@/components/NavLink/NavLink";

function MainHeader() {
    return (
        <header className={styles.header}>
            <Link href="/" className={styles.logo}>
                <Image
                    src={logoImg}
                    width={500}
                    height={500}
                    alt="A plate with food on it"
                    priority
                />
                <span>NextLevel Food</span>
            </Link>
            <nav className={styles.nav}>
                <ul>
                    <li>
                        <NavLink href="/meals">Browse Meals</NavLink>
                    </li>
                    <li>
                        <NavLink href="/community">Foodies Community</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default MainHeader;
