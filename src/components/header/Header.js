import React from "react";
import "./header.css";

const Header = () => {
  return (
    <>
    <header id="header">
      <h1>Taiwa Final Project Interview</h1>
      <p>
        Bienvenu sur le projet taiwa React/JSONPlaceholder,
        je vous laisse vous amuser à supprimer et ajouter des utilisateurs.
      </p>

      <p>
        Le but du projet était d'utiliser l'API JSONPlaceholder et le framework React,
        récupérer 10 users et pouvoir les afficher dans une liste à puce. Puis
        créer un formulaire d'ajout Utilisateur (name, username, email sans
        l'adresse) avec un peu de CSS Responsive.
      </p>
    </header>
    </>
  );
};

export default Header;
