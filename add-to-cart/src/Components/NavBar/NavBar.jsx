import React from 'react';
import './NavBar.css';
import Logo from '../../assets/Logo.png';

const NavBar = ({ setSearchValue, cartCount }) => {
    // Handle search input changes
    const handleSearchChange = (e) => {
        setSearchValue(e.target.value);
    };

    return (
        <header className="navbar">
            <div className="navbar-container">
                {/* Logo */}
                <div className="logo">
                    <img src={Logo} alt="Clothing store logo" />
                </div>

                {/* Search Bar */}
                <div className="search-bar">
                    <input
                        type="text"
                        placeholder="Search products..."
                        onChange={handleSearchChange}
                    />
                </div>

                {/* Shopping Cart */}
                <div className="cart-icon">
                    <i className="material-icons">shopping_cart</i>
                    <span className="cart-count">{cartCount}</span>
                </div>
            </div>
        </header>
    );
};

export default NavBar;
