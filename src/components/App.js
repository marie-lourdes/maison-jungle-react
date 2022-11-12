import React from 'react';
import Banner from "./Banner";
import Cart from "./Cart";
import ShoppingList from "./ShoppingList";
import Footer from "./Footer";
import "../styles/App.css";


function App() {
    return(<React.Fragment>
       
        <Banner/>
        <main>
			<Cart/>
			<ShoppingList/>
        </main>
		<div className="separator"></div>
		<Footer/>
        </React.Fragment>
    )
}

console.log("react app",React)
export default App;