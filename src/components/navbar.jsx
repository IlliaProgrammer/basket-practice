import React from 'react';
import { Link } from 'react-router-dom';
import {HiOutlineShoppingCart} from "react-icons/hi"
import "./navbar.css";
 
const Navbar = () => {
    return (
        <div className='navbar'>
            <h1 className='title'>LuxuryShop</h1>
            <div className='links'>
                <Link className='link' to="/">Shop</Link>
                <Link  className='link' to="/cart"><HiOutlineShoppingCart/></Link>
            </div>
                
        </div> 
    );
};

export default Navbar;