import { createContext, useState } from "react";

export const AdminContext = createContext({
  lightmode: false,
  setlightmode: () => {},
  categorymodal:false,
  setcategorymodal: () => {},
});
const AdminContextContaner = ({ children }) => {
  const [lightmode, setlightmode] = useState(false);
  const [categorymodal, setcategorymodal] = useState(false);
  return (
    <AdminContext.Provider value={{ lightmode, setlightmode,categorymodal,setcategorymodal }}>
      {children}
    </AdminContext.Provider>
  );
};
export default AdminContextContaner;
