import '../styles/favoritegame.css';

export const metadata = {
    title: "Ulubione gry",
    description: "Strona z ulubionymi grami",
};

export default function FavoriteGameLayout({ children }) {
    return (
        <div className="favoritegame-container">
            <header className="favoritegame-header">
                <h2>Ulubione gry</h2>
            </header>
            <main className="favoritegame-main">{children}</main>
            <footer className="favoritegame-footer">
                <p>Strona o ulubionych grach</p>
            </footer>
        </div>
    );
}
