import React, { useEffect, useState } from "react";
import "./App.css";
import AddUser from "./components/addUSer/AddUser";
import User from "./components/user/User";

const App = () => {
  /*
  utilisations des hooks useState & useEffect pour gérer les états de l'utilisateur du tableau
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
    //C'est un Get request qui va récupérer les données de l'api
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => setUsers(json))
      //Gestion d'erreur si la promise n'est pas réalisée, la console affichera error.
      .catch((error) => console.log(error));
  };




  /*
  Ajout des utilisateur à l'aide d'un formulaire et méthode post en utilisant Fetch.
  càd on vas pouvoir réecrire le fichier JSONPlaceholder en ajoutant un nouvel utilisateur par exemple.

  ...users est une syntaxe pour copier un tableau. (syntaxe spread)
  */
  const fetchAdd = async (username, name, email) => {
    await fetch("https://jsonplaceholder.typicode.com/users", {
      method: "POST",
      body: JSON.stringify({
        username: username,
        name: name,
        email: email,
      }),
      headers: {"content-type": "application/json; charset=UTF-8"},
    }).then((response) => response.json())
      .then((json) => setUsers([...users, json]));
  };




  /*
  vérification de l'importation si on la liste des utilisateurs ou pas. 
  PS: dans la console bien sûr.
  Résultat: on a bien les utilisateurs.
*/
  console.log(users);





  /*
  on crée un nouveau tableau user avec map et on leur donne une valeur correspondante
  ici on veut juste username , name , email mais j'ai rajouté id pour avoir le numéro
   pendant mon affichage sur le titre de chaque utilisateur.
  */
  return (
    <div className="App">
      <h1>Taiwa Project Final Interview</h1>


      <div className="add">
        <AddUser fetchAdd={fetchAdd} />
      </div>
      

      <div>
      <h3>User List</h3>
        {users.map((user) => (
          <User
            key={user.id}
            id={user.id}
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
