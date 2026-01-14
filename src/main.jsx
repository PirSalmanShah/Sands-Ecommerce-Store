import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import LandingPage from './pages/LandingPage.jsx';
import Category from './pages/Category.jsx';
import Product from './pages/Product.jsx';
import ProductDetails from './pages/ProductDetails.jsx';
import Cart from './pages/Cart.jsx';

import { PersistGate } from 'redux-persist/integration/react';
import { persistor } from './store/CartStore.jsx'; 
import {cartStore} from './store/CartStore.jsx'
import { Provider } from 'react-redux';
import CheckOut from './pages/CheckOut.jsx';
import NotFound from './pages/NotFound.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children:[
      {
        index: true,
        element: <LandingPage/>
      },
      {
        path:"category",
        element: <Category/>
      },
      {
        path:"products/:slug",
        element: <Product/>
      },
      {
        path:"products-details/:id",
        element: <ProductDetails/>
      },
      {
        path:"cart",
        element: <Cart/>
      },
      {
        path:"checkout",
        element: <CheckOut/>
      }
      
    ]
  },
  {
        path:"*",
        element: <NotFound/>
      }
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={cartStore}>
      <PersistGate loading={null} persistor={persistor}>
        <RouterProvider router={router} className='font-[inter]'/>
      </PersistGate>
    </Provider>
  </StrictMode>,
)
