import { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const ProjectCard = ({ img, name, live_link, view_details }) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div className=" mx-4  bg-slate-700 border-cyan-400 rounded-lg border card-shadows p-4">
      <div
        className="w-full h-[240px]  bg-top bg-cover rounded-lg"
        style={{
          backgroundImage: `url(${img})`,
          backgroundPosition: isHovered ? "bottom" : "top",
          transition: "ease-in-out 8s",
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      ></div>
      <h2 className="text-white text-2xl my-2">{name}</h2>
      <div className="flex gap-5 flex-wrap justify-start items-center mt-4 mb-2">
        <Link to={view_details}>
          <button className="text-slate-200 bg-gray-800 px-2 py-1 inline-block card-shadows">
            View Details{" "}
            <FaArrowRight className="inline-block ml-2"></FaArrowRight>
          </button>
        </Link>

        <Link target={live_link && "_blank"} to={live_link}>
          <button className="text-slate-200 bg-gray-800 px-2 py-1 inline-block card-shadows">
            Live Demo
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;
