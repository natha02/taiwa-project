import React from 'react'

/*
    on a juste a recupérer les valeur qu'on a defini après création du nouveau tableau user
    on donne a User comme paramètre lea valeurs et on le met dans une balise liste pour l'afficher en mode 
    liste à puce en retour.
*/
const User = ({name,username,email}) => {
  return (
    <div>
        <ul>
            <li>{name} ,  {username} , {email}</li>
        </ul>
    </div>
  )
}

export default User;