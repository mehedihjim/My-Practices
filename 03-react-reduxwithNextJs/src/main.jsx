import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
} from "react-router-dom";
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import store from './app/store'
import { Provider } from 'react-redux'
import App from './App.jsx'
import './index.css'
import RootLayouts from "./layouts/RootLayouts.jsx";
import Home from "./components/Home.jsx";
import Todo from "./components/Todo.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayouts />}>
      <Route path="" element={<Home />} />
      <Route path="todo" element={<Todo />} />
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
