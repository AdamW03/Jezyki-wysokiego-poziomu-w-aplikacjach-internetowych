import React from 'react';
import styles from '../styles/Paragraph.module.css';

function Paragraph({ text }) {
    return <p className={styles.paragraph}>{text}</p>;
}

export default Paragraph;
