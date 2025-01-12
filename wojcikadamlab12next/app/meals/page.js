import MealHeader from "@/components/MealHeader/MealHeader";
import styles from "./page.module.css";
import MealGrid from "@/components/meals/meal-grid";

export default function Meals() {
  return (
      <>
        <MealHeader />
        <main className={styles.main}>
            <MealGrid meals={[]} />
        </main>
      </>
  );
}
