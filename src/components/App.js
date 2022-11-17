import React from 'react';
import {useState, useEffect} from "react"
import Banner from "./Banner";
import Cart from "./Cart";
import ShoppingList from "./ShoppingList";
import Footer from "./Footer";
import "../styles/App.css";


function App() {
 
    
     const [categoryActive, setCategoryActive] = useState("");
     //state pour cacher le footer et nettoyer les effets dans footer.js 
    const [isFooterShown, setFooterShown] = useState(true)
	//State composant cart avec valeur initial tableau vide si le localstorage est vide ne contient pas de plante enregistré pour le nombre d element ajouté au panier
	//si le localstorage contient des valeur dans le "cart" on parse et on l attribue à la valeur initial de useState
	const savedCart = localStorage.getItem('cart')
	const [cart, updateCart] = useState(savedCart ? JSON.parse(savedCart) : [])
	useEffect(() => {// enregistre a chaque mise a jour du State cart de app.js, mis a jour par shoppingList qui a recupéré la fonction setState de app.s dans la prop, et cart.js le composant recupere la valeur de state cart dans ses props pour afficher l ajout de shoppingList
		//enregistre apres le re render de app er la mise a jour de state cart de apps.js
		localStorage.setItem('cart', JSON.stringify(cart))
	}, [cart])
    return(<React.Fragment>
       
        <Banner/>
        <main>
            {/* recuperation du state et fonction setState du parents en commun dans les props enfants( Cart et ShoppingList) et lier le state parents commun 
            au composant cart et Shoopinglist avec les meme mise jour de State actuel et qui partageront la fonction updateCart(setState) à leurs enfants respectifs
            et mettreb a jour le state du parent commun qui repartagera les states actuel au travers des props des enfants*/}
			<Cart cart={cart} updateCart={updateCart} categoryActive={categoryActive} setCategoryActive={setCategoryActive} isFooterShown={isFooterShown} setFooterShown={setFooterShown}/>
  
            <ShoppingList cart={cart} updateCart={updateCart} categoryActive={categoryActive} setCategoryActive={setCategoryActive}/>
         
        </main>
		<div className="separator"></div>
        
       {/* montre le footer avec la valeur par defaut et initial de useState à true*/}
		 {isFooterShown &&   <Footer cart= {cart}/>} 
        {/*<Footer cart= {cart}/>*/}
        </React.Fragment>
    )
}

console.log("react app",React)
export default App;