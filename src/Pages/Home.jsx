import React from "react";
import {
  FaFacebook,
  FaGithub,
  FaInstagramSquare,
  FaLinkedin,
} from "react-icons/fa";
import Typewriter from "typewriter-effect";

import photo from "/assets/photo.jpeg";

const style = {
  linkSocialMedia: "hover:text-orange duration-150 cursor-pointer",
};

const Home = () => {
  return (
    <div className="pt-20 px-8 h-screen w-full bg-blue-dark text-white">
      <div
        className="grid grid-cols-1 md:grid-cols-2 max-w-[1000px] mx-auto h-full"
        data-aos="fade-left"
      >
        <div className="h-full flex flex-col justify-center items-center order-1 md:order-[-1] md:items-start">
          <span className="flex flex-col sm:flex-row gap-2 text-2xl sm:text-3xl font-bold">
            Hi, my name is
            <span className="text-orange">
              <Typewriter
                options={{
                  strings: ["Matheus Bini"],
                  autoStart: true,
                  loop: true,
                }}
              />
            </span>
          </span>
          <p className="text-xs sm:text-sm md:text-base font-medium mt-2 text-center md:text-start w-[70%] md:w-full">
            I am currently working as a frontend developer, I am 27 years old
            and have a degree in Systems Analysis and Development from
            UniSALESIANO College - Salesian Catholic University Center Auxilium
          </p>
          <div className="flex justify-center gap-4 text-2xl sm:text-3xl mt-10 w-full">
            <a href="https://www.facebook.com/matheus.bini.52/" target="_blank">
              <FaFacebook className={style.linkSocialMedia} />
            </a>
            <a href="https://github.com/MatheusCaires04" target="_blank">
              <FaGithub className={style.linkSocialMedia} />
            </a>
            <a href="https://www.instagram.com/matheus.bini/" target="_blank">
              <FaInstagramSquare className={style.linkSocialMedia} />
            </a>
            <a
              href="https://www.linkedin.com/in/matheus-bini-743312172/"
              target="_blank"
            >
              <FaLinkedin className={style.linkSocialMedia} />
            </a>
          </div>
        </div>
        <div className="h-full flex flex-col justify-center items-center">
          <div className="rounded-full w-56 h-56 md:w-72 md:h-72 overflow-hidden border-8 border-orange">
            <img src={photo} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
