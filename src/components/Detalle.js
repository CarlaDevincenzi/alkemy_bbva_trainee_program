import { Navigate } from "react-router-dom";
import { useEffect, useState } from 'react';
import axios from 'axios';

function Detalle (){
    //let token = localStorage.getItem('token');
    let token = sessionStorage.getItem('token');
        
    let query = new URLSearchParams(window.location.search);
    let movieId = query.get('movieID');

    function dateAdapter(date){
        let newDate = date.split('-');
       return newDate[2] + '/' + newDate[1] + '/' + newDate[0];
    }

    const [movie, setMovie] = useState(null);

    useEffect(() => {
        const endPoint = `https://api.themoviedb.org/3/movie/${movieId}?api_key=f42cd7e77ee2958bbac0b48a6cbaaa7a&language=es-ES`
                
        axios.get(endPoint)
            .then(response => {
                const movieData = response.data;                
                let date = dateAdapter(movieData.release_date);
                setMovie({
                    ...movieData, 
                    release_date: date
                });                
                /* setMovie(movieData);
                movieData.release_date = date;  */  
                //console.log(movieData);             
            })
            .catch(error => {
                console.log('Hubo un error, intenta mas tarde ' + error);
            })        
    }, [movieId]);
    

    return (
        <>
            { !token && <Navigate replace to="/" />}
            { !movie && <h5>Cargando...</h5>}
            { movie && 
            <>
                <h2>{movie.title}</h2>
                <div className="row">
                    <div className="col-4">
                        <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} className="img-fluid" alt="movie poster" />
                    </div>
                    <div className="col-8">
                        <h5>Fecha de estreno: { movie.release_date }</h5>
                        <h5>Reseña: { movie.overview }</h5>
                        <p></p>
                        <h5>Rating: { movie.vote_average }</h5>
                        <h5>Generos: </h5>
                        <ul>
                            {movie.genres.map((oneGenre, id) => {
                                return (
                                <li>{ oneGenre.name }</li>);
                                })
                            }                       
                        </ul>
                    </div>
                </div>
            </>
            }
        </>
    )
}

export default Detalle;