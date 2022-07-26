import { Link } from "react-router-dom";
import Buscador from "./Buscador";

function Header(props) {    
    return (        
        <header>
            <nav className="navbar navbar-dark navbar-expand-lg bg-dark">
                <div className="container-fluid">
                    <Link className="navbar-brand" to={"#"}>Alkemy</Link>
                    <Buscador /> 
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                     
                    <div className="collapse navbar-collapse" id="navbarNav">
                    
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to={"#"}>Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" to={"/listado"}>Listado</Link>
                            </li> 
                            <li className="nav-item">
                                <Link className="nav-link active" to={"/favoritos"}>Favoritos</Link>
                            </li>
                            <li className="nav-item d-flex align-items-center">
                                <span className="text-success">
                                    { props.favorites.length > 0 && <>Peliculas en Favoritos: {props.favorites.length}</> }
                                </span>
                            </li>           
                        </ul>                                               
                    </div> 
                                     
                </div>                
            </nav>                       
        </header>
    );
}

export default Header;

/**<nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/listado">Listado</Link>
                    </li>
                    <li>
                        <Link to="/contacto">Contacto</Link>
                    </li>                    
                </ul>
            </nav> */