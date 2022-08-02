import { useEffect, useState } from "react";
import { useNavigate, Link, Navigate } from "react-router-dom";
import axios from 'axios';

function Listado(){
    
    let token = localStorage.getItem("token");
    const [moviesList, setMoviesList] = useState([]);

    useEffect(() => {
      const  endPoint = 'https://api.themoviedb.org/3/discover/movie?api_key=f42cd7e77ee2958bbac0b48a6cbaaa7a&language=es-ES&page=1'       
      axios.get(endPoint)
            .then(response => {
                const apiData = response.data.results
                setMoviesList(apiData);
      });
    }, [setMoviesList]);    
    
    console.log(moviesList);

    return(
        <>
            { ((!token)? <Navigate replace to="/" /> :        
                <div className="row">
                    <div className="col-3">
                        <div className="card">
                            <img src="..." className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Movie Title</h5>
                                <p className="card-text">Movie Review: Some quick example text to build on the card title and make up the bulk of the card's content.</p>                                             
                                <Link to={"/"} className="btn btn-primary">Go somewhere</Link>                        
                            </div>
                        </div>
                    </div>          
                </div>
            )}   
        </>            
    );
}

export default Listado;

/**
 *  <h2>Soy el componente Listado</h2>
    <h2>Activo esta: {activo.toString()}</h2>
    <button onClick={() => setActivo(!activo)}>click</button>
    {activo && (<h2>ACTIVO</h2>)} */