import { Navigate } from "react-router-dom";
import { useEffect } from 'react';
import axios from 'axios';

function Detalle (){
    //let token = localStorage.getItem('token');
    let token = sessionStorage.getItem('token');
    
    let query = new URLSearchParams(window.location.search);
    let movieId = query.get('movieID');

    useEffect(() => {
        const endPoint = `https://api.themoviedb.org/3/movie/${movieId}?api_key=f42cd7e77ee2958bbac0b48a6cbaaa7a&language=en-US`
                
        axios.get(endPoint)
            .then(response => {
                const movieData = response.data;
                console.log(movieData);
            })
            .catch(error => {
                console.log('Hubo un error, intenta mas tarde');
            })        
    }, [movieId]);
    

    return (
        <>
            { !token && <Navigate replace to="/" />}
            <h2>Detalle de la pelicula</h2>
            <div className="row">
                <div className="col-4">
                    imagen
                </div>
                <div className="col-8">
                    <h5>Fecha de estreno: </h5>
                    <h5>Reseña: </h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
                       labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
                       laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in 
                       voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat 
                       non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    <h5>Generos: </h5>
                    <ul>
                        <li>Genero 1</li>
                        <li>Genero 2</li>
                        <li>Genero 3</li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Detalle;