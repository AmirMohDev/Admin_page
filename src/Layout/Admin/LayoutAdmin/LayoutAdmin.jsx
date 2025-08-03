import { useContext } from "react";
import Sidebar from "../Sidebar/Index";
import Navbar from "../Navbar/Index";
import { AdminContext } from "../../../context/Admin_context";
import Category from "../../../pages/Category/Category";
import Content from "../../../pages/content/Content";

const LayoutAdmin = () => {
  const { lightmode } = useContext(AdminContext);

  return (
    <div className={`min-h-screen ${lightmode ? "bg-white" : "bg-[#0c111d]"} transition-all duration-500`}>
      <div>
      <Navbar />

      <div className="flex">
        <div className="w-64">
          <Sidebar />
        </div>

        <Content/>
      </div>
      </div>
    </div>
  );
};

export default LayoutAdmin;
