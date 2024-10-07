import React from "react";
import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
} from "react-router-dom";
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux';
import store from './app/store.js';
import App from './App.jsx'
import './index.css'
import RootLayout from "./RootLayout.jsx";
import Cart from "./components/Cart.jsx";
import Product from "./components/Product.jsx";
import Home from "./components/Home.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route path="" element={<Home />} />
      <Route path="cart" element={<Cart />} />
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>,
  </React.StrictMode>,
)
