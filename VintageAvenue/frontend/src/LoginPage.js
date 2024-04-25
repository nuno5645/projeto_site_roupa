import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginPage.css'; // Assuming your CSS rules are saved in this file

const LoginPage = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async (event) => {
        event.preventDefault();
        const response = await fetch('http://127.0.0.1:88/accounts/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            credentials: 'include',  // Needed for cookies/session to be included in requests
            body: JSON.stringify({ username: email, password: password }),
        });
    
        if (response.ok) {
            const data = await response.json();
            console.log('Login successful:', data);
            navigate('/market');
        } else {
            console.error('Failed to login');
        }
    };

    return (
        <div className="login-container">
            <div className="hero-text">
                <h1>Vintage Avenue</h1>
                <p>Your Exclusive Marketplace</p>
            </div>
            <form className="login-form" onSubmit={handleLogin}>
                <div className="form-group">
                    <input type="text" className="form-control" placeholder="Email" required
                        value={email} onChange={e => setEmail(e.target.value)} />
                </div>
                <div className="form-group">
                    <input type="password" className="form-control" placeholder="Senha" required
                        value={password} onChange={e => setPassword(e.target.value)} />
                </div>
                <button type="submit" className="login-button">Login</button>
            </form>
        </div>
    );
};

export default LoginPage;