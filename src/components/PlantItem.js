import CareScale from './CareScale'
import '../styles/PlantItem.css'
import React from 'react'

//Declaration des props dans l objet Props de la fontion composant PlantItem
function PlantItem({id, cover, name, water, light, category, isBestSale, isSpecialOffer}){
	return (
	<div className="list-plante_card" >
		<li Key={id} className="list-plante__list-item " >
			{/* clé unique crée avec les id des plante*/}
			<div className="list-item__cover">
				<img src={cover} alt={`${name} cover`} />
			</div>
			
		
			{isSpecialOffer && <div className= "list-item--promo"> Soldes</div>}
			
           
            {/* determine la valeur de la propriété scaleValue, careType de l objet props du composant CareScale*/}
        </li>
		<div className= "list-plante_description">
		{name}
			{(isBestSale || category === "classique") && <span>&#128293;</span> }
			<CareScale careType= "light" scaleValue={light}/>
			<CareScale careType= "water" scaleValue={water}/>
			{/* toujours encapsuler deux composant imbriquer dans un element parents*/}
	    </div>
	</div>
	)

} 

export default PlantItem