// import de la fonction useState de react
import { useState} from "react"

import '../styles/Footer.css'

function Footer() {
	const [inputValue, setInputValue] = useState('adresse mail')
	console.log("input value", inputValue)
    const isInputErrorMail = inputValue.includes("@");
	
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