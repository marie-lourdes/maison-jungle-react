import  plantList from '../datas/plantList'
// l accumulateur prend comme valeur au premier tour la valeur initial "interieur", ou zero,
//aux autres tours suivant , l accumluateur cumule les valeurs string valeur courante, l accumulateur a cahque tour vaut les valeur courante accumulé dans les precedent tour qui s accumule avec la valeur courante de cette boucle 
//reduce () accumule les valeurs courante de chaque element avec l accumulateur et reduit la variable categorie en seule valeur qui est le tableau
// reduce prend en parametre une fonction callback et une valeur initial
//la fonction callback prend en parametre (accumaluateur( valeur precedente ou initiale au premier appel de reduce() qui cumule avec la valeur courante), valeur courante chaque element, index, tableau)
// l accumulateur prend la valeur initial qui valeur vide  du tableau vide au premier appel,
// si il y n 'y a pas dans le tableau(vvaleur initial), la  même valeur dans category dans la valeur courante "plant" avec la propriéte category,
// il concatene dans un nouveau tableau: le tableau initial la valeur initial avec la valeur courante qui est monstera category: donc un string vide"" de la valeur intial du tableau  qui est concantené dans un nouveau tableau(avec la methode concat) avec la valeur string de category
// aux tours suivants l accumulateur prend la valeur precedente qui est le tableau monstera catgory:
// si la valeur de la category de l element courant (plant) est la même (ou existe) que celle de l accumulateur acc.includes(), il affiche la valeur precedent dans le tableau de l accumulateur [monstery category]
// si la valeur de la category de l element courant est differente de celle ou celles de l accumalateur(valeur precedente: qui cumule les category dans le tableau)
//on concatene dans un nouveau tableu la valeur category de l element courant avec le tableau de l accumulateur et ainsi de suite en parcourant tous les elment du tableau plant list
// la valeur de categorie sera une concatenation du tableau accumulateur dans dun nouveau tableau avec  valeur category de chaque element courant si les valeurs category sont differente 
// ce qui nous permet d avoir un tableau stocké dans la variable categorie avec les differente valeur sans iterer sur les valeur semblables et se retrouver aves des valeurs de category identique dans liste de categorie
function ShoppingList() {
    const categories = plantList.reduce(
		(acc, plant) =>
			acc.includes(plant.category) ? acc : acc.concat(plant.category),
		[]// deux parametre la valeur initial utilisé par l accumulateur au premier appel de reduce()
          
        
		
	)
    console.log( "categorie", categories)
  
	return (
		<div>
			<ul>
				{categories.map((cat) => (
					<li Key={cat}>{cat}</li> // une clé unique crée avec la valeur de chaque categorie
				))}
			</ul>
			<ul>
				{plantList.map((plant) => (
					<li Key={plant.id}>{plant.name}</li>// clé unique crée avec les id des plante
				))}
			</ul>
		</div>
	)
   
}

export default ShoppingList
