import { useEffect, useState } from "react";
import { useNavigate, Link, Navigate } from "react-router-dom";
import axios from 'axios';
import swAlert from '@sweetalert/with-react';

function Listado(){
    
    let token = localStorage.getItem("token");
    const [moviesList, setMoviesList] = useState([]);

    useEffect(() => {
      const  endPoint = 'https://api.themoviedb.org/3/discover/movie?api_key=f42cd7e77ee2958bbac0b48a6cbaaa7a&language=en-EN&page=1'       
      axios.get(endPoint)
            .then(response => {
                const apiData = response.data.results
                setMoviesList(apiData);
            })
            .catch(error => {
                swAlert(<h2>Hubo un error, intenta mas tarde</h2>);
            })
    }, [setMoviesList]);    
    
    console.log(moviesList);

    return(
        <>
            { ((!token)? <Navigate replace to="/" /> :        
                <div className="row">
                    {
                        moviesList.map((oneMovie, index) =>{
                            return (
                                <div className="col-3" key={index}>
                                    <div className="card my-4">
                                        <img src={`https://image.tmdb.org/t/p/w500${oneMovie.poster_path}`} className="card-img-top" alt="..." />
                                        <div className="card-body">
                                            <h5 className="card-title">{ oneMovie.title }</h5>
                                            <p className="card-text">{ oneMovie.overview.substring(0, 150) }...</p>                                             
                                            <Link to={"/"} className="btn btn-primary">Go somewhere</Link>                        
                                        </div>
                                    </div>
                                </div>      
                            )
                        })
                    }
                        
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