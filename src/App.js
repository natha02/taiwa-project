import React, { useEffect, useState } from "react";
import "./App.css";
import User from "./components/user/User";

const App = () => {


  /*
  utilisations du hook pour gérer les états de l'utilisateur du tableau
  qu'on a crée [users].
  */
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetchJson();
  }, []);



  /*
  importation de l'api jsonplaceholder directement avec users vu que
  le nombre par défaut c'est 10 users.
  */
  const fetchJson = async () => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => setUsers(json))
      //Gestion d'erreur si la promise n'est pas réalisée, la console affichera error.
      .catch((error) => console.log(error));
  };



  /*
  vérification de l'importation si on la liste des utilisateurs ou pas. 
  PS: dans la console bien sûr.
  Résultat: on a bien les utilisateurs.
*/
  console.log(users);


  
  /*
  on crée un nouveau tableau user avec map et on leur donne une valeur correspondante
  ici on veut juste username , name , email.
  */
  return (
    <div className="App">
      <h1>Taiwa Project Final Interview</h1>

      <div>
        <h3>Users List</h3>
        {users.map((user) => (
          <User
            key={user.id}
            name={user.name}
            username={user.username}
            email={user.email}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
