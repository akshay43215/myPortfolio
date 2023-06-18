import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { ImInstagram } from "react-icons/im";

function headersocials() {
  return (
    <div className="header__socials">
      <a href="https://www.linkedin.com/in/akshay-krishna10/" target="_blank">
        <BsLinkedin />
      </a>
      <a href="https://github.com/akshay43215/" target="_blank">
        <FaGithub />
      </a>
      <a href="https://www.instagram.com/mr__robotic/" target="_blank">
        <ImInstagram />
      </a>
    </div>
  );
}

export default headersocials;
