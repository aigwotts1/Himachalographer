// pages/signup.tsx

"use client"; // Client Component directive

import React, { useState } from 'react';
import { useRouter } from 'next/router';
import styles from './Form.module.css';

interface SignupFormState {
    email: string;
    password: string;
    confirmPassword: string;
}

const SignupPage: React.FC = () => {
    const [formState, setFormState] = useState<SignupFormState>({
        email: '',
        password: '',
        confirmPassword: ''
    });
    // const router = useRouter();

    // const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    //     e.preventDefault();
    //     if (formState.password !== formState.confirmPassword) {
    //         alert("Passwords don't match");
    //         return;
    //     }
    //     console.log('Creating user with', formState.email, formState.password);
    //     router.push('/login');
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
            <h2 className={styles.formTitle}>Sign Up</h2>
            <form onSubmit={() => console.log('hi')}>
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
                <div className={styles.formGroup}>
                    <label htmlFor="confirmPassword">Confirm Password:</label>
                    <input
                        id="confirmPassword"
                        name="confirmPassword"
                        type="password"
                        value={formState.confirmPassword}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit" className={styles.submitButton}>Sign Up</button>
                <p className={styles.link}>
                    Already have an account? <a href="/login">Login</a>
                </p>
            </form>
        </div>
    );
};

export default SignupPage;
