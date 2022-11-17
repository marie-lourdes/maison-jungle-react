import React from "react"
import { useState, useEffect } from "react"
import FormCart from "./FormCart"
import "../styles/Cart.css"
// recuperation du contenu du State parent commun APP,  et la fonction de mise à jour setState dans les props enfants  ici CART
//pour que les enfants  de cart puisse mettre a jour le state du parent (app.js) de Cart
function Cart({cart, updateCart, categoryActive,isFooterShown, setFooterShown }) {

 
  const total = cart.reduce(
		(acc, plantType) => acc + plantType.amount * plantType.price,
		0
	)
   
  //state pour cacher le footer et nettoyer les effets dans footer.js 
  const [isOpen, setIsOpen] = useState(true)

  // test alert affichage du total : bloque la suite du code il faut appuyer sur ok dans la fenêtre d alert pour que le re render fonction avec le return
   
  /*alert( ` total du panier ${total}`);*/

  // afficher l alerte uniquement au premier render (et pas a chaque re render du composant) du composant cart avec le tableau vide en deuxieme parametre de useEffect
  // en raffraichissant la page
  useEffect( () => {
    alert( ` Bienvenue de la maison jungle`)
    }, [] );

  // afficher le total a chaque modification du total dans le titre de l onglet 
  useEffect( () => {
    document.title = ` LMJ: ${total}€ d'achats` 
  }, [total])

      
  //test alert afficahge ddu total et category du parent Shoppinglist avec l action effet de bords useEffect() a chaque modification de total et du state parent(app) category
  useEffect( () => {
   alert(`total panier: ${total}€ et la plante categorie: ${categoryActive} `)    
    }, [total , categoryActive])

    return (
    <div  className ="cart">
      { isOpen ?
      //si le panier est ouvert
      //- on affiche un bouton fermer le panier qui au click met a jour le state isOpen a false et renverra à la deuxieme condition qui affiche le bouton ouvrir le panier
     // le contenu du panier avec les monsteras ajouté au panier
     <div>
        <button className="button-toogle button-toogle--close" onClick= {() => setIsOpen(false)}>Fermer le panier ❌</button>
		{/* le panier est  ouver par defaut affichera le contenu du panier si il y a au moins un plante ajouté
		sinon affiche dans le panier "le panier est vide*/}
		{cart.length > 0 ?
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
            <button className=" main-buttons emptyCart" onClick={() => updateCart([])}>Vider le panier</button>
        </div>
        : <div> Votre panier est vide </div>}     
      </div> : 
      // si c est false, le panier est fermé on affiche un button toogle ouvrir le panier 
      // qui au click en met a jour le state isOpen avec setIsOpen qui renverra true  à la premier condition true et genere le panier

      <div>
      <button  className="button-toogle button-toogle--open" onClick={() => setIsOpen(true)}>Ouvrir le panier</button>
      </div>}
      <FormCart/>
         {/* Cacher le footer du dom*/}
         <button className= "main-buttons main-buttons--Cart" onClick={()=>setFooterShown(false)}>
            CACHER
        </button>
     
  </div>
    )
}

export default Cart;