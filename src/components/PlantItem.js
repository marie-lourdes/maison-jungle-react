import CareScale from './CareScale'
import '../styles/PlantItem.css'
import React from 'react'

//Declaration des props dans l objet Props de la fontion composant PlantItem
function PlantItem({id, cover, name, water, light, category, isBestSale, isSpecialOffer}){
	return (
	<div className="list-plante_card" >
		<li Key={id} className="list-plante__list-item " >
			{/* clé unique crée avec les id des plante*/}
			<div className="list-item__cover" onClick={()=> handleClick(name)}>
				{/* sans le stop propagation de l evenement le clic sur la div image remonte au parent, l evenement clic crée remonte au parent  "list-plante card"qui dans le css agrandit la vignette lors du clic
				-si je ne clique que sur la vignette en evitant l image l agrandissemnt a son comportement normal defini le css snas declencher le clic au niveau de l element enfant
				les evenement clic se propage et remonte toujours au parentsn pas pas du parents à l enfant */}


			{/* l evenment onClick devient asynchrone avec la fonction callback de l evenement qui est appelé par la fonction anonyme
			//la fonction anonyme de l evenement onClick apelle la fonction d evenement handleclick devenu une fonction callbacK qui attend l appel de la fonction anonyme de onclick pour executer la fontion evenment handleClick
			//snas la focntion callback, l evenment est ecouté en meme temps sur tous les images sans meme que je clique sur lun des images*/}
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

// fonction evenement clic sur l image

function handleClick(name){
	alert(`ceci est un ${name} clic`)
	
} 





export default PlantItem