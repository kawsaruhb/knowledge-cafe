import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <nav className='header'>
            <h2>Knowledge Cafe</h2>
            <div>
                <a href="/blogs">Blogs</a>
                <a href="/about">About Us</a>
                <a href="/login">Login</a>
            </div>
        </nav>
    );
};

export default Header;