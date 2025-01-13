'use client';

import Title from "@/components/Title/Title";
import { useParams } from 'next/navigation';
import Image from "next/image";
import styles from './MealDetail.module.css';


export default function MealDetail() {
    const { someName } = useParams();
    const imagePath = `/images/${someName}.jpg`;
    return (
        <main>
            <Title text={`Meal: ${someName.replace('macnc', 'mac & c').replace('-', ' ')}`}/>
            <div className={styles.imageContainer}>
                <Image
                    className={styles.mealImage}
                    src={imagePath}
                    alt={`${someName} Image`}
                    width={300}
                    height={300}
                />
            </div>
        </main>
);
}