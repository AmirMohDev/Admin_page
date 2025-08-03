import { NavLink } from "react-router-dom";

const SidebarGroupItem = ({ title, isExpanded, icon, targetPath, lightmode }) => {
  return (
    <NavLink
      to={targetPath}
      className={({ isActive }) =>
        `flex items-center space-x-3 rounded-md p-2 cursor-pointer transition-colors duration-300
         ${isActive
           ? lightmode
             ? "bg-cyan-600 text-white"
             : "bg-cyan-500 text-white"
           : lightmode
           ? "hover:bg-cyan-100 text-gray-900"
           : "hover:bg-gray-700 text-gray-300"
         }`
      }
    >
      <span className="text-lg">{icon}</span>
      {isExpanded && <span className="text-sm">{title}</span>}
    </NavLink>
  );
};

export default SidebarGroupItem;
