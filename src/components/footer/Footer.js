import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="container-footer">
          <div className="text-footer">
            <p>Copyright © 2022 - All rights reserved</p>
          </div>

          <div className="social-footer">
            <a href="https://www.linkedin.com/in/andrilalaina-kalaha/">
              <FontAwesomeIcon icon={faLinkedin} color="#FFF" className="icon-footer"/>
            </a>
            <a href="https://github.com/natha02">
              <FontAwesomeIcon icon={faGithub} color="#FFF" className="icon-footer"/>
            </a>
          </div>

          <div className="contact-footer">
            <p>contact.pro@andrilalaina-kalaha.com</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
