import styles from './page.module.css';

export default function Share() {
    return (
        <main className={styles.main}>
            <header className={styles.header}>
                <h1>Share a Meal</h1>
            </header>

            <section className={styles.formSection}>
                <h2 className={styles.formTitle}>Tell us about your meal!</h2>
                <form className={styles.form}>
                    <div className={styles.formGroup}>
                        <label htmlFor="mealTitle">Meal Title</label>
                        <input type="text" id="mealTitle" placeholder="Enter meal title" required/>
                    </div>

                    <div className={styles.formGroup}>
                        <label htmlFor="mealSlug">Slug (URL friendly)</label>
                        <input type="text" id="mealSlug" placeholder="meal-title" required/>
                    </div>

                    <div className={styles.formGroup}>
                        <label htmlFor="mealImage">Image URL</label>
                        <input type="url" id="mealImage" placeholder="https://your-image-url.com" required/>
                    </div>

                    <div className={styles.formGroup}>
                        <label htmlFor="mealSummary">Summary</label>
                        <textarea id="mealSummary" placeholder="Brief summary of the meal" required></textarea>
                    </div>

                    <div className={styles.formGroup}>
                        <label htmlFor="mealInstructions">Instructions</label>
                        <textarea id="mealInstructions" placeholder="Step-by-step cooking instructions"
                                  required></textarea>
                    </div>

                    <div className={styles.formGroup}>
                        <label htmlFor="mealCreator">Your Name</label>
                        <input type="text" id="mealCreator" placeholder="Your name" required/>
                    </div>

                    <button type="submit" className={styles.submitButton}>Share Meal</button>
                </form>
            </section>

            <section className={styles.infoSection}>
                <h3>Why Share Your Meal?</h3>
                <p>Sharing meals helps others discover new and exciting recipes! Whether it&aposs a family favorite or
                    something you created from scratch, we&aposd love to see it!</p>
            </section>
        </main>
    );
}
