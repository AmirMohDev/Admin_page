const SidebarGroupTitle = ({ name, lightmode }) => {
  return (
    <div
      className={`text-[17px] flex justify-center w-full text-center px-2 pt-4 pb-1 font-bold
      ${lightmode ? "text-cyan-700" : "text-cyan-400"}`}
    >
      {name}
    </div>
  );
};

export default SidebarGroupTitle;
