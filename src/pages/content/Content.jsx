import { useContext } from "react";
import AddCategory from "../Category/AddCategory/AddCategory";
import Category from "../Category/Category";
import { AdminContext } from "../../context/Admin_context";
import Dashboard from "../Dashbord/Dashbord";
import Product from "../Product/Product";
import AddProduct from "../Product/AddProduct/AddProduct";
import { Outlet } from "react-router-dom";
const Content = () => {
  return (
    <>
      <div className={`flex-1 p-6 `}>
        
       <Outlet/>
      </div>
    </>
  );
};

export default Content;
