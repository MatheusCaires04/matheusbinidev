import React from "react";

import skill from "/assets/skills.jpg";
import Title from "../components/Title";

const Skills = () => {
  return (
    <div className="py-20 px-8 w-full bg-blue-dark">
      <div className="flex flex-col items-center">
        <Title title="Skills" />
        <div className="flex flex-col items-center text-white">
          <div className="w-60 h-60 border-4 border-orange rounded-full overflow-hidden">
            <img src={skill} alt="" className="w-full h-full object-cover" />
          </div>
          <p className="text-2xl md:text-3xl text-center font-concert font-medium w-full sm:w-[70%] md:w-[60%] mt-10">
            I have learned a lot of skills as a frontend developer and I am
            always learning something new to add a new skill to the list
          </p>
          <ul className="flex flex-wrap justify-center gap-8 w-full md:w-[50%] mt-10">
            <li className="bg-orange text-base md:text-xl font-medium font-concert px-3 py-1">
              HTML
            </li>
            <li className="bg-orange text-base md:text-xl font-medium font-concert px-3 py-1">
              CSS
            </li>
            <li className="bg-orange text-base md:text-xl font-medium font-concert px-3 py-1">
              JavaScript
            </li>
            <li className="bg-orange text-base md:text-xl font-medium font-concert px-3 py-1">
              ReactJS
            </li>
            <li className="bg-orange text-base md:text-xl font-medium font-concert px-3 py-1">
              MySQL
            </li>
            <li className="bg-orange text-base md:text-xl font-medium font-concert px-3 py-1">
              MongoDB
            </li>
            <li className="bg-orange text-base md:text-xl font-medium font-concert px-3 py-1">
              NodeJS
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Skills;
