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
          <li><Link to="/wojciklab9react/">O mnie</Link></li>
          <li><Link to="/wojciklab9react/interests">Zainteresowania</Link></li>
          <li><Link to="/wojciklab9react/favoritegame">Ulubiona Gra</Link></li>
          <li><Link to="/wojciklab9react/lab7">Lab 7</Link></li>
          <li><Link to="/wojciklab9react/lab8">Lab 8</Link></li>
          <li><Link to="/wojciklab9react/contact">Kontakt</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path="/wojciklab9react/" element={<AboutComponent />} />
        <Route path="/wojciklab9react/interests" element={<InterestsComponent />} />
        <Route path="/wojciklab9react/favoritegame" element={<FavoriteGameComponent />} />
        <Route path="/wojciklab9react/lab7" element={<Lab7AppComponent />} />
        <Route path="/wojciklab9react/lab8" element={<Lab8AppComponent />} />
        <Route path="/wojciklab9react/contact" element={<ContactComponent />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
