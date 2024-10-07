import React from 'react';
import Product from './components/Product';
import Cart from './components/Cart';
import './App.css'

function App() {
  const product = { id: 1, name: 'Product 1' };

  return (
    <div>
      <h1>My Store</h1>
      <Product product={product} />
      <Cart />
    </div>
  );
}

export default App;
