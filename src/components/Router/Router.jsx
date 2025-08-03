import { createBrowserRouter } from "react-router-dom"
import App from "../../App"
import Dashboard from "../../pages/Dashbord/Dashbord"
import Category from "../../pages/Category/Category"
import Product from "../../pages/Product/Product"
import Index from "../../Layout/Admin/Index"
import Content from "../../pages/content/Content"

const router = createBrowserRouter([
    {
      path: '/',       
      element: <Index />, // Layout (contains <Outlet />)
      children: [
        {
          path: 'content',
          
          element: <Content />, // Page layout or wrapper for /content/*
          children: [
            {
              index:true,
              path:"dashboard",
              element: <Dashboard /> // → /content/category
            },
            {
              path: 'category',
              element: <Category /> // → /content/category
            },
            {
              path: 'product',
              element: <Product /> // → /content/product
            }
          ]
        }
      ]
    }
  ])
  
  export default router