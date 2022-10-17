import React from "react";
import { FaLinkedin } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="FooterLanding">
      <span>Created by: </span>
      <div>
        <a
          className="FooterLandingText"
          href="https://www.linkedin.com/in/fiorella-parmetler-63632424a/"
          target="_blank"
          rel="noreferrer"
        >
          Fiorella Parmetler <FaLinkedin />
        </a>
      </div>
      <div>
        <a
          className="FooterLandingText"
          href="https://www.linkedin.com/in/carlos-rodr%C3%ADguez-25708a246/"
          target="_blank"
          rel="noreferrer"
        >
          Carlos Rodriguez <FaLinkedin />
        </a>
      </div>
      <div>
        <a
          className="FooterLandingText"
          href="https://www.linkedin.com/in/lucas-macchi-a02956233/"
          target="_blank"
          rel="noreferrer"
        >
          Lucas Macchi <FaLinkedin />
        </a>
      </div>
      <div>
        <a
          className="FooterLandingText"
          href="https://www.linkedin.com/in/ericcmerc"
          target="_blank"
          rel="noreferrer"
        >
          Eric Alejandro Mercado <FaLinkedin />
        </a>
      </div>
      <div>
        <a
          className="FooterLandingText"
          href="https://www.linkedin.com/in/martin-m-b00955125/"
          target="_blank"
          rel="noreferrer"
        >
          Martin Mendoza <FaLinkedin />
        </a>
      </div>
      <div>
        <a
          className="FooterLandingText"
          href="https://www.linkedin.com/in/micaelpicco/"
          target="_blank"
          rel="noreferrer"
        >
          Micael Picco <FaLinkedin />
        </a>
      </div>
      <div>
        <a
          className="FooterLandingText"
          href="https://www.linkedin.com/in/juan-pablo-romero-poveda-477514253/"
          target="_blank"
          rel="noreferrer"
        >
          Juan Pablo <FaLinkedin />
        </a>
      </div>
      <div>
        <a
          className="FooterLandingText"
          href="https://www.linkedin.com/in/juan-manesevich-a00239186"
          target="_blank"
          rel="noreferrer"
        >
          Juan Manesevich <FaLinkedin />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
