import MealHeader from "@/components/MealHeader/MealHeader";
import styles from "./page.module.css";
import Meals from "@/components/meals/meals";
import {Suspense} from "react";
import classes from "@/app/meals/loading-out.module.css";

export default async function MealsPage() {
  return (
      <>
        <MealHeader />
        <main className={styles.main}>
            <Suspense fallback={<p className={classes.loading}>Fetching meals...</p>}>
                <Meals/>
            </Suspense>
        </main>
      </>
  );
}
