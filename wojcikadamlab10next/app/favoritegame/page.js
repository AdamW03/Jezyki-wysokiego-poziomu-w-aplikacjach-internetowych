import React from 'react';
import Image from "next/image";
import styles from '../styles/page.module.css';
import Container from "../components/Container";
import Section from "../components/Section";
import Title from "../components/Title";

function FavoriteGameComponent() {
    return (
        <div className={styles.page}>
            <main>
                <Container>
                    <Title
                        text="Ulubiona Gra: StarCraft 2"
                        textLevel={1}
                    />
                    <Image
                        src={`/starcraft/box.png`}
                        alt="StarCraft 2 Box Art"
                        className={styles.sectionImage}
                        width={400}
                        height={0}
                        layout="intrinsic"
                    />
                    <br/>
                    <Section
                        title="O Grze"
                        titleLevel={2}
                        paragraphs={["StarCraft 2 oferuje dynamiczną rozgrywkę, w której gracze mogą wybrać jedną z trzech ras: Terran, Zergów lub Protossów, z każdą z unikalnymi jednostkami i strategiami."]}
                    />
                    <Image
                        src={`/starcraft/logo.jpg`}
                        alt="StarCraft Logo"
                        className={styles.sectionImage}
                        width={400}
                        height={0}
                        layout="intrinsic"
                    />
                    <br/>
                    <Section
                        title="Tryby gry:"
                        titleLevel={3}
                        listItems={[
                            "Singleplayer - Kampania fabularna",
                            "Multiplayer - Rywalizuj z graczami z całego świata",
                            "Co-op - Tryb współpracy, gdzie gracze wykonują misje razem"
                        ]}
                    />
                    <Image
                        src={`/starcraft/multiplayer_screen.jpg`}
                        alt="StarCraft 2 Multiplayer Screenshot"
                        className={styles.sectionImage}
                        width={400}
                        height={0}
                        layout="intrinsic"
                    />
                    <br/>
                    <Section
                        title="Dlaczego warto grać w StarCraft 2?"
                        titleLevel={3}
                        paragraphs={["Gra oferuje niezliczone godziny ekscytującej zabawy, wciągającą fabułę oraz dużą społeczność graczy. Jest to także jeden z czołowych tytułów w e-sporcie."]}
                    />
                    <Image
                        src={`/starcraft/world_cup.png`}
                        alt="StarCraft 2 Esport Tournament"
                        className={styles.sectionImage}
                        width={400}
                        height={0}
                        layout="intrinsic"
                    />
                </Container>
            </main>
        </div>
    );
}

export default FavoriteGameComponent;

