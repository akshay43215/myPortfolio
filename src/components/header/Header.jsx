import React from "react";
import CTA from "./CTA";
import ME from "../../assets/Akshay-Krishna.pdf";
import Headersocial from "./HeaderSocials";
import "./header.css";

function Header() {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Akshay Krishna</h1>
        <h5 className="text-light">MERN Stack Developer</h5>
        <CTA />
        <Headersocial />

        <div className="me">
          <img id="mac" src={ME} alt="" />
        </div>

        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
}

export default Header;
