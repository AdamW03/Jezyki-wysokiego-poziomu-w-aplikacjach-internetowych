import React from 'react';
import './App.css';
import ReUseComponent from "./components/ReUseComponent";

function App() {
  return (
    <div className="App">
      <ReUseComponent title="Pierwszy komponent" content="To jest pierwszy komponent.">
        <button>Przycisk</button>
      </ReUseComponent>

      <ReUseComponent title="Drugi komponent" content="To jest drugi komponent.">
        <ul>
          <li>Element 1</li>
          <li>Element 2</li>
          <li>Element 3</li>
        </ul>
      </ReUseComponent>

      <ReUseComponent title="Trzeci komponent" content="To jest trzeci komponent.">
        <p>Inna zawartość tutaj.</p>
      </ReUseComponent>
    </div>
  );
}

export default App;
