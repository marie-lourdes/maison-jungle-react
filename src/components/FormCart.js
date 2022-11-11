import React from "react";
import {useState}  from "react"; 
function FormCart (props, context, updater){
    
    const [inputValue, setInputValue] = useState('Posez votre question ici')//l etat initial de l inputvalue qui prend la valeur de useState
    console.log("inputValue, setImputValue",inputValue, setInputValue)
    
    return(
       <div className="forms">
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
                onChange={(e) => setInputValue(e.target.value)} />
                <button onClick={() => alert(inputValue)}>Alertez moi </button>
            </div>
        </div>
      
       
    )
}

function handleSubmit(e){
    e.preventDefault()
    const inputForm = e.target["my-input"].value;
    alert( `imputform ${inputForm}`);


}


export default FormCart;