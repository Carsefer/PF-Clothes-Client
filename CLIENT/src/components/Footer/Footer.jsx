import React from "react";
import { FaLinkedin } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <span>Created by: </span>
      <div>
        <a href="https://www.linkedin.com/in/fiorella-parmetler-63632424a/">
          Fiorella Parmetler <FaLinkedin />
        </a>
      </div>
      <div>
        <a href="https://www.linkedin.com/in/carlos-rodr%C3%ADguez-25708a246/">
          Carlos Rodriguez <FaLinkedin />
        </a>
      </div>
      <div>
        <a href="https://www.linkedin.com/in/lucas-macchi-a02956233/">
          Lucas Macchi <FaLinkedin />
        </a>
      </div>
      <div>
        <a href="https://www.linkedin.com/in/ericcmerc">
          Eric Alejandro Mercado <FaLinkedin />
        </a>
      </div>
      <div>
        <a href="https://www.linkedin.com/in/martin-m-b00955125/">
          Martin Mendoza <FaLinkedin />
        </a>
      </div>
      <div>
        <a href="https://www.linkedin.com/in/micaelpicco/">
          Micael Picco <FaLinkedin />
        </a>
      </div>
      <div>
        <a href="https://www.linkedin.com/in/juan-pablo-romero-poveda-477514253/">
          Juan Pablo <FaLinkedin />
        </a>
      </div>
      <div>
        <a href="https://www.linkedin.com/in/juan-manesevich-a00239186">
          Juan Manesevich <FaLinkedin />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
