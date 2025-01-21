import React from 'react';
import './ProductList.css';
import data from '../../data';

const ProductList = ({ searchValue, cartItems, setCartItems }) => {
  const filteredData = data.filter((item) =>
    item.name.toLowerCase().includes(searchValue.toLowerCase())
  );

  const handleAddToCart = (item) => {
    setCartItems((prevCartItems) => {
      const existingItem = prevCartItems.find((cartItem) => cartItem.id === item.id);

      if (existingItem) {
        // Update quantity if the item exists
        return prevCartItems.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      } else {
        // Add a new item if it doesn't exist
        return [...prevCartItems, { ...item, quantity: 1 }];
      }
    });
  };

  return (
    <div className="product-list">
      {filteredData.map((item) => (
        <div className="product-card" key={item.id}>
          <img
            src={item.image}
            alt={item.name}
            className="product-image"
            style={{ width: '180px', height: '200px' }}
          />
          <h2 className="product-name">{item.name}</h2>
          <p className="product-price">Price: ${item.price}</p>
          <button
            className="add-to-cart-btn"
            onClick={() => handleAddToCart(item)}
          >
            Add to Cart
          </button>
        </div>
      ))}
      {filteredData.length === 0 && <p>No products match your search.</p>}
    </div>
  );
};

export default ProductList;
