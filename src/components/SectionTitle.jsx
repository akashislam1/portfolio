const SectionTitle = ({ subTitle, title, text }) => {
  return (
    <div className="text-center md:w-2/4 mx-auto space-y-4 pt-10">
      <h5 className="text-cyan-500 text-3xl font-semibold">{subTitle}</h5>
      <h2 className="text-2xl md:text-4xl text-slate-200 font-bold">{title}</h2>
      <p>{text ? text : ""}</p>
    </div>
  );
};

export default SectionTitle;
