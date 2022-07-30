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
    <div>
      <div className="List-Users">
        <h3>User {id}</h3>
        <ul>
          <li>{name}</li>
          <li>{username}</li>
          <li>{email}</li>
        </ul>
        <button onClick={userDelete}>Delete</button>
      </div>
    </div>
  );
};

export default User;
