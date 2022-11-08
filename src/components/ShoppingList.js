import "../styles/ShoppingList.css"
//composant shoppingList avec liste 

//liste de données du composant shoopingList 
const plantList = ["monstera", "ficus", "pothos", "yucca", "palmier"];

//composant ShoopingList avec les element du composant itérés avec la methode map()

function ShoppingList() {
    // les accolades pour que le langage JSX interprete les expressions javascript à ne pas confondre le string d interpolation ${}
    //iteration sur chaque element du tableau plantList avec la methode map() et sa fonction callback qui prend en parametre plant du tableau plantList
   // fonction callback de la methode map() prendre trois arguments map(callback(element, index, tableau))
   //insertion des key unique  du tableau plantList(avec le nom en string de chaque element  concatené avec l index de l element du tableau)  pour chaque liste de données du composant ShoppingList
   // l expression javascript de concatenation englobber dans l accolade JSX :
   //pour interpreter la concatenation javascript avec les string interpolation et les guillement `` de concatenation qui relie les deux string d interpolation  
   return (
        <div className="shopping-list">
            <ul>
                {plantList.map((plant, index) => <li Key= { `${plant }-${index}` } >{plant}</li>)} 
            </ul>
        </div>
    )
}

export default ShoppingList
