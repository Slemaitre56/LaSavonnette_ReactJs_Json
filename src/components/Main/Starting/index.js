import React from 'react';
import imgKawai from '../../../pictures/startImg/kawaii-clin-d-oeil-1.jpeg';
import imgKawai2 from '../../../pictures/startImg/kawaii6.jpg';
import imgKawai3 from '../../../pictures/startImg/kawaii4.jpg';
import imgKawai4 from '../../../pictures/startImg/kawaii5.jpg';
import imgKawai5 from '../../../pictures/startImg/kawaii7.jpg';
import soude from '../../../pictures/startImg/soude.jpg';
import vinaigre from '../../../pictures/startImg/vinaigre.jpg';

const Starting = () => {
    return (
        <div className="article">
            <h2>Bien commencer en toute sécurité !</h2>

            <div className="recentPost noteAuteur">
                <h3>Conseil de l'auteur</h3>
                <figure className="blocStart">
                    <img className="imgRecentPost" src={ imgKawai } alt="start"/>
                    <p>Avant de commencer à faire mes propres savons, j'avais peur. Je voyais ce processus comme quelque chose de trop
                         couteux et un peu dangereux, donc j'ai mis un peu de temps à vraiment sauter le pas !<br/>
                        En fait, c'est ma soeur qui m'a embrigadé dans cette histoire ! Elle était tellement fière et contente d'avoir 
                        réussi son tout premier savon que cela m'a donné envie !<br/>
                        Alors oui, cela demande un peu de frais pour se procurer le matériel, les huiles etc. Oui, cela demande un peu de 
                        précaution car on peut se brûler... ça fait un peu peur hein ? Ne vous inquietez pas je vous explique tout ce 
                        qu'il faut savoir !<br/>
                        Alors on commence ? 
                    </p>

                </figure>
            </div>

            <div className="recentPost">
                <h3>Etape 1 : Le minimum des ustensibles</h3>
                <figure className="blocStart">
                    <img className="imgStart" src={ imgKawai2 } alt="start"/>
                    <ul className="ulStart">
                        <h3>Ce dont vous avez besoin :</h3>
                        <li>Un mixeur plongeant qui servira uniquement pour faire des savons ou autres produits ménagers</li>
                        <li>Une maryse ou cuillière à bois que pour faire des savons etc.</li>
                        <li>Des huiles ( Olive, Coco le minimum ) - <a>Voir mes astuces !</a></li>
                        <li>Un moule - <a>Voir mes astuces !</a></li>
                        <li>Du film étirable</li>
                        <li>De l'eau</li>
                        <li>De la soude caustique</li>
                        <li>Du vinaigre blanc </li>

                        <h4>En plus :</h4>
                        <li>Fragrances/ Huiles essentielles</li>
                        <li>Vitamines</li>
                        <li>Colorants naturels</li>
                    </ul>
                </figure>
            </div>

            <div className="recentPost noteAuteur">
                <h3>Conseil de l'auteur</h3>
                <figure className="blocInfos">
                    <img className="imgInfos " src={ soude } alt="start"/>
                    <p className="pInfos" > La soude caustique peut faire peur... car bah oui c'est caustique !<br/>
                        Donc il y a risque de brûlure mais si vous respectez 
                        les consignes de sécurité y n'aura pas de problème ! De plus, regardez bien, c'est écrit " savon" sur la bouteille !
                    </p>
                </figure>

                <figure className="blocInfos">
                    <img className="imgInfos" src={ vinaigre } alt="start"/>
                    <p className="pInfos"> Pourquoi du vinaigre blanc ?<br/> 
                        C'est l"antidote" de la soude caustique ! Je vous conseille d'en mettre dans un 
                        pulvérisateur et le garder près de vous pendant la préparation du savon !</p>
                </figure>
            </div>


            <div className="recentPost">
                <h3>Etape 2 : On trouve ça où ?</h3>
                <figure className="blocStart">
                    <img className="imgStart etape2" src={ imgKawai3} alt="start"/>
                    <ul className="ulStart">
                        <li>Un mixeur plongeant : Action, baboo, Gifi. Un mixeur tout simple suffit !</li>
                        <li>Une maryse ou cuillière à bois : Dans votre tiroir ? Sinon Action, Gifi etc.</li>
                        <li>Des huiles : Je suis sûre que vous en avez déjà dans vos placards ! Sinon au super-marché ou sinon sur le site <a href="https://fr.naissance.com/?gclid=EAIaIQobChMIu8e8lNqO7QIVHxoGAB2K7wS0EAAYASAAEgKx0vD_BwE">Naisance</a></li>
                        <li>Un moule : Si vous avez un moule en silicone que vous n'utilisez plus ou sinon sur <a href="https://www.aroma-zone.com/">Aroma-zone</a> ou sur <a href="https://www.amazon.fr/s?k=moule+savon&__mk_fr_FR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&ref=nb_sb_noss_2">Amazone</a>.</li>
                        <li>Du film étirable : Au super-marché si vous n'en avez pas déjà.</li>
                        <li>De l'eau : Certains prennent de l'eau distillée mais l'eau au robinet convient très bien.</li>
                        <li>De la soude caustique : Leroy Merlin ou Castorama.</li>
                        <li>Du vinaigre blanc: Pas besoin d'acheter de marque hyper chere ! Le 1er prix dans le rayon huile et vinaigre de votre super-marché ira très bien ! </li>
                        <li>Fragrances/ Huiles essentielles; En pharmacie ( mais c'est beaucoup plus cher) sinon sur <a href="https://www.aroma-zone.com/">Aroma-zone</a> ou sur <a href="https://www.aromateasy.net/fr/">Aromateasy</a> </li>
                        <li>Vitamines : <a href="https://www.aroma-zone.com/">Aroma-zone</a> ou <a href="https://fr.naissance.com/?gclid=EAIaIQobChMIu8e8lNqO7QIVHxoGAB2K7wS0EAAYASAAEgKx0vD_BwE">Naissance</a></li>
                        <li>Colorants naturels : <a href="https://www.aroma-zone.com/">Aroma-zone</a></li>
                    </ul>

                </figure>
            </div>

            <div className="recentPost">
                <h3>Etape 3 : Les précautions</h3>
                <figure className="blocStart">
                    <img className="imgStart" src={ imgKawai4 } alt="start"/>
                    <ul>
                        <li>Des lunettes de protection ( du style de ceux qu'on achete pour les cours de chimie au collége).</li>
                        <li>Un masque, les vapeurs peuvent vous irriter le fond de la gorge. Normalement si vous ne mettez pas le nez direct dans la préparation tout devrait bien se passer !</li>
                        <li>Des vieux vêtements au cas où</li>
                        <li>Une paire de gant (pas chirurgicaux trop fin)</li>
                        <li>Une vielle nappe pour protéger votre plan de travail</li>
                    </ul>

                </figure>
            </div>

            <div className="recentPost noteAuteur">
                <h3>Conseil de l'auteur</h3>
                <figure className="blocStart">
                    <img className="imgStart " src={ imgKawai5 } alt="start"/>
                    <ul className="ulStart">
                        <h3>Ce que je fais :</h3>
                        <li>Je m'isole des autres.</li>
                        <li>Je protége mon plan de tavail avec ma vielle nappe</li>
                        <li>Je sors uniquement ce dont j'ai besoin( huiles, fragrances, mixeur, vinaigre, balance, recipients, etc).</li>
                        <li>Je prend ma plaque de cuisson que je recouvre de papier absorbant</li>
                        <li>Je me protége, gants, masque, blouse, lunettes ( attachez-vous en cheveux !).</li>
                        <li>J'ouvre la fenêtre, où mieux faites ça dehors si le temps le permets</li>
                        <li>Je prépare ma soude caustique puis je la laisse de côté le temps que cela refroidisse.</li>
                        <li>Je prépare mes huiles/beurres, mes colorants, etc.</li>
                        <li>Je commence ma recette et à chaque fois que j'ai fini d'utiliser un ustensible, un recipient, je le pose sur ma plaque 
                            de cuisson et j'asperge de vinaigre blanc
                        </li>
                        <li>Si j'ai de la prépation sur mes gants ou la nappe, j'aperge de vinaigre blanc et j'essuie.</li>
                        

                        <p>Tout ça peut paraître très contraignant et compliqué la première fois. Mais dès la 2éme prépation, cela viendra naturelemet.<br/>
                        C'est comme tout préparer un gâteau. Vous sortez les ingredients, vous mettez votre tablier et vous faites votre tambouille !<br/>
                        POur être honnête, je me suis déjà brûler. J'avais un peu de prépatation sur mon gant et je me suis frottée le front car un cheveux me chatouillait...<br/>
                        J'ai mis du vinaigre, ce qui a bien piqué ! Et puis au final tout vas bien, c'était un peu rouge mais rien de grave !</p>
                    </ul>
                </figure>

            </div>


        </div>
    )
}

export default Starting;