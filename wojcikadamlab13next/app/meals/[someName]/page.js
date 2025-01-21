import Image from "next/image";
import styles from './MealDetail.module.css';
import pageStyles from './page.module.css';
import {getMeal} from "@/lib/meals";


export default function MealDetailPage({ params }) {
    const { someName } = params;
    const mealData = getMeal(someName);

    if (!someName) {
        return <p>Loading...</p>;
    }
    return (
        <main className={pageStyles.header}>
            <div className={pageStyles.image}>
                <div className={styles.imageContainer}>
                    <Image
                        className={styles.mealImage}
                        src={mealData.image}
                        alt={mealData.title}
                        layout="fill"
                        objectFit="cover"
                    />
                </div>
            </div>
            <div className={pageStyles.headerText}>
                <h1>{mealData.title}</h1>
                <p className={pageStyles.summary}>{mealData.summary}</p>
                <p className={pageStyles.instructions}><strong>Instructions:</strong> {mealData.instructions}</p>
                <p className={pageStyles.creator}>
                    <strong>Created by:</strong> {mealData.creator} ({mealData.creator_email})
                </p>
            </div>
        </main>
    );
}

