import React from 'react'
import imgprofil from '../../../pictures/profil.jpg'


const SibeBar = () => {
    return (
        <div className="sidebar">
            <h2>A propos de nous</h2>
                <div className="aboutUs">
                    <figure>
                       <img src={ imgprofil } alt="about us"/>
                        <p className="pAboutUs">Nostrud esse eiusmod est commodo. Ullamco laboris ut ullamco officia deserunt anim esse eiusmod. Qui aute qui mollit eiusmod deserunt labore sit sit officia aliqua aliquip nostrud exercitation.<br/>
                        Ut mollit ea mollit esse nostrud aliqua est mollit labore anim.</p> 
                    </figure>        
                </div>

                <div className="aboutUs">
                    <h3>Nos liens utiles</h3>
                    <ul>
                       <li><a href="https://www.aroma-zone.com/">Aroma-zone</a></li> 
                       <li><a href="https://fr.naissance.com/?gclid=EAIaIQobChMIu8e8lNqO7QIVHxoGAB2K7wS0EAAYASAAEgKx0vD_BwE">Naissance</a></li> 
                       <li><a href="https://www.amazon.fr/s?k=moule+savon&__mk_fr_FR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&ref=nb_sb_noss_2">Amazone</a></li> 
                       <li><a href="https://www.aromateasy.net/fr/">Aromateasy</a></li> 
                       <li><a href="https://www.youtube.com/c/hsianglingliao/videos">Yvonne</a></li>
                       <li><a href="https://www.youtube.com/watch?v=kTgeo3sHR2E&list=PLA8XMBp0at_6lWXUqcSkiIHs3oMgjw-7d">Mes mixtures d'Alexandra</a></li>
                    </ul>        
                </div>
        </div>
    )
}

export default SibeBar;