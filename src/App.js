import React, { useEffect, useState } from "react";
import "./App.css";
import AddUser from "./components/addUSer/AddUser";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Navigation from "./components/navigations/Navigation";
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



  /*** IMPORTATION ***/ 
  /*
  importation de l'api jsonplaceholder directement avec users vu que
  le nombre par défaut c'est 10 users.
  */
  const fetchJson = async () => {
    //C'est un Get request qui va récupérer les données de l'api
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => setUsers(json))
  };



  /*** AJOUT USER ***/
  /*
  Ajout des utilisateur à l'aide d'un formulaire et méthode post en utilisant Fetch.
  càd on vas pouvoir réecrire le fichier JSONPlaceholder en ajoutant un nouvel utilisateur par exemple.

  ...users est une syntaxe pour copier un tableau. (syntaxe spread)
  stringify est une syntaxe pour convertir un objet en une chaine de caractère , ici les valeurs qu'on vas convertir
  c'est username, name, email.
  */
  const fetchAdd = async (username, name, email) => {
    await fetch("https://jsonplaceholder.typicode.com/users", {
      method: "POST",
      body: JSON.stringify({
        username: username,
        name: name,
        email: email,
      }),
      headers: { "content-type": "application/json; charset=UTF-8" },
    })
      .then((response) => response.json())
      .then((json) => setUsers([...users, json]));
  };



  /*** DELETE USER ***/
  /*
    on vas maintenant passer au delete des utilisateurs.
    utilisation de fetch toujours pour l'api jsonplaceholder.
    on vas utiliser la méthode delete pour supprimer un utilisateur, et id pour identifier quel utilisateur et à supprimer.
    vu que chaque utilisateur n'a qu'une seule id et rien qu'une seule.
  */
  const fetchDelete = async (id) => {
    await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((json) => setUsers(users.filter((user) => user.id !== id)));
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

   dans notre block user on a rajouter l'options delete qu'on à crée en haut pour delete un user
  */
  return (
    <>
      <Navigation/>
      <Header/>
      <AddUser fetchAdd={fetchAdd}/>

      <div id="list-user" className="user">
        <h3 className="title">Users List</h3>
        {users.map((user) => (
          <User
            key={user.id}
            id={user.id}
            name={user.name}
            username={user.username}
            email={user.email}
            fetchDelete={fetchDelete}
          />
        ))}
      </div>
      <Footer/>
    </>
  );
};

export default App;
