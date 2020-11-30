import React, {useState, useEffect} from 'react';
import blogData from '../../../data/blog.json'
import { NavLink } from 'react-router-dom';




const Article = (props) => {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const posts = blogData.data;
        setPosts(posts);
    }, [posts]);

    return (
        <div className="article">
            <h2>Articles récents</h2>

            {
                posts.map((post, index) => {

                    
                        return (
                            <div key= {index} className="recentPost">
                                <figure>
                                    <h3>{post.blogTitle}</h3>
                                    <p className="date">Publié le {post.postedOn} par {post.author}</p>
                                    <img className="imgRecentPost" src={post.blogImage} alt="post recent"/>
                                    <p>{post.blogDescription}</p>
                                    <NavLink key={post.id} to={`${post.blogCategory}/${post.id}`}>
                                    <button className="readMore">Voir l'article</button>
                                    </NavLink>
                                </figure>
                            </div>
                        )
                    
                             
                })
            }
        </div>
    )
}

export default Article;