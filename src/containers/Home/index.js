import React from 'react'
import Article from '../../components/Main/Article';
import SideBar from '../../components/Main/SideBar';


const Home = (props) => {

    console.log(props);
    return (
        <div className="bloc">
            <Article />
            <SideBar />
        </div>
    )
}

export default Home;

