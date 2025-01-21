import React from 'react';
import './Cart.css';

const Cart = ({ cartItems, setCartItems }) => {
    const handleIncreaseQuantity = (itemId) => {
        setCartItems((prevCartItems) =>
            prevCartItems.map((item) =>
                item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item
            )
        );
    };

    const handleDecreaseQuantity = (itemId) => {
        setCartItems((prevCartItems) =>
            prevCartItems
                .map((item) =>
                    item.id === itemId && item.quantity > 1
                        ? { ...item, quantity: item.quantity - 1 }
                        : item
                )
                .filter((item) => item.quantity > 0)
        );
    };

    const handleDeleteItem = (itemId) => {
        setCartItems((prevCartItems) => prevCartItems.filter((item) => item.id !== itemId));
    };

    const calculateTotal = () =>
        cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2);

    return (
        <div className="cart">
            <h2>Your Cart</h2>
            {cartItems.length === 0 ? (
                <div>
                    <p>Your cart is empty.</p>
                </div>
            ) : (
                <div>
                    {cartItems.map((item) => (
                        <div key={item.id} className="cart-item">
                            <div>
                                <img
                                    src={item.image}
                                    alt={item.name}
                                    className="cart-item-image"
                                />
                            </div>
                            <div className="cart-item-details">
                                <h3>{item.name}</h3>
                                <p>Unit Price: ${item.price.toFixed(2)}</p>
                                <div className="quantity-controls">
                                    <button
                                        className="quantity-button"
                                        onClick={() => handleDecreaseQuantity(item.id)}
                                        title="Decrease quantity"
                                    >
                                        -
                                    </button>
                                    <span>{item.quantity}</span>
                                    <button
                                        className="quantity-button"
                                        onClick={() => handleIncreaseQuantity(item.id)}
                                        title="Increase quantity"
                                    >
                                        +
                                    </button>
                                </div>
                                <p>Total: ${(item.price * item.quantity).toFixed(2)}</p>
                                <div
                                    className="delete"
                                    onClick={() => handleDeleteItem(item.id)}
                                    title="Remove item"
                                    style={{ cursor: "pointer" }}
                                >
                                    <span className="material-symbols-outlined">delete</span>
                                </div>
                            </div>
                        </div>
                    ))}
                    <h3 className="grand-total">Grand Total: ${calculateTotal()}</h3>
                </div>
            )}
        </div>
    );
};

export default Cart;
