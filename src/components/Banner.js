import "../styles/Banner.css"
import logo from "../assets/logo.png"// import declare la variable logo et importe la valeur de la variable en tant que fichier image
function Banner() {
    const title = "la maison jungle";
    // pas d espace en html
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
        </header>
        
        
    );

}

export default Banner;