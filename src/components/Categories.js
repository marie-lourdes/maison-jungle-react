import "../styles/Categories.css"

function Categories ({categoryActive, setCategoryActive, categories}) {
    return (
        <div className="select-category">
            <select value={categoryActive} onChange={handleCategory}>
                <option value="">---</option>
            
                {categories.map((cat) => (
	            <option key={cat} value={cat}>{cat}</option> // une clé unique crée avec la valeur de chaque categorie
))}

            </select>
            <button onClick={() => setCategoryActive('')}>Réinitialiser</button>
        </div>
    )

    function handleCategory(e){
        setCategoryActive(e.target.value)
    }
}

export default Categories

