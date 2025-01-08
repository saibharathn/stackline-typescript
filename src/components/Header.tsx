import React from 'react';
import '../styles/Header.css'; 

const Header: React.FC = () => {
    return (
        <header className="header">
            <img src={''} alt="Stackline Logo" className="logo" />
            <h1>Product Dashboard</h1>
        </header>
    );
};

export default Header;
