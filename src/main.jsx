import React, { Children } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Order from './components/Order/Order.jsx';
import Home from './components/LayOut/Home.jsx';
import OrderReview from './components/OrderReview/OrderReview.jsx';
import ManageInventory from './components/ManageInventory/ManageInventory.jsx';
import Login from './components/Login/Login.jsx';
import cartProductsLoader from './CartProductsLoader/CartProductsLoader.js';
import CheckOut from './components/CheckOut/CheckOut.jsx';



const router=createBrowserRouter([
  {
    path:'/',
    element:<Home/>,
    children:[
      {
        path:'/',
      element:<Order></Order>
      },
      {
          path:'/OrderReview',
          element:<OrderReview></OrderReview>,
          loader:cartProductsLoader
      },
      {
        path:'/ManageInventory',
        element:<ManageInventory></ManageInventory>
      },
      {
        path:'/Login',
        element:<Login></Login>
      },
      {
          path:'/CheckOut',
          element:<CheckOut></CheckOut>
      },
    ]
  },
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router}/>
  </React.StrictMode>,
)
