// src/components/Product.js
import React from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from '../slices/cartSlice';
import './Product.css';

// src/App.js
function App() {
    const product = { id: 1, name: 'Product 1' }; // This is where the product object is defined

    return (
        <div className="container">
            <div className="header">
                <h1>My Store</h1>
            </div>
            <div product={product} /> {/* The product object is passed as a prop */}
            <Cart />
        </div>
    );
}


export default Product;
