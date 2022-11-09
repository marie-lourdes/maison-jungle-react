function CareScale(props){
    const scaleValue = props.scaleValue
   
    const range = [1, 2, 3]

    return (
        <div>
            {range.map((rangeElem) =>
            /* si la valeur lumière de la propriété scaleValue est superieur ou egale à la donnée echelle du tableau,
         on génére un span soleil dans la div du composant, map itere sur chaque element du tableau range est execute le code de generation de span
          avec la condition ternaire */
                scaleValue >= rangeElem ? <span Key={rangeElem.toString()}>&#127774;</span> : null
            )}
        </div>
    )
}

export default CareScale;