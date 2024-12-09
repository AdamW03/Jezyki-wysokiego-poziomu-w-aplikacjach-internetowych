import '../styles/interests.css';

export const metadata = {
    title: "Zainteresowania",
    description: "Strona o zainteresowaniach",
};

export default function InterestsLayout({ children }) {
    return (
        <div className="interests-container">
            <header className="interests-header">
                <h2>Moje zainteresowania</h2>
            </header>
            <main className="interests-main">{children}</main>
            <footer className="interests-footer">
                <p>Zainteresowania - Footer</p>
            </footer>
        </div>
    );
}
