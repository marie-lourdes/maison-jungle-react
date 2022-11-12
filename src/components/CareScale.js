/*1 methode avec  les variables scalevalue et caretype qui est declaré directement comme propriété de l objet props du parametre de la fonction du composant
et les valeur definis lors de l appel de la fonction du composant <CareScale scaleValue="" cartype="" /> dans shoopingList*/


function CareScale({scaleValue, careType, care}){
  
    const range = [1, 2, 3];
     /* si la valeur lumière  de la props caretype = light   la valeur de la prop caretype="water" de la propriété du composant CareScale */
    const scaleType = careType === "light" ? String.fromCodePoint(0x1F31E) : String.fromCodePoint(0x1F4A7)
    //String: objet global native de javascipt a ne pas confondre avec l objet global accessible avec this
    // integration  emoji en javascript prefixer de 0x f1546 et en html &# f1546(en hex ou en decimal) et en css "\ f1546"
    // copier coller le shorcode sur le site emojipedia l emoji apparit ds le code

    return (
        <div onClick={() =>handleClickCareScale( scaleValue, careType, care)}>
            {range.map((rangeElem) =>
          /* Si la valeur de la prop scaleValue est superieur ou egale à la donnée echelle du tableau,
         on génére un span soleil ou une goute d eau (selon la  valeur de la prop "caretype du composant" stocké dans scaleType) dans la div du composant, map itere sur chaque element du tableau range est execute le code de generation de span
          avec la condition ternaire */
                scaleValue >= rangeElem ? <span Key={rangeElem.toString()}>{scaleType}</span> : null
            )}
        </div>
    )
}

function handleClickCareScale(scaleValue, careType, care){
    switch(scaleValue){
        case 1:
            alert(`${careType}: cette plante requière peu  ${care}`)
        break;

        case 2:
            alert( `${careType}: cette plante requière moderement ${care}`)
        break;

        case 3:
            alert( `${careType}: cette plante requière beaucoup  ${care}`)
        break;

        default:
        alert( `cette plante ne requière pas d entretien`)


    }
   

    //alert(" clic arrosage et lumiere");
}


/* 2-methode d affectation dextructuré des variables scalevalue et caretype qui est declaré et recupere la valeur des propriétés de l objet prop
//si les variables sont nommé comme les propriétés de l objets, on declare un objet (comme le type de donnée prop) qui sera prop et les valeurs de ces proprité de cette objet prop
// seront stockées dans ces variables declarée de maniere destructuré
function CareScale(props){
    const {scaleValue, careType} = props
    console.log("props scaleValue",props)
   
    const range = [1, 2, 3]

    return (
        <div>
            {range.map((rangeElem) =>
            /* si la valeur lumière de la propriété scaleValue est superieur ou egale à la donnée echelle du tableau,
         on génére un span soleil dans la div du composant, map itere sur chaque element du tableau range est execute le code de generation de span
          avec la condition ternaire *
                scaleValue >= rangeElem ? <span Key={rangeElem.toString()}>&#127774;</span> : null
            )}
        </div>
    )
}*/

export default CareScale;


let objetDestructure ={a:"marielourdes",b:"marie", c:"millie", d:"marie-lourdes"}

console.log(objetDestructure)

let{a,...rest } = objetDestructure ;
console.log("a",a)
a= "leperlier"
console.log("l objet copié avec ses propriété et valeur qui ne sont pas celle de l objet a", rest)
const {...b}= objetDestructure;

console.log("b objet copié collé toutes les proprités et valeurs de l \"objet destructuré\"  y compris de l objet", b)

