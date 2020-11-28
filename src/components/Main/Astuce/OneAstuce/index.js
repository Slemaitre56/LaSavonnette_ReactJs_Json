import React, {useState, useEffect} from 'react';
import blogData from '../../../../data/blog.json'


const OneAstuce = (props) => {
    
    const [post, setPost] = useState({});

    useEffect(() => {
        const postId = props.match.params.postId;
        const post = blogData.data.find(post => post.id == postId);
        setPost(post);
        
            
        
    }, [post])

    
    return (
        <div className="oneAstuce">
            <h2>Les petits choses à savoir !</h2>

            <div className="astucePost oneAstucePost">
                <figure>
                    <h3>{post.blogTitle}</h3>
                    <p className="date">Publié le {post.postedOn} par {post.author}</p>
                    <img className="imgAstucePost imgOneAstuce" src={post.blogImage} alt="about us"/>
                    <p className="oneAstucePostP">{post.blogText}
                    </p>
                </figure>

            </div>  
        </div>
    )
}

export default OneAstuce;