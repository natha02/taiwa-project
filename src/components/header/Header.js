import React from "react";
import "./header.css";

const Header = () => {
  return (
    <>
    <section>
    <header id="header">
      <h1>Taiwa Final Project Interview</h1>
      <p>
        Bienvenue sur le projet taiwa React/JSONPlaceholder,
        je vous laisse vous amuser à supprimer et ajouter des utilisateurs. <br/> 
        Et aussi vous pouvez essayez de remplir le formulaire à l'aide du boutton micro en bas à droite.
      </p>

      <p>
        Le but du projet était d'utiliser l'API JSONPlaceholder et le framework React,
        récupérer 10 users et pouvoir les afficher dans une liste à puce. Puis
        créer un formulaire d'ajout Utilisateur (name, username, email sans
        l'adresse) avec un peu de CSS Responsive.
      </p>
    </header>
    </section>
    </>
  );
};

export default Header;
