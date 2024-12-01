import React from 'react';
import styles from '../style/lab9styles.module.css';

function AboutComponent() {
    return (
        <div className={styles.generalContainer}>
            <h1>O Mnie</h1>
            <p>Jestem osobą o szerokich zainteresowaniach w dziedzinie technologii, programowania i rozwoju systemów
                komputerowych. Zajmuję się projektowaniem, tworzeniem i wdrażaniem rozwiązań informatycznych, z
                naciskiem na efektywność i innowacyjność.</p>

            <h2>Obszary Zainteresowań</h2>
            <p>Moje główne zainteresowania obejmują:</p>
            <ul>
                <li>Inżynieria oprogramowania - projektowanie aplikacji internetowych i mobilnych</li>
                <li>Robotyka - tworzenie systemów automatyki i rozwiązań sterujących</li>
                <li>Systemy rozproszone i chmurowe - rozwój aplikacji opartych na chmurze oraz DevOps</li>
                <li>Gry komputerowe - szczególnie te, które angażują umiejętności analityczne i strategiczne</li>
                <li>Badania nad sztuczną inteligencją oraz uczeniem maszynowym</li>
            </ul>

            <h2>Doświadczenie zawodowe</h2>
            <p>W ciągu mojej kariery zawodowej uczestniczyłem w licznych projektach, obejmujących:</p>
            <ul>
                <li>Tworzenie aplikacji webowych i mobilnych przy użyciu nowoczesnych frameworków i technologii</li>
                <li>Prace badawcze związane z zastosowaniem sztucznej inteligencji w różnych dziedzinach</li>
                <li>Rozwój i integracja systemów automatyzujących procesy przemysłowe</li>
                <li>Praca z narzędziami wspomagającymi rozwój oprogramowania i testowanie aplikacji</li>
            </ul>

            <h2>Plany na przyszłość</h2>
            <p>W najbliższej przyszłości planuję kontynuować rozwój w następujących obszarach:</p>
            <ul>
                <li>Doskonalenie umiejętności w zakresie sztucznej inteligencji i uczenia maszynowego</li>
                <li>Praca nad projektami związanymi z blockchainem i rozproszonymi aplikacjami</li>
                <li>Współpraca przy tworzeniu innowacyjnych systemów w chmurze</li>
            </ul>

            <h2>Filozofia pracy</h2>
            <p>W pracy zawodowej kieruję się zasadą ciągłego doskonalenia i dążenia do optymalizacji procesów. Zawsze
                stawiam na jakość, innowacyjność i zrozumienie potrzeb użytkowników końcowych, co pozwala na tworzenie
                rozwiązań spełniających wysokie standardy.</p>
        </div>
    );
}

export default AboutComponent;