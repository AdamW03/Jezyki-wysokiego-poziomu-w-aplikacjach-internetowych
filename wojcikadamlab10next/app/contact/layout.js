import '../styles/contact.css';

export const metadata = {
    title: "Kontakt",
    description: "Strona kontaktowa",
};

export default function ContactLayout({ children }) {
    return (
        <div className="contact-container">
            <header className="contact-header">
                <h2>Kontakt</h2>
            </header>
            <main className="contact-main">{children}</main>
            <footer className="contact-footer">
                <p>Kontakt - Footer</p>
            </footer>
        </div>
    );
}
