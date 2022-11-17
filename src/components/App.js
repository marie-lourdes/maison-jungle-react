import React from 'react';
import {useState} from "react"
import Banner from "./Banner";
import Cart from "./Cart";
import ShoppingList from "./ShoppingList";
import Footer from "./Footer";
import "../styles/App.css";


function App() {
 
    //State composant cart avec valeur initial tableau vide pour le nombre d element ajouté au panier
     const [cart, updateCart] = useState([]);
     const [categoryActive, setCategoryActive] = useState("");

  
 
    return(<React.Fragment>
       
        <Banner/>
        <main>
            {/* recuperation du state et fonction setState du parents en commun dans les props enfants( Cart et ShoppingList) et lier le state parents commun 
            au composant cart et Shoopinglist avec les meme mise jour de State actuel et qui partageront la fonction updateCart(setState) à leurs enfants respectifs
            et mettreb a jour le state du parent commun qui repartagera les states actuel au travers des props des enfants*/}
			<Cart cart={cart} updateCart={updateCart} categoryActive={categoryActive} setCategoryActive={setCategoryActive}/>
			<ShoppingList cart={cart} updateCart={updateCart} categoryActive={categoryActive} setCategoryActive={setCategoryActive}/>
        </main>
		<div className="separator"></div>
		<Footer/>
        </React.Fragment>
    )
}

console.log("react app",React)
export default App;