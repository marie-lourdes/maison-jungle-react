

function Categories({categories,categoryActive, setCategory}){
 
   
  return (
    <div>
    <select value={categoryActive} onChange={ handleClickCategory}>
        <option value=''>---</option>
    {categories.map((cat) => (
        
        <option key={cat} value={cat} >{cat}</option>
       
    ))}
     </select>
     <button onClick={() => setCategory('')}>Réinitialiser</button>
     </div>
  )
  function handleClickCategory(e){

    setCategory(e.target.value)
  }

}

export default Categories