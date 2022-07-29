import React, { useEffect, useState } from "react";
import "./App.css";

const App = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetchJson();
  }, []);


  //importation de l'api jsonplaceholder
  const fetchJson = async () => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => setUsers(json))
       //Gestion d'erreur si la promise n'est pas réalisée
      .catch((error) => console.log(error));
  };

/*
  vérification de l'importation si on la liste des utilisateurs ou pas. 
  PS: dans la console bien sûr.
  Résultat: on a bien les utilisateurs.
*/
  console.log(users);

  return (
    <div className="App">
      <h1>Taiwa Project Final Interview</h1>
    </div>
  );
};

export default App;
