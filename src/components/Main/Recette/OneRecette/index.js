import React, {useState, useEffect} from 'react';
import blogData from '../../../../data/blog.json'


const OneRecette = (props) => {


    const [post, setPost] = useState({});
    const [astucePosts, setAstucePosts] = useState([]);

    useEffect(() => {
        const postId = props.match.params.postId;
        const post = blogData.data.find(post => post.id == postId);
        setPost(post);

        console.log(post);
    }, [post])

    return (
        <div className="oneAstuce">
            <h2>Mes recettes de savons maison</h2>

            <div className="astucePost oneAstucePost">
                <figure>
                    <h3>{post.blogTitle}</h3>
                    <p className="date">Publié le {post.postedOn} par {post.author}</p>
                    <img className="imgAstucePost imgOneAstuce" alt="recette"/>
                    <h4>Les ingrédients pour un savon de 500gr :</h4>


                    <ul className="ulRecette">
                        <li>{post.ingredient1}</li>
                        <li>{post.ingredient2}</li>
                        <li>{post.ingredient3}</li>
                        <li>{post.ingredient4}</li>
                        <li>{post.ingredient5}</li>
                        <li>{post.ingredient6}</li>
                        <li>{post.ingredient7}</li>
                        <li>{post.ingredient8}</li>
                    </ul>

                    <p className="oneAstucePostP">{post.blogText}</p>
                    <h4>La préparation :</h4>
                        <ul className="ulRecette">    
                        <li className="liRecette">On prépare son plan de travail et on se protége.(Voir l'onglet Commencer)</li>
                        <li className="liRecette">Dans un bocal en verre assez grand, mettre l'eau.</li>
                        <li className="liRecette">Dans un bol à part, mesurez la quantité de soude.</li>
                        <li className="liRecette">Mettre la soude dans l'eau ( jamais l'inverse !!! )</li>
                        <li className="liRecette">Mélanger, retirer et rincer la cuillière, laisser tout de côté pour que ça tiédisse. Attention ça chauffe !</li>
                        <li className="liRecette">Dans un bol assez haut, mélangez toutes vos huiles/beurres. Vous pouvez faire fondre aux micro-ondes petit à petit si besoin.</li>
                        <li className="liRecette">Quand la soude est entièrement dissoute, que le mélange est quasi transparent et que la température a bien descendu, versez dans le mélange des huiles.</li>
                        <li className="liRecette">Mélanger rapidement avec une maryse puis mixer avec votre mixeur plongeant 5s.</li>
                        <li className="liRecette">Le mélange doit être homégéne et lorsque vous retirez le mixeur vous devez voir la trace du rond du mixeur dans la préparation.</li>
                        <li className="liRecette">Voir l'article sur "La trace !".</li>
                        <li className="liRecette">Si pas de trace, on remixe en mélangeant en même temps 5/10s. Encore et encore, jusqu'à la fameuse trace.</li>
                        <li className="liRecette">On met le surgraissage (je mélange mes colorants dans mes colorants dedans, c'est plus facile) et les huiles essentielles,les poudres si il y en a besoin, on mélange à la maryse.</li>
                        <li className="liRecette">On prépare son moule posé sur un plateau et on y verse la prépration.</li>
                        <li className="liRecette">Prend le film étirable, et recouvrir le moule avec. Cela évite le "gel", une fine couche de cristaux qui se forment au dessus du savon.</li>
                        <li className="liRecette">Mettre une serviette dessus pour garder la chaleur.</li>
                        <li className="liRecette">Laisser poser 24h et démouler.</li>
                        <li className="liRecette">Plus qu'à laisser curer 4 à 6 semaines pour laisser la soude caustique devenir inoffenssive !</li>
                    </ul>
                </figure>

            </div>  
        </div>
    )}


export default OneRecette;