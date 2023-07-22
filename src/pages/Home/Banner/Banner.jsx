import Lottie from "lottie-react";
import coding from "../../../../public/coding.json";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { FaArrowRight } from "react-icons/fa";
const Banner = () => {
  const [text] = useTypewriter({
    words: [
      "Web Developer.",
      "Front End Developer.",
      "React Developer.",
      "MERN Stack Developer.",
    ],
    loop: true,
    typeSpeed: 200,
    delaySpeed: 100,
  });
  return (
    <div
      data-aos="fade-down"
      data-aos-easing="linear"
      data-aos-duration="1500"
      className="text-white flex flex-col md:flex-row justify-center items-center  my-12 overflow-x-hidden overflow-y-hidden"
    >
      {/* Text Content */}
      <div className="mb-10 lg:max-w-lg  lg:pr-5 lg:mb-0 w-full md:w-1/2">
        <div className="max-w-xl mb-6 lg:mt-8">
          <div>
            <div className="text-2xl sm:text-4xl font-bold space-y-4">
              <p className="text-cyan-600"> Hi I&apos;m</p>
              <p className="text-slate-200">Naimul Islam</p>
            </div>
          </div>
          <h2 className="max-w-lg my-4 text-cyan-500 text-2xl font-bold tracking-tight  sm:text-4xl sm:leading-none">
            <span className="text-gray-400">I&apos;m a </span>{" "}
            <span>{text}</span>
            <span>
              <Cursor></Cursor>
            </span>
          </h2>
          <div className="text-base md:text-lg text-gray-400 font-semibold">
            <a
              target="_blank"
              href="https://drive.google.com/file/d/1T949iwIlf276tqynRpRlzN6-uRka1cv7/view?usp=sharing"
              download
            >
              <button className="group my-4 relative h-12 w-48 overflow-hidden rounded-lg bg-slate-200 text-lg shadow">
                <div className="absolute inset-0 w-3 flex bg-cyan-700 transition-all duration-700 ease-out group-hover:w-full"></div>
                <span className="relative flex justify-center items-center gap-2 text-black group-hover:text-white">
                  See Resume
                  <FaArrowRight className="inline-block "></FaArrowRight>
                </span>
              </button>
            </a>
          </div>
        </div>
      </div>
      <div className="relative lg:w-1/2 mx-auto">
        <div className="w-full lg:w-4/5 lg:ml-auto ">
          <Lottie animationData={coding} loop={true}></Lottie>
        </div>
      </div>
    </div>
  );
};

export default Banner;
