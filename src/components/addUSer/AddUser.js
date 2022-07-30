import React from "react";

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
    <div>
      <form onSubmit={onSubmitForm}>
        <h3>Add User</h3>
        <input type="text" placeholder="Username" name="username" />
        <input type="text" placeholder="Name" name="name" />
        <input type="email" placeholder="Email" name="email" />
        <button onSubmit={onSubmitForm}>Add User</button>
      </form>
    </div>
  );
};

export default AddUser;