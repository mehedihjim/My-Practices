// src/components/Cart.js
import React from 'react';
import { useSelector } from 'react-redux';
import './Cart.css';

const Cart = () => {
    const items = useSelector((state) => state.cart.items);

    return (
        <div className="cart-container">
            <h2>Cart</h2>
            {items.length === 0 ? (
                <p>No items in the cart</p>
            ) : (
                <ul className="cart-items">
                    {items.map((item, index) => (
                        <li key={index} className="cart-item">{item.name}</li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Cart;
