import React, {useState, useEffect} from 'react';
import blogData from '../../../data/blog.json'
import { NavLink } from 'react-router-dom';


const Recette = (props) => {

    const [recettePosts, setRecettePosts] = useState([]);

    useEffect(() => {
        const recettePosts = blogData.data;
        setRecettePosts(recettePosts);
    }, [recettePosts]);
    
    
    return (
        <div className="blocPost">
            <h2>Mes recettes de savons maison</h2>

            {
                recettePosts.map((recettePost, index) => {
                    console.log(recettePost.blogCategory);
                    if(recettePost.blogCategory === 'uneRecette'){
                        return (
                            <div key= {index} className="post">
                                <figure>
                                    <h3>{recettePost.blogTitle}</h3>
                                    <p className="date datePost">Publié le {recettePost.postedOn} par {recettePost.author}</p>
                                    <img className="imgPost" src={recettePost.blogImage} alt="about us"/>
                                    <p>{recettePost.blogDescription}</p>
                                    <NavLink key={recettePost.id} to={`${recettePost.blogCategory}/${recettePost.id}`} ><button className="readMore readPost">Voir l'recette</button></NavLink>
                                </figure>
                            </div>
                            )
                        }        
                    })
                }
        </div>
    )
}

export default Recette;