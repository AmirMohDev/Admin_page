import { createBrowserRouter } from "react-router-dom";
import App from "../../App";
import Dashboard from "../../pages/Dashbord/Dashbord";
import Category from "../../pages/Category/Category";
import Product from "../../pages/Product/Product";
import Index from "../../Layout/Admin/Index";
import Content from "../../pages/content/Content";
import Colors from "../../pages/Colors/Colors";
import AddCategory from "../../pages/Category/AddCategory/AddCategory";
import AddProduct from "../../pages/Product/AddProduct/AddProduct";
import AddColor from "../../pages/Colors/AddColor/AddColor";
import Warranty from "../../pages/Warranty/Warranty";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Index />,
    children: [
      {
        path: "content",
        element: <Content />,
        children: [
          {
            index: true,
            path: "dashboard",
            element: <Dashboard />,
          },
          {
            path: "category",
            element: <Category />,
          },
          {
            path: "category/addcategory",
            element: <AddCategory />,
          },
          {
            path: "product/addproduct",
            element: <AddProduct />,
          },
          {
            path: "colors/addcolors",
            element: <AddColor/>,
          },
          {
            path: "colors",
            element: <Colors />,
          },
          {
            path: "product",
            element: <Product />,
          },
          {
            path: "warranty",
            element: <Warranty />,
          },
        ],
      },
    ],
  },
]);

export default router;
