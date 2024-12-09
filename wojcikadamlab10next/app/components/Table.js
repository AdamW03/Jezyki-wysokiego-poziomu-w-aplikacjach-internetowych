import React from 'react';
import styles from '../styles/Table.module.css';

function Table({ headers, body }) {
    return (
        <table className={styles.table}>
            <thead>
            <tr>
                {headers.map((header, index) => (
                    <th key={index}>{header}</th>
                ))}
            </tr>
            </thead>
            <tbody>
            {body.map((row, rowIndex) => (
                <tr key={rowIndex}>
                    {row.map((cell, cellIndex) => (
                        <td key={cellIndex}>{cell}</td>
                    ))}
                </tr>
            ))}
            </tbody>
        </table>
    );
}

export default Table;
