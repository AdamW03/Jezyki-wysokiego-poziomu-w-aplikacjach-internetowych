import NavLinkMeal from "@/components/NavLinkMeal/NavLinkMeal";
import styles from './NavbarMeal.module.css';

const meals = [
    { name: 'Burger', description: 'Delicious beef burger with fresh ingredients' },
    { name: 'Curry', description: 'Spicy chicken curry with a creamy base' },
    { name: 'Dumplings', description: 'Steamed dumplings with savory filling' },
    { name: 'Mac & Cheese', description: 'Creamy mac and cheese with a crispy topping' },
    { name: 'Pizza', description: 'Classic pizza with mozzarella and tomato sauce' },
    { name: 'Schnitzel', description: 'Crispy fried chicken schnitzel' },
    { name: 'Tomato Salad', description: 'Fresh salad with tomatoes, olive oil and herbs' },
];

function NavbarMeal() {
    return (
        <nav className={styles.navbar}>
            {meals.map((meal) => (
                <NavLinkMeal key={meal.name} name={meal.name} description={meal.description} />
            ))}
        </nav>
    );
}

export default NavbarMeal;
