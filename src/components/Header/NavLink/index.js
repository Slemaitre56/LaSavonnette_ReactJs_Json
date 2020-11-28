import React from 'react'
import { NavLink} from "react-router-dom";

const NavLinks = () => {
    return (
        <div className="headerNav">
            <nav>
                <NavLink to="/">Accueil</NavLink>
                <NavLink to="/commencer">Commencer</NavLink>
                <NavLink to="/recettes">Recettes</NavLink>
                <NavLink to="/astuces">Astuces</NavLink>

            </nav>
        </div>
    )
}

export default NavLinks