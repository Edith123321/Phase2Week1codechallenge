import React from 'react';
import './NavBar.css';
import Logo from '../../assets/Logo.png';

const NavBar = ({ setSearchValue, cartCount }) => {
    const handleSearchChange = (e) => {
        setSearchValue(e.target.value);
    };

    return (
        <div className="navbar">
            <nav>
                <div className="logo">
                    <img src={Logo} alt="Clothing store logo" />
                </div>
                <div className="search-bar">
                    <input
                        type="text"
                        placeholder="Search products..."
                        onChange={handleSearchChange}
                    />

                </div>
                <div className="cart-icon">
                    <i class="fa-solid fa-cart-shopping"></i>
                    <span>{cartCount}</span>
                </div>
            </nav>
        </div>
    );
};

export default NavBar;
