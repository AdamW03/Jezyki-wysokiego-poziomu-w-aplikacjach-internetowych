import React, { useState } from 'react';
import styles from '../style/lab9styles.module.css';

function ContactComponent() {
        const [formData, setFormData] = useState({ name: '', email: '', message: '' });

        const handleChange = (e) => {
            const { name, value } = e.target;
            setFormData({ ...formData, [name]: value });
        };

        const handleSubmit = (e) => {
            e.preventDefault();
            alert(`Dziękujemy za wiadomość, ${formData.name}!`);
        };

    return (
        <div className={styles.container}>
            <h1>Kontakt</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Imię:</label>
                    <input type="text" name="name" value={formData.name} onChange={handleChange} required/>
                </div>
                <div>
                    <label>Email:</label>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} required/>
                </div>
                <div>
                    <label>Wiadomość:</label>
                    <textarea name="message" value={formData.message} onChange={handleChange} required/>
                </div>
                <button type="submit">Wyślij</button>
            </form>
        </div>
    );
}

export default ContactComponent;