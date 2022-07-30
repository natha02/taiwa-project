import React from "react";
import "./add.css";


const AddUser = ({ fetchAdd }) => {
  /*
    onSubmit vas ajouter les valuer qu'on séléctionne dans fetchAdd qu'on a préalablement construis dans app.js
    et vas reinitilialiser le formulaire.
    du coup on peut ajouter un nouvel utilisateur.
  */
  const onSubmitForm = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const username = e.target.username.value;
    const email = e.target.email.value;
    fetchAdd(name, username, email);
  
    e.target.username.value = "";
    e.target.name.value = "";
    e.target.email.value = "";
  };



  /*
    on a juste crée une formulaire avec username , name , email 
    et mettre notre onSubmit sur onSubmitForm qu'on a crée on haut pour l'ajout et la réinitialisation.
  */
  return (
    <div className="add-user">
      <div className="content">
      <h3>Add User</h3>
      <form onSubmit={onSubmitForm}>
        <input type="text" placeholder="Username" name="username" />
        <input type="text" placeholder="Name" name="name" />
        <input type="email" placeholder="Email" name="email" />
        <button onSubmit={onSubmitForm}>ADD</button>
      </form>
      </div>
    </div>
  );
};

export default AddUser;
