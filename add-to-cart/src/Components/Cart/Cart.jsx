import React from 'react';
import './Cart.css';

const Cart = ({ cartItems, setCartItems }) => {
    // Function to increase quantity
    const handleIncreaseQuantity = (itemId) => {
        setCartItems((prevCartItems) =>
            prevCartItems.map((item) =>
                item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item
            )
        );
    };

    // Function to decrease quantity
    const handleDecreaseQuantity = (itemId) => {
        setCartItems((prevCartItems) =>
            prevCartItems
                .map((item) =>
                    item.id === itemId && item.quantity > 1
                        ? { ...item, quantity: item.quantity - 1 }
                        : item
                )
                .filter((item) => item.quantity > 0) // Remove items with 0 quantity
        );
    };

    // Function to calculate the total price
    const calculateTotal = () =>
        cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

    return (
        <div className="cart">
            <h2>Your Cart</h2>
            {cartItems.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <div>
                    {cartItems.map((item) => (
                        <div key={item.id} className="cart-item">
                            <div>
                                <img
                                    src={item.image}
                                    alt={item.name}
                                    className="cart-item-image"
                                    style={{ width: '50px', height: '50px' }}
                                />
                            </div>
                            <div className="cart-item-details">
                                <h3>{item.name}</h3>
                                <p>Unit Price: ${item.price}</p>
                                <div className="quantity-controls">
                                    <button
                                        className="quantity-button"
                                        onClick={() => handleDecreaseQuantity(item.id)}
                                    >
                                        -
                                    </button>
                                    <span>{item.quantity}</span>
                                    <button
                                        className="quantity-button"
                                        onClick={() => handleIncreaseQuantity(item.id)}
                                    >
                                        +
                                    </button>
                                </div>
                                <p>Total: ${item.price * item.quantity}</p>
                                <div className='delete'> 
                                    <span class="material-symbols-outlined">
                                        delete
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                    <h3 className='grand-total'>Grand Total: ${calculateTotal()}</h3>
                </div>
            )}
        </div>
    );
};

export default Cart;
