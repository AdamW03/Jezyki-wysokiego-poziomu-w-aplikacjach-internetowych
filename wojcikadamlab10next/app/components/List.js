import React from 'react';
import styles from '../styles/List.module.css';

function List({ items }) {
    return (
        <ul className={styles.list_ul}>
            {items.map((item, index) => (
                Array.isArray(item) ? (
                        <List key={index} items={item} />
                ) : (
                        <li key={index} className={styles.list_li}>{item}</li>
                    )
                // <li key={index} className={styles.list_li}>{item}</li>
            ))}
        </ul>
    );
}

export default List;
