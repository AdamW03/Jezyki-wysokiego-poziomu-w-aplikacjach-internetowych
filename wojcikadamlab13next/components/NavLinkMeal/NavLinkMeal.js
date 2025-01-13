import Link from 'next/link';
import Image from 'next/image';
import styles from './NavLinkMeal.module.css';

import burgerIcon from '@/assets/burger.jpg';
import curryIcon from '@/assets/curry.jpg';
import dumplingsIcon from '@/assets/dumplings.jpg';
import macncheeseIcon from '@/assets/macncheese.jpg';
import pizzaIcon from '@/assets/pizza.jpg';
import schnitzelIcon from '@/assets/schnitzel.jpg';
import tomatoSaladIcon from '@/assets/tomato-salad.jpg';
import shareIcon from '@/assets/icons/events.png';

const icons = {
    burger: burgerIcon,
    curry: curryIcon,
    dumplings: dumplingsIcon,
    'mac-&-cheese': macncheeseIcon,
    pizza: pizzaIcon,
    schnitzel: schnitzelIcon,
    'tomato-salad': tomatoSaladIcon,
};

function NavLinkMeal({ name, description }) {
    const icon = icons[name.toLowerCase().replace(/\s+/g, '-')];

    return (
        <div className={styles.navItem}>
            <Link href={`/meals/${name.toLowerCase().replace(' & ', 'n').replace(/\s+/g, '-')}`} className={styles.navLink}>
                <div className={styles.iconWrapper}>
                    <Image src={icon} alt={`${name} icon`} width={80} height={80} />
                </div>
                <span className={styles.linkText}>{name}</span>
            </Link>
            <p className={styles.description}>{description}</p>
            <Link href={`/meals/share?meal=${name.toLowerCase().replace(/\s+/g, '-')}`} className={styles.shareLink}>
                <div className={styles.iconWrapper}>
                    <Image src={shareIcon} alt="Share icon" width={80} height={80} />
                </div>
                <span>Share this meal</span>
            </Link>

        </div>
    );
}

export default NavLinkMeal;
