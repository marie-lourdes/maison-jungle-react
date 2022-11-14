import React from "react"
import {useState} from "react"
import FormCart from "./FormCart"
import "../styles/Cart.css"
function Cart() {
    const monsteraPrice = 8
    //State composant cart avec valeur initial 0 pour le nombre d element ajouté au panier
    const [cart, updateCart] = useState(0);
    //State isOpen avec valeur initial false pour l ouverture ou la fermeture du panier
    const [isOpen, setIsOpen] = useState(false)

 
    return (
    <div  className ="cart">
      { isOpen ?
      //si le panier est ouvert
      //- on affiche un bouton fermer le panier qui au click met a jour le state isOpen a false et renverra à la deuxieme condition qui affiche le bouton ouvrir le panier
     // le contenu du panier avec les monsteras ajouté au panier
     <div>
        <button className="button-toogle button-toogle--close" onClick= {() => setIsOpen(false)}>Fermer le panier ❌</button>
        <div>
            <h2>Panier</h2>
            <ul>
              <li> {cart} Monstera : {monsteraPrice}€</li>  
            </ul>
            <button onClick={()=> updateCart(cart +1)}>Ajouter</button>
      
            {/* calcul du total avec la valeur actuel de sate cart enregistré par la fonction setState (fonction setState(comprenant la valeur actuel en parametre) valeur de retour de useState) updateCart*/}
            <h3>Total : {monsteraPrice*cart}€</h3>
        </div>
      </div> : 
      // si c est false, le panier est fermé on affiche un button toogle ouvrir le panier 
      // qui au click en met a jour le state isOpen avec setIsOpen qui renverra true  à la premier condition true et genere le panier

      <div>
      <button  className="button-toogle button-toogle--open" onClick={() => setIsOpen(true)}>Ouvrir le panier</button>
      </div>}
      <FormCart/>
     
  </div>
    )
}

export default Cart;