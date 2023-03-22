import React from "react";
import {
  FaFacebook,
  FaGithub,
  FaInstagramSquare,
  FaLinkedin,
} from "react-icons/fa";
import { MdEmail, MdPhone } from "react-icons/md";

import Title from "../components/Title";

const style = {
  linkSocialMedia: "hover:text-orange duration-150 cursor-pointer",
};

const Contact = () => {
  return (
    <div className="pt-20 px-8 bg-blue-dark w-full h-full md:h-screen">
      <div className="max-w-[1000px] mx-auto">
        <Title title="Contact" />
        <div className="text-white flex flex-col items-center">
          <span className="text-2xl sm:text-3xl font-medium font-concert text-center">
            Contact us via links or send an email
          </span>
          <div className="grid grid-cols-1 md:grid-cols-2 w-full mt-5 md:mt-10">
            <div className="flex flex-col" data-aos="fade-down">
              <div className="flex justify-center gap-4 text-2xl sm:text-3xl mt-5 md:mt-10 w-full">
                <a
                  href="https://www.facebook.com/matheus.bini.52/"
                  target="_blank"
                >
                  <FaFacebook className={style.linkSocialMedia} />
                </a>
                <a href="https://github.com/MatheusCaires04" target="_blank">
                  <FaGithub className={style.linkSocialMedia} />
                </a>
                <a
                  href="https://www.instagram.com/matheus.bini/"
                  target="_blank"
                >
                  <FaInstagramSquare className={style.linkSocialMedia} />
                </a>
                <a
                  href="https://www.linkedin.com/in/matheus-bini-743312172/"
                  target="_blank"
                >
                  <FaLinkedin className={style.linkSocialMedia} />
                </a>
              </div>
              <div className="flex flex-col items-center mt-5 md:mt-10">
                <span className="text-base font-normal font-concert flex items-center gap-2">
                  <MdEmail className="text-xl text-orange" />
                  matheus-bini@hotmail.com
                </span>
                <span className="text-base font-normal font-concert flex items-center gap-2">
                  <MdPhone className="text-xl text-orange" /> +55 18 99645-3429
                </span>
              </div>
            </div>
            <div className="mt-5 md:mt-0 pb-10 md:pb-0">
              <form
                action="https://formsubmit.co/matheus-bini@hotmail.com"
                method="POST"
                className="flex flex-col gap-3 text-black"
                data-aos="fade-left"
              >
                <input
                  type="hidden"
                  name="_next"
                  value="http://127.0.0.1:5173/"
                ></input>
                <input type="hidden" name="_captcha" value="false"></input>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Enter your Name..."
                  className="outline-none border-2 border-orange rounded-lg px-2 py-1"
                />
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Enter your Email..."
                  className="outline-none border-2 border-orange rounded-lg px-2 py-1"
                />
                <textarea
                  name="message"
                  id="message"
                  rows="5"
                  placeholder="Message"
                  className="resize-none outline-none border-2 border-orange rounded-lg px-2 py-1"
                ></textarea>
                <input
                  type="submit"
                  name="submit"
                  id="submit"
                  value="Enviar"
                  className="outline-none bg-orange border-2 border-orange rounded-lg px-2 py-1 font-medium text-white cursor-pointer hover:bg-orange/80 duration-150"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
