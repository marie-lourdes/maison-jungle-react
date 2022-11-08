import React from 'react';
import Banner from "./Banner";
import Cart from "./Cart";
import ShoppingList from "./ShoppingList";
import "../styles/App.css"


function App() {
    return(<React.Fragment>
       
        <Banner/>
        <main>
        <Cart/>
        <ShoppingList/>
        </main>
        </React.Fragment>
    )
}


export default App;