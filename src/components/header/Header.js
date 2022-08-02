import React from "react";
import "./header.css";
import AnimatedText from 'react-animated-text-content';
import { motion } from "framer-motion";

const Header = () => {
  return (
    <>
      <section>
        <header id="header">
          <h1>
            <AnimatedText
              type="words" // animate words or chars
              animation={{
                x: "200px",
                y: "-20px",
                scale: 1.1,
                ease: "ease-in-out",
              }}
              animationType="float"
              interval={0.06}
              duration={0.8}
              tag="p"
              className="animated-paragraph"
              includeWhiteSpaces
              threshold={0.1}
              rootMargin="20%"
            >
              Taiwa Final Project Interview
            </AnimatedText>
          </h1>

          <div className="aside-container">
            <motion.aside
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="aside-left aside-content"
            >
              <h4>Descriptions</h4>
              <p>
                Bienvenue sur le projet taiwa React/JSONPlaceholder, je vous
                laisse vous amuser à supprimer et ajouter des utilisateurs.{" "}
                <br />
                Et aussi vous pouvez essayez de remplir le formulaire à l'aide
                du boutton micro en bas à droite.
              </p>
            </motion.aside>

            <motion.aside
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="aside-right aside-content"
            >
              <h4>Objectifs</h4>
              <p>
                Le but du projet était d'utiliser l'API JSONPlaceholder et le
                framework React, récupérer 10 users et pouvoir les afficher dans
                une liste à puce. Puis créer un formulaire d'ajout Utilisateur
                (name, username, email sans l'adresse) avec un peu de CSS
                Responsive.
              </p>
            </motion.aside>
          </div>
        </header>
      </section>
    </>
  );
};

export default Header;
