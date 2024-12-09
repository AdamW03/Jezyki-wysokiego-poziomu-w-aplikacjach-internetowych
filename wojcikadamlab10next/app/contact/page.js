"use client";

import React, { useState } from 'react';
import styles from '../styles/page.module.css';
import Container from "../components/Container";
import Title from "../components/Title";

function ContactComponent() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Wiadomość wysłana: ${formData.name}, ${formData.email}, ${formData.message}`);
        setFormData({ name: '', email: '', message: '' });
    };

    return (
        <Container>
            <Title
                text="Kontakt"
                textLevel={1}
            />
            <form onSubmit={handleSubmit} className={styles.formContainer}>
                <div className={styles.formField}>
                    <label>Imię:</label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className={styles.formField}>
                    <label>Email:</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className={styles.formField}>
                    <label>Wiadomość:</label>
                    <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit" className={styles.submitButton}>Wyślij</button>
            </form>
        </Container>
    );
}

export default ContactComponent;
