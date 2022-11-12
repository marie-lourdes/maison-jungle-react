// import de la fonction useState de react
import { useState } from 'react'

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
			<div className='footer_elem' onBlur={()=>handleBlur()}>
				<label>Laissez-nous votre mail :
					<input type= "text" value= {inputValue} onChange={(e)=>	setInputValue(e.target.value) } />
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