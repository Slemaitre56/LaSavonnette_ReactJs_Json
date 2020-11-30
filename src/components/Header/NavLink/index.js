import React from 'react'
import { NavLink} from "react-router-dom";

const NavLinks = () => {
    return (
        <div className="headerNav">
            <nav>
                <NavLink exact activeStyle={{fontSize: "28px", color: "rgb(197, 162, 171)"}} to="/">Accueil</NavLink>
                <NavLink activeStyle={{fontSize: "28px", color: "rgb(197, 162, 171)"}} to="/commencer">Commencer</NavLink>
                <NavLink activeStyle={{fontSize: "28px", color: "rgb(197, 162, 171)"}} to="/recettes">Recettes</NavLink>
                <NavLink activeStyle={{fontSize: "28px", color: "rgb(197, 162, 171)"}} to="/astuces">Astuces</NavLink>

            </nav>
        </div>
    )
}

export default NavLinks