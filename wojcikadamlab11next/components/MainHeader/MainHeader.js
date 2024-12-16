import React from 'react';
import Link from 'next/link';
import Image from 'next/image'
import styles from './main-header.module.css';
import logoImg from '@/assets/logo.png';
import mealsImg from '@/assets/icons/meal.png';
import communityImg from '@/assets/icons/community.png';

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
                        <Link href="/meals" className={styles.logo}>
                            <Image
                                src={mealsImg}
                                width={500}
                                height={500}
                                alt="A plate with one dish on it"
                                priority
                            />
                            <span>Browse Meals</span>
                        </Link>
                    </li>
                    <li>
                        <Link href="/community" className={styles.logo}>
                            <Image
                                src={communityImg}
                                width={500}
                                height={500}
                                alt="A group of friends in kitchen"
                                priority
                            />
                            <span>Foodies Community</span>
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default MainHeader;
