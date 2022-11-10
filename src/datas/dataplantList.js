// import des images pour les données des plantes et stockés dans les variables en meme temps que la declaration de la variable grace a import
import monstera from "../assets/monstera.jpg"
import aloe from "../assets/aloe.jpg"
import ficusLirata from "../assets/ficus-lirata.jpg"
import geranium from "../assets/geranium.jpg"
import olivier from "../assets/olivier.jpg"
import pothos from "../assets/pothos.jpg"
import succulente from "../assets/succulente.jpg"
import yucca from "../assets/yucca.jpg"
import basilique from "../assets/basilique.jpg"

//liste de données du composant shoopingList
const plantList = [
	{
		name: 'monstera',
		category: 'classique',
		id: '1ed',
        isBestSale: true,
		isSpecialOffer: true,
		light: 1,
		water: 2,
		Cover: monstera
	},
	{
		name: 'ficus lyrata',
		category: 'classique',
		id: '2ab',
        isBestSale: true,
		light: 2,
		water: 3,
		Cover: ficusLirata
	},
	{
		name: 'pothos argenté',
		category: 'classique',
		id: '3sd',
        isBestSale: false,
		light: 1,
		water: 2,
		Cover: pothos
	},
	{
		name: 'yucca',
		category: 'classique',
		id: '4kk',
        isBestSale: false,
		isSpecialOffer: true,
		light: 3,
		water: 2,
		Cover: yucca
	},
	{
		name: 'olivier',
		category: 'extérieur',
		id: '5pl',
		light: 2,
		water: 2,
		Cover: olivier
	},
	{
		name: 'géranium',
		category: 'extérieur',
		id: '6uo',
		light: 3,
		water: 1,
		Cover: geranium
	},
	{
		name: 'basilique',
		category: 'extérieur',
		id: '7ie',
		light: 3,
		water: 3,
		Cover: basilique
	},
	{
		name: 'aloe',
		category: 'plante grasse',
		id: '8fp',
		isSpecialOffer: true,
		light: 1,
		water: 2,
		Cover: aloe
	},
	{
		name: 'succulente',
		category: 'plante grasse',
		id: '9vn',
		light: 1,
		water: 1,
		Cover: succulente
	}
]

export default plantList