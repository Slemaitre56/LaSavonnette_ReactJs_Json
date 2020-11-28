import React from 'react'
import Recette from '../../components/Main/Recette';
import SideBar from '../../components/Main/SideBar';


const Recettes = () => {
    return (
        <div className="bloc">
            <Recette />
            <SideBar />
        </div>
    )
}

export default Recettes;
