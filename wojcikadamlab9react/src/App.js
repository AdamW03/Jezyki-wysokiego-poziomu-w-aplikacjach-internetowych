import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import AboutComponent from "./component/AboutComponent";
import InterestsComponent from "./component/InterestsComponent";
import ContactComponent from "./component/ContactComponent";
import FavoriteGameComponent from "./component/FavoriteGameComponent";
import NotFound from "./component/NotFound";
import Lab7AppComponent from "./component/Lab7AppComponent";
import Lab8AppComponent from "./component/Lab8AppComponent";

function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li><Link to="/">O mnie</Link></li>
          <li><Link to="/interests">Zainteresowania</Link></li>
          <li><Link to="/favoritegame">Ulubiona Gra</Link></li>
          <li><Link to="/lab7">Lab 7</Link></li>
          <li><Link to="/lab8">Lab 8</Link></li>
          <li><Link to="/contact">Kontakt</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<AboutComponent />} />
        <Route path="/interests" element={<InterestsComponent />} />
        <Route path="/favoritegame" element={<FavoriteGameComponent />} />
        <Route path="/lab7" element={<Lab7AppComponent />} />
        <Route path="/lab8" element={<Lab8AppComponent />} />
        <Route path="/contact" element={<ContactComponent />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
