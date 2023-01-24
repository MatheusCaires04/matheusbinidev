import React from "react";
import { FaGithubAlt } from "react-icons/fa";
import { MdOutlineOpenInNew } from "react-icons/md";

const CardProjects = (props) => {
  return (
    <div className="border-4 border-orange overflow-hidden relative group">
      <img src={props.img} alt={props.url} />
      <div className="absolute top-[-100%] left-0 w-full h-full bg-black/90 text-white flex flex-col items-center justify-center group-hover:top-0">
        <span className="font-medium text-lg md:text-2xl text-center w-[70%] duration-300">
          Go to the website or Code on GitHub
        </span>
        <div className="flex items-center gap-4 mt-4 ">
          <a
            href={props.website}
            target="_blank"
            className="flex items-center gap-2 border-2 border-orange rounded-xl px-3 py-1 font-medium text-sm md:text-lg hover:bg-orange duration-200"
          >
            WebSite <MdOutlineOpenInNew />
          </a>
          <a
            href={props.github}
            target="_blank"
            className="flex items-center gap-2 border-2 border-orange rounded-xl px-3 py-1 font-medium text-sm md:text-lg hover:bg-orange duration-200"
          >
            GitHub <FaGithubAlt />
          </a>
        </div>
      </div>
    </div>
  );
};

export default CardProjects;
