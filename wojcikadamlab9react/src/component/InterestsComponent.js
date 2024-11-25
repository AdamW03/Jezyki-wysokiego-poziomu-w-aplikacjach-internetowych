import React from 'react';
import styles from '../style/lab9styles.module.css';

function ContactComponent() {
    return (
        <div className={styles.container}>
            <h1>Moje zainteresowania</h1>
            <ul>
                <li>Programowanie</li>
                <li>Gry komputerowe</li>
                <li>Science Fiction</li>
            </ul>
        </div>
    );
}

export default ContactComponent;