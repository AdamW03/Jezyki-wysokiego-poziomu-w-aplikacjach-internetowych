import React from 'react';
import styles from '../styles/page.module.css';
import Container from "../components/Container";
import Section from "../components/Section";
import SectionTable from "../components/SectionTable";

function InterestsComponent() {
    const filmsHeaders = ["Film", "Reżyser", "Rok"];

    const filmsData = [
        ["Dune 1", "Denis Villeneuve", 2021],
        ["Dune 2", "Denis Villeneuve", 2024],
        ["Star Wars: Łotr 1", "Gareth Edwards", 2016]
    ];
    return (
        <div className={styles.page}>
            <main>
                <Container>
                    <Section
                        title="Moje zainteresowania"
                        titleLevel={1}
                        listItems={['Programowanie', 'Gry komputerowe', 'Science Fiction']}
                    />
                    <Section
                        title="Ulubione gry"
                        titleLevel={2}
                        listItems={[
                            "StarCraft 2 - Gra strategiczna czasu rzeczywistego",
                            [
                                "Opis: StarCraft 2 to jedna z najważniejszych gier strategicznych czasu rzeczywistego, opracowana przez Blizzard Entertainment. Gracze wybierają jedną z trzech ras (Terran, Zerg, Protoss) i rywalizują w dynamicznych bitwach, które wymagają zarówno planowania, jak i szybkiego podejmowania decyzji.",
                                "Tryby gry:",
                                ["Singleplayer: Kampania fabularna, gdzie gracz bierze udział w wojnie o dominację w galaktyce.",
                                    "Multiplayer: Rywalizuj z graczami z całego świata w grach rankingowych i przyjacielskich.",
                                    "Co-op: Tryb współpracy, w którym gracze wykonują wspólne misje."],
                                "Dlaczego warto grać: Gra oferuje świetną zabawę zarówno dla początkujących, jak i zaawansowanych graczy. Zaawansowana sztuczna inteligencja, zróżnicowane strategie i nieustanny rozwój sprawiają, że StarCraft 2 nigdy się nie nudzi."
                            ],
                            "The Witcher 3 - Gra RPG z otwartym światem",
                            [
                                "Opis: The Witcher 3 to gra RPG, która opowiada historię Geralta z Rivii, łowcy potworów, w wielkim, otwartym świecie, pełnym niebezpieczeństw. Gra łączy w sobie elementy walki, eksploracji, a także głęboko zakorzenione w uniwersum fantasy wybory moralne.",
                                "Funkcje:",
                                ["Eksploracja świata: Otwarte krainy, pełne miast, wiosek, tajemniczych miejsc i potworów do zabicia.",
                                    "Wybory moralne: Decyzje, które wpływają na fabułę oraz końcowy wynik gry.",
                                    "Walka i magia: Złożony system walki, z wykorzystaniem miecza i magii w strategiczny sposób."],
                                "Dlaczego warto grać: The Witcher 3 oferuje ogromną głębię fabularną i niezliczone misje poboczne. Gra jest jedną z najlepszych w historii, uznawana za majstersztyk w swoim gatunku."
                            ],
                            "League of Legends - Gra MOBA",
                            [
                                "Opis: League of Legends to jedna z najbardziej popularnych gier typu MOBA (Multiplayer Online Battle Arena). Gracze tworzą drużyny, aby rywalizować z przeciwnikami na różnych mapach, z celem zniszczenia bazy wroga.",
                                "Tryby gry:",
                                ["5v5: Standardowy tryb gry, gdzie dwie drużyny po 5 graczy walczą na jednej mapie.",
                                    "ARAM: Krótsze mecze na jednej mapie, gdzie gracze walczą w 5-osobowych drużynach."],
                                "Dlaczego warto grać: League of Legends to dynamiczna gra wymagająca szybkiej reakcji i współpracy drużynowej. Jest jednym z głównych tytułów esportowych na świecie."
                            ]
                        ]}
                    />
                    <br/>
                    <br/>
                    <Section
                        title="Ulubione książki"
                        titleLevel={2}
                        listItems={[
                            "„Warcraft: Zbrodnie wojenne” – Christie Golden",
                            [
                                "Opis: Książka opowiada historię z uniwersum Warcrafta, kiedy to wojna między ludźmi a orkami trwa na całego. Główne postacie muszą zmierzyć się z przeszłością i moralnymi dylematami w trakcie wojny.",
                                "Charakterystyka bohaterów: Historia postaci takich jak Thrall, Jaina Proudmoore, którzy stają przed trudnymi wyborami moralnymi.",
                                "Tematyka: Zbrodnie wojenne, mroczne decyzje, walka o wolność i życie w zniszczonym świecie."
                            ],
                            "„Dune” – Frank Herbert",
                            [
                                "Opis: Dune to klasyczna powieść science fiction, która opowiada o walce o władzę na planecie Arrakis, która jest źródłem najcenniejszej substancji we wszechświecie. Książka łączy w sobie politykę, religię i ekologię.",
                                "Fabuła: Główny bohater, Paul Atreides, staje w obliczu wojny o Arrakis, gdzie zderzają się interesy różnych frakcji.",
                                "Tematyka: Ekologia, religia, władza i kontrola nad zasobami naturalnymi."
                            ],
                            "„Mały książę” – Antoine de Saint-Exupéry",
                            [
                                "Opis: Mały książę to opowieść o młodym chłopcu, który podróżuje po różnych planetach, spotykając różne postacie, które uczą go ważnych życiowych lekcji. To książka o miłości, przyjaźni i odpowiedzialności.",
                                "Postacie: Spotkania Małego Księcia z różnymi postaciami, które symbolizują aspekty ludzkiego życia.",
                                "Wartości: Książka uczy, jak ważne są relacje międzyludzkie i jak patrzeć na świat oczami dziecka."
                            ]
                        ]}
                    />
                    <br/>
                    <br/>
                    <SectionTable title="Ulubione filmy" headers={filmsHeaders} body={filmsData} />
                    <Section
                        title="Opisy filmów"
                        titleLevel={3}
                        listItems={[
                            "Dune (2021) - Film na podstawie powieści Franka Herberta, opowiadający historię Paula Atreidesa, który walczy o kontrolę nad planetą Arrakis.",
                            "Dune 2 (2024) - Kontynuacja historii Paula Atreidesa, który staje przed trudnymi wyborami w wyniku zbliżającej się wojny.",
                            "Star Wars: Łotr 1 (2016) - Film o grupie rebeliantów, którzy próbują zdobyć plany Gwiazdy Śmierci, co stanowi punkt wyjścia dla wydarzeń w klasycznych filmach z serii Star Wars."
                        ]}
                    />
                </Container>
            </main>
        </div>
    );
}

export default InterestsComponent;

