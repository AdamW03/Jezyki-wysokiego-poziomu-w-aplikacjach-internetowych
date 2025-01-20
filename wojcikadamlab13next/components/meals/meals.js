import {getMeals} from "@/lib/meals";
import MealsGrid from "@/components/meals/meal-grid";

export default async function Meals() {
    const meals = await getMeals();
    return <MealsGrid meals={meals} />;
}