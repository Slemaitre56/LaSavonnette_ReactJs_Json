import React from 'react'
import { NavLink} from "react-router-dom";
import facebook from '../../pictures/icon/facebook.png'
import insta from '../../pictures/icon/youtube.png'
import youtube from '../../pictures/icon/instagram.png'

const Footer = () => {
    return (
        <div className="footer">
            <div className="blocFooter">
                <nav>
                <NavLink to="/accueil">Accueil</NavLink>
                <NavLink to="/commencer">Commencer</NavLink>
                <NavLink to="/recettes">Recettes</NavLink>
                <NavLink to="/astuces">Astuces</NavLink>
                <NavLink to="/contact">Nous contacter</NavLink>

                </nav>
            </div>     

            <div className="blocFooter">
                <nav>
                    <NavLink to="cgu">CGU</NavLink>
                    <NavLink to="mentions-légales">Mentions Légales</NavLink>
                    <NavLink to="plan-du-site">Plan du site</NavLink>
                </nav>
            </div> 

            <div className="blocFooter">
                <div className="footerRs">
                    <a href="https://www.facebook.com/"><img src={facebook} alt="facebook" /></a>
                    <a href="https://www.instagram.com/?hl=fr"><img src={insta} alt="instagram" /></a>
                    <a href="https://www.youtube.com/?hl=fr&gl=FR"><img src={youtube} alt="youtube" /></a>
                </div>
            </div> 

            <div className="blocCopyR">
                <p className="copyR">© 2020 Copyright : La Savonnette</p>
            </div>
        </div>
        
    )
}

export default Footer;