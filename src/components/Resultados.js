import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useLocation } from 'react-router-dom';
import swAlert from '@sweetalert/with-react';
import '../css/miEstilo.css';

function Resultados(){

    let query = new URLSearchParams(window.location.search);
    let key_word = query.get('keyword');

    const location = useLocation();
    const [result, setResult] = useState(key_word);

    const [moviesResults, setMoviesResults] = useState([]);

    useEffect(() => {
        setResult(key_word);
    }, [location, key_word]);

    useEffect(() => {
        const endPoint = `https://api.themoviedb.org/3/search/movie?api_key=f42cd7e77ee2958bbac0b48a6cbaaa7a&language=es-ES&query=${key_word}`
                
        axios.get(endPoint)
            .then(response => {
                const moviesArray = response.data.results;
                if(moviesArray.length === 0){
                    swAlert(<h4>Tu busqueda no arrojo resultados</h4>)
                }

                setMoviesResults(moviesArray);                            
            })
            .catch(error => {
                console.log('Hubo un error, intenta mas tarde ' + error);
            })        
    }, [key_word]);

    

    return(
        <>
            <h2>Buscaste: <em>{result}</em> </h2>
            
            {moviesResults.length === 0 && <h3>No hay resultados</h3>}
            
            <div className="row">
                {
                    moviesResults.map((oneMovie, index) =>{
                        return (
                          <div className="col-4" key={index}>
                               <div className="card my-4">
                                    {/* Para que ponga una imagen cuando no hay poster */} 
                                    {(oneMovie.poster_path) ?
                                        <img src={`https://image.tmdb.org/t/p/w500${oneMovie.poster_path}`} className="card-img-top img-size" alt="..." /> :
                                        <img src="https://via.placeholder.com/600x400" className="card-img-top img-size" alt="..." />                                    
                                    }

                                   <div className="card-body">
                                        <h5 className="card-title">{ oneMovie.title }</h5>                                                                                    
                                        <Link to={`/detalle?movieID=${oneMovie.id}`} className="btn btn-primary">View detail</Link>                        
                                    </div>
                                </div>
                            </div>      
                        )
                    })
                }
                        
            </div>
        </>
    )
}

export default Resultados;