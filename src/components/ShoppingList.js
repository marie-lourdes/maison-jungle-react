//composant shoppingList avec liste 

//liste de données du composant shoopingList 
const plantList = ["monstera", "ficus", "pothos", "yucca", "palmier"];

//composant ShoopingList avec les element du composant itérés avec la methode map()

function ShoppingList() {
    // les accolades pour que le langage JSX interprete les expressions javascript 
    //iteration sur chaque element du tableau plantList avec la methode map() et sa fonction callback qui prend en parametre plant du tableau plantList
    return (
        <ul>
            {plantList.map(plant => <li>{plant}</li>)} 
        </ul>
    )
}

export default ShoppingList
