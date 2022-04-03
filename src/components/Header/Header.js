import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'
const Header = () => {
    return (
        <nav>

            <Link className='link' to='/home'>Home </Link>
            <Link className='link' to='/reviews'>Reviews </Link>
            <Link className='link' to='/dashboard'>Dashboard </Link>
            <Link className='link' to='/blogs'>Blogs </Link>
            <Link className='link' to='/about'>About </Link>
        </nav>
    );
};

export default Header;