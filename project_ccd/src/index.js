//import React from 'react';
//import ReactDOM from 'react-dom/client';
import './index.css';
import * as React from "react";
import { createRoot } from "react-dom/client";


import {
  createBrowserRouter,
  RouterProvider,

} from "react-router-dom";
import Firstpage from './components/Firstpage';
import Secondpage from './components/Secondpage';
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';
import AddProduct from './components/AddProduct';
import LikedProducts from './components/LikedProducts';
import ProductDetail from './components/ProductDetail';
import CategoryPage from './components/CategoryPage';
import MyProducts from './components/MyProducts';
import MyProfile from './components/MyProfile';
import Feedback from './components/Feedback';
const router = createBrowserRouter([
  {
    path: "/",
    element: (<Firstpage/>),
  },

  {
      path: "/Secondpage",
      element: (<Secondpage/>),
  },

  {
     path: "/home",
     element: (<Home/>),
  },

  {
    path: "/category/:catName",
    element: (<CategoryPage />),
  },
      
  {
    path: "about",
    element: <div>About</div>,
  },

  {
    path: "/login",
    element: (<Login/>),   // this path will redirect to login page
  },

  {
    path: "/signup",         //This path will redirect to signup page  
    element: (<Signup/>),
  },

  {
    path: "/add-product",
    element: (<AddProduct />),
  },

  {
    path: "/liked-products",
    element: (<LikedProducts />),
  },

  {
    path: "/my-products",
    element: (<MyProducts />),
  },

  {
    path: "/feedback",
    element: (<Feedback />),
  },

  {
    path: "/product/:productId",
    element: (<ProductDetail />),
  },

  {
    path: "/my-profile",
    element: (<MyProfile />),
  },
]);
createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);



















//import App from './App';
//import reportWebVitals from './reportWebVitals';



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals




/*const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <h1>Hello World</h1>
        <Link to="about">About Us</Link>
      </div>
    ),
  },
  {
    path: "about",
    element: <div>About</div>,
  },
]);
*/



//reportWebVitals();
