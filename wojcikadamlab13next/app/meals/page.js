import MealHeader from "@/components/MealHeader/MealHeader";
import styles from "./page.module.css";
import MealGrid from "@/components/meals/meal-grid";
import {getMeals} from "@/lib/meals";

export default async function Meals() {
    const meals = await getMeals();
  return (
      <>
        <MealHeader />
        <main className={styles.main}>
            <MealGrid meals={meals} />
        </main>
      </>
  );
}
