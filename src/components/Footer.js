// import de la fonction useState de react
import { useState, useEffect} from "react"

import '../styles/Footer.css'


function Footer( {cart}) {
	const [inputValue, setInputValue] = useState('')
	console.log("input value", inputValue)
    const isInputErrorMail = inputValue.includes("@");

//.....................................DIFFERENTES UTILISATIONS DE USEFFECT............................................

	//- use effect sur toutes les modification et re render du commposant Footer sans tableau de dependances
	/*useEffect( () =>{
		console.log( "affiche a chaque modification, chaque re-render du composant footer sans tableau de dependances")
	})*/

    //- use effect sur toutes les modification et re render du commposant Footer avec un  tableau de dependances vide
	useEffect( () =>{
		console.log( "affiche uniquement au premier re-render du composant Footer avec un tableau de dependances vide")
	}, [])

    //- use effect uniquement sur  les modification de  state Cart du parent commun app.js recupéré dans la prop de Footer et re render du commposant Footer avec un  tableau de dependances vide
	/*affiche uniquement à la modification, mise a jour du State cart  parent commun app.js 
	et au re-render du composant Footer avec  le state parent commun cart   recupéré dans la prop du composant Footer etle met aussi à jour et le re-render")*/
	
	useEffect( () =>{
		console.log( "affiche uniquement à la modification, à la mise a jour du State cart  parent communs app.js et au re-render du composant Footer avec  le state parent commun cart recupéré dans la prop du composant Footer mis aussi à jour et re-render du composant Footer ")
	}, [cart])

	//- useEffect avec l evenement du bouton qui retire le footer du dom et va re-render le composant app.js avec le State isFooterShow
    useEffect( () => {
		
		
		//le return permet d esxecuter une fonction meme lorsque le composant n est plus dans le DOM l effet n est pas directement executer,
		//l effet est produit apres le re-render de app avec le footer supprimé  et pour executer cette action useEffect sur un composant qui n est plus dans le dom
		//on retourne une fonction  qui executera l action du useeffect
		return ()=> {
				console.log("affiche quand le footer est retiré du dom avec le boutton cacher et state is FooterShown de App.js")
		}
		
	})
	return (
		<footer className='footer'>
			<div className='footer_elem'>
				Pour les passionné·e·s de plantes 🌿🌱🌵
			</div>
			{/*evenement blur ajouté à la div input lorqu on valide l input et on clique hors de la div de l input*/}
			<div className='footer_elem'>
				{/* on peut chaines la creation des evenement pour un seul element: onChange et onBlur*/}
				<label>Laissez-nous votre mail :
					<input type= "text" placeholder=" Entrez votre email" value= {inputValue} onChange={(e)=>setInputValue(e.target.value) }  onBlur={()=>handleBlur()} />
				</label>
			</div>
		</footer>
	)

	function handleBlur(){
	
		if(!isInputErrorMail){
			alert("Attention, il n' y a pas d'@, ceci n est pas une adresse valide");
		}
		
	}
}

export default Footer