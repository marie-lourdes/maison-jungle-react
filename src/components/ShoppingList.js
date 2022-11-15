import { useState } from 'react'
import { plantList } from '../datas/plantList'
import Categories from "./Categories"
import PlantItem from './PlantItem'
import '../styles/ShoppingList.css'

function ShoppingList({ cart, updateCart }) {
    const[categoryActive, setCategory] = useState("")
    const categoriesPlant = plantList.reduce(
        (acc, plant) =>
            acc.includes(plant.category) ? acc : acc.concat(plant.category),
        []
    )

	function addToCart(name, price) {
		const currentPlantSaved = cart.find((plant) => plant.name === name)
		if (currentPlantSaved) {
			const cartFilteredCurrentPlant = cart.filter(
				(plant) => plant.name !== name
			)
			updateCart([
				...cartFilteredCurrentPlant,
				{ name, price, amount: currentPlantSaved.amount + 1 }
			])
		} else {
			updateCart([...cart, { name, price, amount: 1 }])
		}
	}

	return (
		<div className='lmj-shopping-list'>
			
                <Categories  categories= {categoriesPlant} categoryActive= {categoryActive} setCategory= {setCategory}/>
				
			
			<ul className='lmj-plant-list'>
				{plantList.map(({ id, cover, name, water, light, price, category }) => 
                !categoryActive || categoryActive === category ? ( 
                // si aucune categorie a ete selectionné on affiche toutes les plante
                // si la categoryActive du State correspond a la category des plante itéré par map affiché ces plantes
					<div key={id}>
						<PlantItem
							cover={cover}
							name={name}
							water={water}
							light={light}
							price={price}
						/>
						<button onClick={() => addToCart(name, price)}>Ajouter</button>
					</div>
				): null
                )}
			</ul>
		</div>
	)
}

export default ShoppingList
