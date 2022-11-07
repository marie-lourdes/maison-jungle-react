import React from 'react';
import Banner from "./Banner";
import Cart from "./Cart";
import "../styles/App.css"


function App() {
    return(<React.Fragment>
       
        <Banner/>
        <main>
        <Cart/>
        </main>
        </React.Fragment>
    )
}


export default App;