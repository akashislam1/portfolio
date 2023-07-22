import { useState } from "react";
import { Link } from "react-router-dom";

const ProjectPageCard = ({
  img,
  name,
  live_link,
  client_link,
  server_link,
  techlogies,
  features,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div className=" mx-2  bg-slate-700 border-cyan-400 rounded-lg border card-shadows p-4">
      <div
        className="w-full h-[240px] border border-cyan-600  bg-top bg-cover rounded-lg"
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
        <Link target={client_link && "_blank"} to={client_link}>
          <button className="text-slate-200 bg-gray-800 px-2 py-1 inline-block card-shadows">
            Client
          </button>
        </Link>
        <Link target={server_link && "_blank"} to={server_link}>
          <button className="text-slate-200 bg-gray-800 px-2 py-1 inline-block card-shadows">
            Server
          </button>
        </Link>
        <Link target={live_link && "_blank"} to={live_link}>
          <button className="text-slate-200 bg-gray-800 px-2 py-1 inline-block card-shadows">
            Live Demo
          </button>
        </Link>
      </div>
      <div className="text-gray-300">
        <span className="text-white text-xl my-2">Technologies used :</span>{" "}
        {techlogies}
      </div>
      <div className="text-gray-300 mb-5">
        <span className="text-white text-xl my-2">Features :</span> {features}
      </div>
    </div>
  );
};

export default ProjectPageCard;
