import MealItem from "@/components/meals/meal-item";
import styles from "@/components/meals/meal-grid.module.css";

export default function MealGrid({ meals }) {
    return (
      <ul className={styles.meals}>
          {meals.map(meal => (
              <li key={meal.id}>
                  <MealItem {...meal} />
              </li>
          ))}
      </ul>
    );
}