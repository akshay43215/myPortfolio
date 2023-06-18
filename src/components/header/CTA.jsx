import React from "react";
import MyResume from "../../assets/Akshay-krishna(web-developer).pdf";

const CTA = () => {
  return (
    <div className="cta">
      <a href={MyResume} download className="btn">
        Download CV
      </a>
      <a href="#contact" className="btn btn-primary">
        Let's Talk
      </a>
    </div>
  );
};

export default CTA;
