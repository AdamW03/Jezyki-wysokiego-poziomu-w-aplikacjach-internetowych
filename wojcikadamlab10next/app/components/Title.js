import React from 'react';
import styles from '../styles/Title.module.css';

function Title({ text, level = 1 }) {
    const Tag = `h${level}`;
    return <Tag className={styles.title}>{text}</Tag>;
}

export default Title;
