import React from 'react'
import './App.css';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Header from './components/Header';
import Home from './containers/Home';
import Recette from './containers/Recettes';
import Astuce from './containers/Astuces';
import Start from './containers/Start';
import Footer from './components/Footer';
import Contact from './containers/Contact';
import Cgu from './components/Footer/CGU';
import OneAstuce from './components/Main/Astuce/OneAstuce';
import Mentions from './components/Footer/Mentions_Legales';
import PlanDuSite from './components/Footer/plan_du_site';
import OneRecette from './components/Main/Recette/OneRecette';


function App() {
  return (
    <div className="App">

      <Router>
        <Header />
         <Switch>
           <Route exact path="/" component={Home} />
           <Route path="/commencer" component={Start} />
           <Route path="/recettes" component={Recette} />
           <Route path="/astuces" component={Astuce} />
           <Route path="/contact" component={Contact} />
           <Route path="/cgu" component={Cgu} />
           <Route path="/mentions-légales" component={Mentions} />
           <Route path="/plan-du-site" component={PlanDuSite} />
           <Route path="/uneAstuce/:postId" component={OneAstuce} />
           <Route path="/uneRecette/:postId" component={OneRecette} />
         </Switch>
         <Footer />
      </Router>
    </div>
  );
}

export default App;
