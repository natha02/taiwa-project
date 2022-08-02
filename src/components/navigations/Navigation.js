import { faAdd, faHomeAlt, faList } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Navbar } from "react-bootstrap";
import { NavHashLink } from "react-router-hash-link";
import { useLocation } from "react-router-dom";
import "./navigation.css";

/*
création de nav bar avec les différents liens
- utilisation du librairie FontAwesomeIcon pour les icones
*/
const Navigation = () => {
  //active navigation changement de style
  const { hash } = useLocation(); //vas prendre la location càd le hash où on est (ex = header)
  const isActive = (iHash) => hash === iHash;

  //changement de couleur de nav quand on scroll
  const [color, setColor] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 100) {
      setColor(true);
    } else {
      setColor(false);
    }
  };
  window.addEventListener("scroll", changeColor);


  //pour le style de active icone j'ai directement fait à partir du style et faire une condition à l'intérieur
  //à chaque fois qu'on vas cliqué sur l'icone son style vas changer et rester comme.
  return (
    <div className="navigation">
      <Navbar className="navigation-content">



        <NavHashLink
          smooth
          to="/#header"
          className={color ? "icone-scroll" : "icone"}
          style={isActive("#header") ? { 
            color: "#ECB365" ,
            "border-bottom" : "5px solid #ECB365",
            width: "100%",
            transition : "0.5sec ease" 
          } : {}}
        >
          <FontAwesomeIcon icon={faHomeAlt} />
        </NavHashLink>




        <NavHashLink
          smooth
          to="/#add-user"
          className={color ? "icone-scroll" : "icone"}
          style={isActive("#add-user") ? 
              { 
                color: "#ECB365" ,
                "border-bottom" : "5px solid #ECB365",
                width: "100%",
                transition : "0.5sec ease"
              } : {}}
        >
          <FontAwesomeIcon icon={faAdd} />
        </NavHashLink>




        <NavHashLink
          smooth
          to="/#list-user"
          className={color ? "icone-scroll" : "icone"}
          style={isActive("#list-user") ? 
            { 
              color: "#ECB365" ,
              "border-bottom" : "5px solid #ECB365",
              width: "100%",
              transition : "0.5sec ease" 
            } : {}}
        >
          <FontAwesomeIcon icon={faList} />
        </NavHashLink>


        
      </Navbar>
    </div>
  );
};

export default Navigation;
