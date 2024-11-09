// pages/login.tsx

"use client"; // Client Component directive

import React, { useState } from 'react';
import { useRouter } from 'next/router';
import styles from './Form.module.css';

interface LoginFormState {
    email: string;
    password: string;
}

const LoginPage: React.FC = () => {
    const [formState, setFormState] = useState<LoginFormState>({
        email: '',
        password: ''
    });
    // const router = useRouter();

    // const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    //     e.preventDefault();
    //     console.log('Logging in with', formState.email, formState.password);
    //     router.push('/dashboard');
    // };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormState(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    return (
        <div className={styles.formContainer}>
            <h2 className={styles.formTitle}>Login</h2>
            <form onSubmit={() => console.log('hii')}>
                <div className={styles.formGroup}>
                    <label htmlFor="email">Email:</label>
                    <input
                        id="email"
                        name="email"
                        type="email"
                        value={formState.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor="password">Password:</label>
                    <input
                        id="password"
                        name="password"
                        type="password"
                        value={formState.password}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit" className={styles.submitButton}>Login</button>
                <p className={styles.link}>
                    Don't have an account? <a href="/signup">Sign Up</a>
                </p>
            </form>
        </div>
    );
};

export default LoginPage;
