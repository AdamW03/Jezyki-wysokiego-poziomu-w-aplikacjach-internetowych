import React from 'react';
import styles from '../style/lab9styles.module.css';

function ContactComponent() {
    return (
        <div className={styles.generalContainer}>
            <h1>Moje zainteresowania</h1>

            <ul className="centered-list">
                <li>Programowanie</li>
                <li>Gry komputerowe</li>
                <li>Science Fiction</li>
            </ul>


            <h2>Ulubione gry komputerowe</h2>
            <ul>
                <li>
                    <strong>StarCraft 2 - Gra strategiczna czasu rzeczywistego</strong>
                    <ul>
                        <li>
                            <strong>Opis:</strong> StarCraft 2 to jedna z najważniejszych gier strategicznych czasu rzeczywistego, opracowana przez Blizzard Entertainment. Gracze wybierają jedną z trzech ras (Terran, Zerg, Protoss) i rywalizują w dynamicznych bitwach, które wymagają zarówno planowania, jak i szybkiego podejmowania decyzji.
                        </li>
                        <br/>
                        <li>
                            <strong>Tryby gry:</strong>
                            <ul>
                                <li><strong>Singleplayer:</strong> Kampania fabularna, gdzie gracz bierze udział w wojnie o dominację w galaktyce.</li>
                                <li><strong>Multiplayer:</strong> Rywalizuj z graczami z całego świata w grach rankingowych i przyjacielskich.</li>
                                <li><strong>Co-op:</strong> Tryb współpracy, w którym gracze wykonują wspólne misje.</li>
                            </ul>
                        </li>
                        <br/>
                        <li>
                            <strong>Dlaczego warto grać:</strong> Gra oferuje świetną zabawę zarówno dla początkujących, jak i zaawansowanych graczy. Zaawansowana sztuczna inteligencja, zróżnicowane strategie i nieustanny rozwój sprawiają, że StarCraft 2 nigdy się nie nudzi.
                        </li>
                    </ul>
                </li>
                <br/>
                <br/>
                <li>
                    <strong>The Witcher 3 - Gra RPG z otwartym światem</strong>
                    <ul>
                        <li>
                            <strong>Opis:</strong> The Witcher 3 to gra RPG, która opowiada historię Geralta z Rivii, łowcy potworów, w wielkim, otwartym świecie, pełnym niebezpieczeństw. Gra łączy w sobie elementy walki, eksploracji, a także głęboko zakorzenione w uniwersum fantasy wybory moralne.
                        </li>
                        <br/>
                        <li>
                            <strong>Funkcje:</strong>
                            <ul>
                                <li><strong>Eksploracja świata:</strong> Otwarte krainy, pełne miast, wiosek, tajemniczych miejsc i potworów do zabicia.</li>
                                <li><strong>Wybory moralne:</strong> Decyzje, które wpływają na fabułę oraz końcowy wynik gry.</li>
                                <li><strong>Walka i magia:</strong> Złożony system walki, z wykorzystaniem miecza i magii w strategiczny sposób.</li>
                            </ul>
                        </li>
                        <br/>
                        <li>
                            <strong>Dlaczego warto grać:</strong> The Witcher 3 oferuje ogromną głębię fabularną i niezliczone misje poboczne. Gra jest jedną z najlepszych w historii, uznawana za majstersztyk w swoim gatunku.
                        </li>
                    </ul>
                </li>
                <br/>
                <br/>
                <li>
                    <strong>League of Legends - Gra MOBA</strong>
                    <ul>
                        <li>
                            <strong>Opis:</strong> League of Legends to jedna z najbardziej popularnych gier typu MOBA (Multiplayer Online Battle Arena). Gracze tworzą drużyny, aby rywalizować z przeciwnikami na różnych mapach, z celem zniszczenia bazy wroga.
                        </li>
                        <br/>
                        <li>
                            <strong>Tryby gry:</strong>
                            <ul>
                                <li><strong>5v5:</strong> Standardowy tryb gry, gdzie dwie drużyny po 5 graczy walczą na jednej mapie.</li>
                                <li><strong>ARAM:</strong> Krótsze mecze na jednej mapie, gdzie gracze walczą w 5-osobowych drużynach.</li>
                            </ul>
                        </li>
                        <br/>
                        <li>
                            <strong>Dlaczego warto grać:</strong> League of Legends to dynamiczna gra wymagająca szybkiej reakcji i współpracy drużynowej. Jest jednym z głównych tytułów esportowych na świecie.
                        </li>
                    </ul>
                </li>
            </ul>

            <br/>
            <br/>
            <h2>Ulubione książki</h2>
            <ul>
                <li>
                    <strong>„Warcraft: Zbrodnie wojenne” – Christie Golden</strong>
                    <ul>
                        <li>
                            <strong>Opis:</strong> Książka opowiada historię z uniwersum Warcrafta, kiedy to wojna między ludźmi a orkami trwa na całego. Główne postacie muszą zmierzyć się z przeszłością i moralnymi dylematami w trakcie wojny.
                        </li>
                        <li><strong>Charakterystyka bohaterów:</strong> Historia postaci takich jak Thrall, Jaina Proudmoore, którzy stają przed trudnymi wyborami moralnymi.</li>
                        <li><strong>Tematyka:</strong> Zbrodnie wojenne, mroczne decyzje, walka o wolność i życie w zniszczonym świecie.</li>
                    </ul>
                </li>
                <br/>
                <li>
                    <strong>„Dune” – Frank Herbert</strong>
                    <ul>
                        <li>
                            <strong>Opis:</strong> Dune to klasyczna powieść science fiction, która opowiada o walce o władzę na planecie Arrakis, która jest źródłem najcenniejszej substancji we wszechświecie. Książka łączy w sobie politykę, religię i ekologię.
                        </li>
                        <li><strong>Fabuła:</strong> Główny bohater, Paul Atreides, staje w obliczu wojny o Arrakis, gdzie zderzają się interesy różnych frakcji.</li>
                        <li><strong>Tematyka:</strong> Ekologia, religia, władza i kontrola nad zasobami naturalnymi.</li>
                    </ul>
                </li>
                <br/>
                <li>
                    <strong>„Mały książę” – Antoine de Saint-Exupéry</strong>
                    <ul>
                        <li>
                            <strong>Opis:</strong> Mały książę to opowieść o młodym chłopcu, który podróżuje po różnych planetach, spotykając różne postacie, które uczą go ważnych życiowych lekcji. To książka o miłości, przyjaźni i odpowiedzialności.
                        </li>
                        <li><strong>Postacie:</strong> Spotkania Małego Księcia z różnymi postaciami, które symbolizują aspekty ludzkiego życia.</li>
                        <li><strong>Wartości:</strong> Książka uczy, jak ważne są relacje międzyludzkie i jak patrzeć na świat oczami dziecka.</li>
                    </ul>
                </li>
            </ul>

            <h2>Ulubione filmy</h2>
            <table className={styles.infoTable}>
                <thead>
                <tr>
                    <th>Film</th>
                    <th>Reżyser</th>
                    <th>Rok</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>Dune 1</td>
                    <td>Denis Villeneuve</td>
                    <td>2021</td>
                </tr>
                <tr>
                    <td>Dune 2</td>
                    <td>Denis Villeneuve</td>
                    <td>2024</td>
                </tr>
                <tr>
                    <td>Star Wars: Łotr 1</td>
                    <td>Gareth Edwards</td>
                    <td>2016</td>
                </tr>
                </tbody>
            </table>

            <h3>Opisy filmów</h3>
            <ul>
                <li>
                    <strong>Dune (2021)</strong> - Film na podstawie powieści Franka Herberta, opowiadający historię Paula Atreidesa, który walczy o kontrolę nad planetą Arrakis.
                </li>
                <li>
                    <strong>Dune 2 (2024)</strong> - Kontynuacja historii Paula Atreidesa, który staje przed trudnymi wyborami w wyniku zbliżającej się wojny.
                </li>
                <li>
                    <strong>Star Wars: Łotr 1 (2016)</strong> - Film o grupie rebeliantów, którzy próbują zdobyć plany Gwiazdy Śmierci, co stanowi punkt wyjścia dla wydarzeń w klasycznych filmach z serii Star Wars.
                </li>
            </ul>
        </div>
    );
}

export default ContactComponent;
