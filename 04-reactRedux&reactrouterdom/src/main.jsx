import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
} from "react-router-dom";
import App from './App.jsx'
import './index.css'
import RootLayout from './Layouts/RootLayout.jsx';
import Home from './Pages/Home.jsx';
import About from './Pages/About.jsx';
import Github from './Pages/Github.jsx';
import Contact from './Pages/Contact.jsx';
import store from './app/store'
import { Provider } from 'react-redux'
import Redux from './Pages/Redux.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path="/"
      element={<RootLayout />}
    >
      <Route path='' element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='github' element={<Github />} />
      <Route path='contact' element={<Contact />} />
      <Route path='redux' element={<Redux />} />
    </Route>
  )
);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>,
)
