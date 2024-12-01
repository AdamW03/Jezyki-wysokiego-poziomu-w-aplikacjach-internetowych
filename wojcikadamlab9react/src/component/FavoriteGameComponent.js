import React, { useState } from 'react';
import styles from '../style/lab9styles.module.css';

function FavoriteGameComponent() {
    return (
        <div className={styles.generalContainer}>
            <h1>Ulubiona Gra: StarCraft 2</h1>
            <img
                src={`${process.env.PUBLIC_URL}/img/starcraft/box.png`}
                alt="StarCraft 2 Box Art"
                className={styles.sectionImage}
            />

            <section>
                <h2>O Grze</h2>
                <p>StarCraft 2 oferuje dynamiczną rozgrywkę, w której gracze mogą wybrać jedną z trzech ras:
                    Terran, Zergów lub Protossów, z każdą z unikalnymi jednostkami i strategiami.</p>
                <img
                    src={`${process.env.PUBLIC_URL}/img/starcraft/logo.jpg`}
                    alt="StarCraft Logo"
                    className={styles.sectionImage}
                />
            </section>

            <section>
                <h3>Tryby gry:</h3>
                <ul>
                    <li>Singleplayer - Kampania fabularna</li>
                    <li>Multiplayer - Rywalizuj z graczami z całego świata</li>
                    <li>Co-op - Tryb współpracy, gdzie gracze wykonują misje razem</li>
                </ul>
                <img
                    src={`${process.env.PUBLIC_URL}/img/starcraft/multiplayer_screen.jpg`}
                    alt="StarCraft 2 Multiplayer Screenshot"
                    className={styles.sectionImage}
                />
            </section>

            <section>
                <h3>Dlaczego warto grać w StarCraft 2?</h3>
                <p>Gra oferuje niezliczone godziny ekscytującej zabawy, wciągającą fabułę oraz dużą społeczność graczy.
                    Jest to także jeden z czołowych tytułów w e-sporcie.</p>
                <img
                    src={`${process.env.PUBLIC_URL}/img/starcraft/world_cup.png`}
                    alt="StarCraft 2 Esport Tournament"
                    className={styles.sectionImage}
                />
            </section>
        </div>
    );
}

export default FavoriteGameComponent;
