import { faAdd, faHome, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import "./navigation.css";

/*
création de nav bar avec les différents liens
- utilisation du librairie FontAwesomeIcon pour les icones
*/
const Navigation = () => {
  return (
    <>
        <nav>
          <div className="nav-content">
                <div><a href='#header'><FontAwesomeIcon icon={faHome} color="#082032" className='icon'/></a></div>
                <div><a href='#add-user'><FontAwesomeIcon icon={faAdd} color="#082032" className='icon'/></a></div>
                <div><a href='#list-user'><FontAwesomeIcon icon={faUser} color="#082032" className='icon'/></a></div>
          </div>
        </nav>
    </>
  )
}

export default Navigation;