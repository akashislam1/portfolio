const SkillsCard = ({ img, text }) => {
  return (
    <div className="shadow-2xl border border-cyan-800 h-full text-slate-200 bg-gray-900 shadow-slate-900 hover:scale-110 duration-500 rounded-lg hover:border-cyan-400">
      <img className="w-20 mx-auto z-50 pt-3" src={img} alt="" />
      <p className="my-4 text-cyan-300 z-50 uppercase">{text}</p>
    </div>
  );
};

export default SkillsCard;
