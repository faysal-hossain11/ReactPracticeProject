import React from 'react';
// import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div className='header-link'>
            <a href="/home">Home</a>
            <a href="/faysal">Faysal</a>
            <a href="/content">Content</a>
        </div>
    );
};

export default Header;