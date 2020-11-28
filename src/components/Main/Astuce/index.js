import React, {useState, useEffect} from 'react';
import blogData from '../../../data/blog.json'
import { NavLink } from 'react-router-dom';


const Astuce = (props) => {

    const [astucePosts, setAstucePosts] = useState([]);

    useEffect(() => {
        const astucePosts = blogData.data;
        setAstucePosts(astucePosts);
    }, [astucePosts]);

    
    return (
        <div className="blocPost">
            <h2>Les petits choses à savoir !</h2>

            {
                astucePosts.map((astucePost, index) => {
                    if(astucePost.blogCategory === 'uneAstuce'){
                        return (
                            <div key= {index} className="post">
                                <figure>
                                    <h3>{astucePost.blogTitle}</h3>
                                    <p className="date datePost">Publié le {astucePost.postedOn} par {astucePost.author}</p>
                                    <img className="imgPost" src={astucePost.blogImage} alt="about us"/>
                                    <p>{astucePost.blogDescription}</p>
                                    <NavLink key={astucePost.id} to={`${astucePost.blogCategory}/${astucePost.id}`} ><button className="readMore readPost">Voir l'astuce</button></NavLink>
                                </figure>
                            </div>
                            )
                        }        
                    })
                }
        </div>
    )
}

export default Astuce;