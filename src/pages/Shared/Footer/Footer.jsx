import moment from "moment";
const Footer = () => {
  return (
    <div className="w-full border-t border-cyan-400 font-semibold lg:w-10/12 mx-auto px-5 lg:px-0 md:px-0 py-4 relative text-center">
      <h1 className="text-white text-lg ">
        © {moment().format("YYYY")} All Rights Reserved and Created by{" "}
        <span className="font-bold text-animate ml-1">Naimul Islam</span>
      </h1>
    </div>
  );
};

export default Footer;
