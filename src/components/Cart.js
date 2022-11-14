import React from "react"
import {useState} from "react"
import FormCart from "./FormCart"
import "../styles/Cart.css"
function Cart() {
    const monsteraPrice = 8
    const [cart, updateCart] = useState(0);
 
    return (
    <div  className ="cart">
      <div>
          <h2>Panier</h2>
          <ul>
            <li>Monstera : {monsteraPrice}€</li>  
          </ul>
        <button onClick={()=> updateCart(cart +1)}>Ajouter</button>
      </div>
      {/* calcul du total avec la valeur actuel de sate cart enregistré par la fonction setState (fonction setState(comprenant la valeur actuel en parametre) valeur de retour de useState) updateCart*/}
      <h3>Total : {monsteraPrice*cart}€</h3>
      <FormCart/>
    </div>
    )
}

export default Cart;