const Card = ({ currentValue, title, des, color1, color2, colortext }) => {
  return (
    <div
      className={`bg-gradient-to-r ${color1} ${color2} p-6 rounded-xl shadow-lg text-white`}
    >
      <p className="text-3xl font-bold">{currentValue}</p>
      <p className="mt-1 text-lg">{title}</p>
      <p className={`text-sm mt-3 ${colortext} opacity-90`}>{des}</p>
    </div>
  );
};

export default Card;
