import React from 'react';
import './VintageAvenue.css';
import { useNavigate } from 'react-router-dom';

const VintageAvenue = () => {
    const navigate = useNavigate();

    const scrollDown = () => {
        window.scrollTo({
            top: window.innerHeight,
            behavior: 'smooth'
        });
    };

    const handleLoginClick = () => {
        navigate('/login'); // Navigate to the login page
    };

    return (
        <div className="hero-container">
            <div className="hero-text">
                <h1>Vintage Avenue</h1>
                <p>SECOND HAND LUXURY</p>
                <p>AS MELHORES MARCAS E DESIGNERS TRUSTED SELLER</p>
                <button className="login-button" onClick={handleLoginClick}>LOGIN</button>
                <div className="slide-down-icon" onClick={scrollDown}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-chevron-down" viewBox="0 0 16 16">
                      <path d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 .707.707l6-6a.5.5 0 0 1 0-.708l-6 6A.5.5 0 0 1 8 11.293L1.354 4.646a.5.5 0 0 1 0-.708z"/>
                    </svg>
                </div>
            </div>
        </div>
    );
};

export default VintageAvenue;