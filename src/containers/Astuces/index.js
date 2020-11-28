import React from 'react'
import Astuce from '../../components/Main/Astuce';
import SibeBar from '../../components/Main/SideBar';

const Astuces = (props) => {

    console.log(props);
    return (
        <div className="bloc">
            <Astuce />
            <SibeBar />
        </div>
    )
}

export default Astuces;
