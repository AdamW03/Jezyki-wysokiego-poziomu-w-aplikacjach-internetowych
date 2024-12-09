import React from 'react';
import Container from './components/Container';
import Section from './components/Section';

function AboutComponent() {
    return (
        <Container>
            <Section
                title="O Mnie"
                titleLevel={1}
                paragraphs={"Jestem osobą o szerokich zainteresowaniach w dziedzinie technologii, programowania i rozwoju systemów komputerowych. Zajmuję się projektowaniem, tworzeniem i wdrażaniem rozwiązań informatycznych, z naciskiem na efektywność i innowacyjność."}
            />

            <Section
                title="Obszary Zainteresowań"
                titleLevel={2}
                paragraphs={["Moje główne zainteresowania obejmują:"]}
                listItems={[
                    "Inżynieria oprogramowania - projektowanie aplikacji internetowych i mobilnych",
                    "Robotyka - tworzenie systemów automatyki i rozwiązań sterujących",
                    "Systemy rozproszone i chmurowe - rozwój aplikacji opartych na chmurze oraz DevOps",
                    "Gry komputerowe - szczególnie te, które angażują umiejętności analityczne i strategiczne",
                    "Badania nad sztuczną inteligencją oraz uczeniem maszynowym"
                ]}
            />

            <Section
                title="Doświadczenie zawodowe"
                titleLevel={2}
                paragraphs={["W ciągu mojej kariery zawodowej uczestniczyłem w licznych projektach, obejmujących:"]}
                listItems={[
                    "Tworzenie aplikacji webowych i mobilnych przy użyciu nowoczesnych frameworków i technologii",
                    "Prace badawcze związane z zastosowaniem sztucznej inteligencji w różnych dziedzinach",
                    "Rozwój i integracja systemów automatyzujących procesy przemysłowe",
                    "Praca z narzędziami wspomagającymi rozwój oprogramowania i testowanie aplikacji"
                ]}
            />

            <Section
                title="Plany na przyszłość"
                titleLevel={2}
                paragraphs={["W najbliższej przyszłości planuję kontynuować rozwój w następujących obszarach:"]}
                listItems={[
                    "Doskonalenie umiejętności w zakresie sztucznej inteligencji i uczenia maszynowego",
                    "Praca nad projektami związanymi z blockchainem i rozproszonymi aplikacjami",
                    "Współpraca przy tworzeniu innowacyjnych systemów w chmurze"
                ]}
            />

            <Section
                title="Filozofia pracy"
                titleLevel={2}
                paragraphs={["W pracy zawodowej kieruję się zasadą ciągłego doskonalenia i dążenia do optymalizacji procesów. Zawsze stawiam na jakość, innowacyjność i zrozumienie potrzeb użytkowników końcowych, co pozwala na tworzenie rozwiązań spełniających wysokie standardy."]}
            />
        </Container>
    );
}

export default AboutComponent;
