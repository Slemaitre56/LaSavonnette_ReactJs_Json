import React, { useState } from "react";



const Form = () => {
    // Je crée des const UseState pour pouvoir manipuler mes datas
    const [name, setName] = useState("");
    const [firstName, setFirstName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const isEmail = ( )=> {
      let mail = document.getElementById('not-mail');
      let regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

      if( email.match(regex)){
        mail.style.display = 'none';
        return true;
      }else {
        mail.style.display = 'block';
        mail.style.animation = 'dongle 1s';
        setTimeout(() =>{
          mail.style.animation = 'none';
        },1000)
        return false;
      }
    }

    const failMessage = () => {
      let formMess = document.querySelector(".form-message");

      formMess.innerHTML = "Merci de remplir les champs requis *";
      formMess.style.opacity = "1";
      formMess.style.background = 'rgb(254, 131, 131)';

    }

    const successMessage = () => {
      let formMess = document.querySelector(".form-message");

      formMess.innerHTML = "Votre message à bien été envoyé !";
      formMess.style.opacity = "1";
      formMess.style.background = 'rgb(113, 216, 163)';

      setTimeout(() =>{
        formMess.style.opacity = '0';
      },5000)

    }
  
    // Je crée une const pour envoyer mes datas via EmailJs
    const handleSubmit = (e) => {
      e.preventDefault();

      if(name && isEmail() && message) {
        sendFeedback("template_s1dk4vl", {
        name,
        firstName,
        email,
        message,
      });
      }else{
        failMessage();
      }
  
      
    };
    
    // Je crée unes const pour envoyer à EmailJs les datas et recevoir le template dans ma boîte mail
    const sendFeedback = (templateId, variables) => {
  
      window.emailjs
        .send("service_us6fz2h", templateId, variables)
        .then((res) => {
          successMessage();
          setName("");
          setFirstName("");
          setEmail("");
          setMessage("");
        })
        .catch(
          (err) =>
            document.querySelector('.form-message').innerHTML =
              "Une erreur s'est produite, veuillez réessayer.")
    };

    return (
        <div className="blocForm">
            <h2>Nous contacter</h2>
            <form>
                <div className="blocName">
                   <label>Nom *</label>
                   <input
                    type="text"
                    id="name"
                    name="name"
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                    autoComplete="off"
                    /> 

                   <label>Prénom *</label>
                   <input 
                   type="text"
                   id="firstName"
                   name="firstName"
                   onChange={(e) => setFirstName(e.target.value)}
                   value={firstName}
                   autoComplete="off"
                   /> 

                   <label id="not-mail">Email non valide</label>
                   <label>Email *</label> 
                   <input 
                   type="mail"
                   id="email"
                   name="email"
                   onChange={(e) => setEmail(e.target.value)}
                   value={email}
                   autoComplete="off"
                   /> 

                  <label>Ecrire votre message *</label>
                  <textarea 
                    id="message"
                    name="message"
                    onChange={(e) => setMessage(e.target.value)}
                    value={message}
                    />
                </div>

                <input
                className="readMore"
                type="button"
                value="Envoyer"
                onClick={handleSubmit}
                />

                <div className="form-message"></div>
            </form>
  
        </div>
    )
}

export default Form;