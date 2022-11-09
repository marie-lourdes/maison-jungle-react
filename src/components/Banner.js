import "../styles/Banner.css"
import logo from "../assets/logo.png"// import declare la variable logo et importe la valeur de la variable en tant que fichier image
function Banner() {
    const title = "la maison jungle";
    // pas d espace en html
    //le mois de janvier est 0
    const currentMonth = new Date().getMonth();
    // valeur booléenne pour la variable isSpring pour  evaluer la valeur avec les operateurs ternaires
    const isSpring = currentMonth >= 2 && currentMonth <= 5; 
    const recommandation = isSpring ? <div className="recommandation"> c'est le printemps, rempotez &#127793; </div> : <div className="recommandation"> ce n 'est pas le moment de rempoter</div>
    return(
        <header className="banner"> 
            <div className="banner__title">
                <div className="banner__img-logo">
                <img src={logo} alt="logo maison jungle"/>
                </div>
                <h1 style={{
                    margin:" 30% auto",
                    color:" white"
                    }}>
                {title}</h1>
            </div>
            {recommandation}
        </header>          
    );
}

export default Banner;