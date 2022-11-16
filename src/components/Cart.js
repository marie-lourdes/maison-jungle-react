import React from "react"
import { useState, useEffect } from "react"
import FormCart from "./FormCart"
import "../styles/Cart.css"
// recuperation du contenu du State parent commun APP,  et la fonction de mise à jour setState dans les props enfants  ici CART
//pour que les enfants  de cart puisse mettre a jour le state du parent (app.js) de Cart
function Cart({cart, updateCart}) {
  const total = cart.reduce(
		(acc, plantType) => acc + plantType.amount * plantType.price,
		0
	)
   
    //State isOpen avec valeur initial false pour l ouverture ou la fermeture du panier
    const [isOpen, setIsOpen] = useState(false)// panier ferme par defaut false

    // test alert affichage du total : bloque la suite du code il faut appuyer sur ok dans la fenêtre d alert pour que le re render fonction avec le return
   /*alert( ` total du panier ${total}`);*/

    // test alert afficahge ddu total avec l action effet de bords useEffect()
    useEffect(() => {
      alert( ` total du panier ${total}`)
     }, [total] )

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
            {cart.map(({ name, price, amount }, index) => (
							<div key={`${name}-${index}`}>
								{name} {price}€ x {amount}
							</div>
						))}
            </ul>
               
            {/* calcul du total avec la valeur actuel de sate cart enregistré par la fonction setState (fonction setState(comprenant la valeur actuel en parametre) valeur de retour de useState) updateCart*/}
            <h3>Total : {total}€</h3>
            {/*initialise la valeur du Stae cart a zero pour vider le panier*/}
            <button className="emptyCart" onClick={() => updateCart([])}>Vider le panier</button>
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