import React from 'react';
import logo from'../../images/Logo.svg';
import'./Header.css';
import { Link } from 'react-router-dom';
const Header = () => {
    return (
        <div className='header'>
            <img src={logo} alt="" srcset="" />
            <div>
                <Link to="/">Order</Link>
                <Link to="/OrderReview">Order Review</Link>
                <Link to="ManageInventory">Manage Inventory</Link>
                <Link to="/Login">Login</Link>
            </div>
        </div>
    );
};

export default Header;