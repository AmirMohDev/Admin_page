import AdminContextContaner from "../../context/Admin_context";
import Category from "../../pages/Category/Category";
import LayoutAdmin from "./LayoutAdmin/LayoutAdmin";
const Index = () => {
  
  return (
    <>

      <AdminContextContaner >
        <LayoutAdmin/>
      </AdminContextContaner>
    </>
  );
};

export default Index;
