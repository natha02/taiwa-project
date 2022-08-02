import React from "react";
import "./user.css";

/*
    on a juste a recupérer les valeur qu'on a defini après création du nouveau tableau user
    on donne a User comme paramètre lea valeurs et on le met dans une balise liste pour l'afficher en mode 
    liste à puce en retour.
    J'ai rajouter un boutton pour supprimer un utilisateur.
    et aussi userDelete pour supprimer un utilisateur sur onClick quand fetchDelete 
    vas récupérer l'id de l'utilisateur à supprimer.
*/
const User = ({ id, name, username, email, fetchDelete }) => {
  const userDelete = () => {
    fetchDelete(id);
  };

  return (
    <div className="container">
      <div className="List-Users">
        <ul className="titleId">
          <li>User {id}</li>
        </ul>
        <div className="liste">
          <ul>
            <li>  <span className="text">Name : </span>  {name}</li>
            <li>  <span className="text">Username : </span>  {username}</li>
            <li>  <span className="text">Email : </span>  {email}</li>
          </ul>
        </div>
        <div className="buttonDelete">
          <button onClick={userDelete} className="delete-button">Delete</button>
        </div>
      </div>
    </div>
  );
};

export default User;
