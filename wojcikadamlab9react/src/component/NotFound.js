import React from 'react';
import styles from '../style/lab9styles.module.css';

function NotFound() {
    return (
        <div className={styles.notFound}>
            <h1>404</h1>
            <p>Strona, której szukasz, nie istnieje.</p>
        </div>
    );
}

export default NotFound;