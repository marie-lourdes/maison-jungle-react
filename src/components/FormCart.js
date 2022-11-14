import React from "react";
import {useState}  from "react"; 
import "../styles/FormCart.css"
function FormCart (props, context, updater){
    
    const [inputValue, setInputValue] = useState('Posez votre question ici')//l etat initial de l inputvalue qui prend la valeur de useState
    console.log("inputValue, setImputValue",inputValue, setInputValue)
    // verification de la valeur entree et enregistrée dans l inputValue avec setState de la fonction retournée par useState() (setInputValue)
    const isInputError = inputValue.includes("f");
    
    return(
       <div className="forms">
            <h2> Formulaire</h2>
            <form onSubmit={(e)=>handleSubmit(e)}>
                {/* la fonction anonyme de l evenement onClick passe le parametre event à la fonction callback d evenment handlesubmit qui est appele avec les parenthese dans la fonction anonyme de onClick*/}
                {/* valeur par default avec react et l attribut defaultValue*/ }
                <input type="text" name="my-input" defaultValue= "Tapez votre texte"></input>
                <button type= "submit"> Entrer</button>
            
             
       {  /* form onSubmit= {handleSubmit} la fonction d evenement est executé avec l objet event en parametre*/} 
            </form>
            <div className= "question-form">
                <textarea
                value={inputValue}
                onChange={(e) => checkValue(e.target.value)} />
                {isInputError && ( <div> Vous n'avez pas le droit d utiliser la lettre f</div>)}
                <button onClick={() => alert(inputValue)}>Alertez moi </button>
            </div>
        </div>
      
       
    )

    // l imput n affichera pas dans sa value la lettre 4 meme si on le saisie dans la value de textarea, car on n empeche la mise a jour de l inputValue 
    function checkValue(value) {
        if (!value.includes("4")) {
            setInputValue(value)
        }
    }
}

function handleSubmit(e){
    e.preventDefault()
    const inputForm = e.target["my-input"].value;
    alert( `imputform ${inputForm}`);


}




export default FormCart;