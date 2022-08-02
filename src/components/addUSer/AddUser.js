import React from "react";
import "./add.css";
import { useEffect, useState } from "react";
import alanBtn from "@alan-ai/alan-sdk-web"; //c'est pour le boutton de alan (micro en bas a droite)
import Typewriter from "typewriter-effect";
import { motion } from "framer-motion"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMouse } from "@fortawesome/free-solid-svg-icons";

const AddUser = ({ fetchAdd }) => {
  /*
    intégration voice alan ai pour remplir le formulaire avec le vocal

    importation de la clé pour l'utilisation de alan ai et pour identification de mes réglages aussi. (connexion)
  */
 
  const [username, setUsername] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  useEffect(() => {
    alanBtn({
      key: "083ae6733331e0dc685b73ec325a5d342e956eca572e1d8b807a3e2338fdd0dc/stage",
      onCommand: (commandData) => {
        //test dans la console si alan reprends vraiment ce qu'on dit
        console.log(commandData);

        //condition de remplissage du form
        if (commandData.command === "username") {
          setUsername(commandData.data);
        }

        if (commandData.command === "name") {
          setName(commandData.data);
        }

        if (commandData.command === "email") {
          setEmail(commandData.data);
        }
      },
    });
  }, []);

  /*
    onSubmit vas ajouter les valuer qu'on séléctionne dans fetchAdd qu'on a préalablement construis
    et vas reinitilialiser le formulaire.
    du coup on peut ajouter un utilisateur.

    on récupère un par un les valeur des paramètres et fetchAdd prend comme paramètres ces valeurs
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
    <section className="add-user" id="add-user">
      <div className="content">
        <h3>Add User</h3>


        <div className="instructions-container">
          <motion.div 
            whileHover={{ scale: 1.2, rotate: 90 }}
            whileTap={{
              scale: 0.8,
              rotate: -90,
              borderRadius: "100%"}}
              
            className="instructions">
            <p>
              <span className="text-rouge">Bouger Moi avec la souris!!! <FontAwesomeIcon icon={faMouse}/></span><br/>
              Notre ami "Alan ai" peut nous aider à remplir le formulaire à
              l'aide du vocal. Il suffit de cliquer sur boutton "micro en bas à
              droite".
              <br />
              Il suffit de lui dire les mots magiques suivante:
              <br />
            </p>

            <h5>
              <Typewriter
                options={{
                  autoStart: true,
                  loop: true,
                  delay: 40,
                  strings: [
                    "My name is ... 🎤🎙️",
                    "My Username is ... 🎤🎙️",
                    "My Email is ... 🎤🎙️",
                  ],
                }}
              />
            </h5>
          </motion.div>
        </div>

        <form onSubmit={onSubmitForm}>
          <input
            type="text"
            placeholder="Username"
            name="username"
            onChange={(e) => setUsername(e.target.value)}
            value={username}
            required
          />

          <input
            type="text"
            placeholder="Name"
            name="name"
            onChange={(e) => setName(e.target.value)}
            value={name}
            required
          />

          <input
            type="email"
            placeholder="Email"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            required
          />

          <button onSubmit={onSubmitForm} className="add-button">ADD</button>
        </form>
      </div>
    </section>
  );
};

export default AddUser;
