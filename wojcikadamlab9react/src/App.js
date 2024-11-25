import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import AboutComponent from "./component/AboutComponent";
import InterestsComponent from "./component/InterestsComponent";
import ContactComponent from "./component/ContactComponent";
import FavoriteGameComponent from "./component/FavoriteGameComponent";

function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li><Link to="/">O mnie</Link></li>
          <li><Link to="/interests">Zainteresowania</Link></li>
          <li><Link to="/favoritegame">Ulubiona Gra</Link></li>
          <li><Link to="/contact">Kontakt</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<AboutComponent />} />
        <Route path="/interests" element={<InterestsComponent />} />
        <Route path="/favoritegame" element={<FavoriteGameComponent />} />
        <Route path="/contact" element={<ContactComponent />} />
      </Routes>
    </Router>
  );
}

export default App;
