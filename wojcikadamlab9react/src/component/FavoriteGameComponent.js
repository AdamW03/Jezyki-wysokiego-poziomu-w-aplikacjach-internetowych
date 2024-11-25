import React from 'react';
import styles from '../style/lab9styles.module.css';

function FavoriteGameComponent() {
    return (
        <div className={styles.container}>
            <h1>Ulubiona Gra: StarCraft 2</h1>
            <p>StarCraft 2 to gra strategiczna czasu rzeczywistego stworzona przez Blizzard Entertainment.</p>
            <h2>O Grze</h2>
            <p>StarCraft 2 oferuje dynamiczną rozgrywkę, w której gracze mogą wybrać jedną z trzech ras: Terran, Zergów
                lub Protossów, z każdą z unikalnymi jednostkami i strategiami.</p>
            <h3>Tryby gry:</h3>
            <ul>
                <li>Singleplayer - Kampania fabularna</li>
                <li>Multiplayer - Rywalizuj z graczami z całego świata</li>
                <li>Co-op - Tryb współpracy, gdzie gracze wykonują misje razem</li>
            </ul>
            <h3>Dlaczego warto grać w StarCraft 2?</h3>
            <p>Gra oferuje niezliczone godziny ekscytującej zabawy, wciągającą fabułę oraz dużą społeczność graczy. Jest
                to także jeden z czołowych tytułów w e-sporcie.</p>
        </div>
    );
}

export default FavoriteGameComponent;
