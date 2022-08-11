import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import img_notFound from '../images/imagen-no-disponible.jpg'

function Favoritos(props) {
    const [favorites, setFavorites ] = useState([]);

    useEffect(() => {
        const favsInLocal = localStorage.getItem('favs');

        if(favsInLocal){
            const favsArray = JSON.parse(favsInLocal);
            console.log(favsArray);
            setFavorites(favsArray);
        }
    }, []);

    return( 
    <>
        <h2>Sección Favoritos</h2>
        <div className="row">
            {
               favorites.map((oneMovie, index) =>{
                        return (
                            <div className="col-3" key={index}>
                                <div className="card my-4">
                                    {/* Para que ponga una imagen cuando no hay poster */} 
                                    {(oneMovie.imgURL) ?
                                        <img src={oneMovie.imgURL} className="card-img-top img-size" alt="..." /> :
                                        <img src={img_notFound} className="card-img-top img-size" alt="..." />                                    
                                    }

                                    <button className="favourite-btn"
                                        onClick={props.addOrRemoveFromFavs}
                                        data-movie-id={oneMovie.id}
                                    > 🖤 </button>
                                    <div className="card-body">
                                        <h5 className="card-title">{ oneMovie.title }</h5>
                                        {/*<p className="card-text">{ oneMovie.overview.substring(0, 150) }...</p> */}                                            
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

export default Favoritos;