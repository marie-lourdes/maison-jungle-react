import { useState } from 'react'
import '../styles/Footer.css'

function Footer() {
	const [inputValue, setInputValue] = useState('adresse mail')
	console.log("input value", inputValue)
    const isInputErrorMail = inputValue.includes("@");
	return (
		<footer className='lmj-footer'>
			<div className='lmj-footer-elem'>
				Pour les passionné·e·s de plantes 🌿🌱🌵
			</div>
			<div className='lmj-footer-elem' onBlur={()=>handleBlur()}>
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
