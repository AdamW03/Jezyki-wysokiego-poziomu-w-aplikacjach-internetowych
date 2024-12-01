import React from 'react';
import '../style/Lab7AppComponent.module.css';
import ReUseComponent from "./ReUseComponent";
import TestUseState from "./TestUseState";
import TestUseReducer from "./TestUseReducer";
import TestUseEffect from "./TestUseEffect";
import TestUseContext from "./TestUseContext";
import TestUseRef from "./TestUseRef";

function Lab7AppComponent() {
    return (
        <div className="App">
            {/*Zadanie nr 1*/}
            <ReUseComponent  title="Zadanie 1">
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
            </ReUseComponent>

            {/*Zadanie nr 2*/}
            <ReUseComponent title="Zadanie 2">
                <ReUseComponent title="Test useState">
                    <TestUseState />
                </ReUseComponent>
                <ReUseComponent title="Test useReducer">
                    <TestUseReducer />
                </ReUseComponent>
                <ReUseComponent title="Test useEffect">
                    <TestUseEffect />
                </ReUseComponent>
                <ReUseComponent title="Test useContext">
                    <TestUseContext />
                </ReUseComponent>
                <ReUseComponent title="Test useRef">
                    <TestUseRef />
                </ReUseComponent>
            </ReUseComponent>
        </div>
    );
}

export default Lab7AppComponent;
