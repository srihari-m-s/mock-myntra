import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from 'react-router-dom'
import './index.css'
import '@fontsource-variable/inter';

// route imports
import ErrorPage from './error-page.jsx'
import Root from './routes/root-layout/Root.jsx'
import Shirts from './routes/shirts/Shirts.jsx'
import ProductPage from './routes/product/ProductPage.jsx'
import Home from './routes/home/Home.jsx'
import BagPage from './routes/bag/BagPage';


/**
 * Index file for the application.
 * Contains react-router Routing.
 */
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Root />} errorElement={<ErrorPage />} >
      <Route index element={<Home />}></Route>
      <Route path='/shirts'>
        <Route index element={<Shirts />} />
        <Route path=":productId" element={<ProductPage />}/>
      </Route>
      <Route path='/bag' element={<BagPage />}/>
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
