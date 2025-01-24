import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
    return (
        <div style={{ textAlign: 'center', padding: '2rem' }}>
            <h1>Welcome to Trello AI</h1>
            <Link to="/login">Login</Link> | <Link to="/register">Register</Link>
        </div>
    );
};

export default HomePage;
