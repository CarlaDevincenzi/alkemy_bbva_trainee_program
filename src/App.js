// Libraries
import {Routes, Route} from "react-router-dom";
import { useEffect, useState } from "react";
//Components
import Login from './components/Login';
import Listado from './components/Listado';
import Detalle from './components/Detalle';
import Header from './components/Header';
import Footer from './components/Footer';
import Resultados from './components/Resultados';
import Favoritos from './components/Favoritos';

import CountryList from "./components/CountryList";
// Styles
import './css/app.css';


function App() { 
  
  const [favorites, setFavorites ] = useState([]);

    useEffect(() => {
        const favsInLocal = localStorage.getItem('favs');

        if(favsInLocal){
            const favsArray = JSON.parse(favsInLocal);            
            setFavorites(favsArray);
        }
    }, []);

  const addOrRemoveFromFavs = (e) => {
    const favMovies = localStorage.getItem('favs');
    let tempMovieInFavs;

    if (!favMovies){
      tempMovieInFavs = [];
    }else{
      tempMovieInFavs = JSON.parse(favMovies);
    }
    
    const btn = e.currentTarget;
    const parent = btn.parentElement;
    const imgURL = parent.querySelector('img').getAttribute('src');
    const title = parent.querySelector('h5').innerText;
    //const overview = parent.querySelector('p').innerText;
    
    const movieData = {
      imgURL, title,
      // overview,
      id: btn.dataset.movieId
    }
    
    let movieIsInArray = tempMovieInFavs.find(oneMovie => {
        return oneMovie.id === movieData.id;
    });
    
    if(!movieIsInArray){
      tempMovieInFavs.push(movieData);
      localStorage.setItem('favs', JSON.stringify(tempMovieInFavs));
      setFavorites(tempMovieInFavs);
      console.log('se agrego la pelicula');
    }else{ // aca elimina la pelicula si ya estaba guardada
      let moviesLeft = tempMovieInFavs.filter(oneMovie => {
          return oneMovie.id !== movieData.id;
      });
      
      localStorage.setItem('favs', JSON.stringify(moviesLeft));
      setFavorites(moviesLeft);
      console.log('se elimino la pelicula');
    }
  }

  return (
   <>          
      <Header favorites={favorites}/>

      <div className="container mt-3 mb-5">  
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route path="/listado" element={<Listado addOrRemoveFromFavs={addOrRemoveFromFavs}/>} />       
          <Route path="/detalle" element={<Detalle />} />       
          <Route path="/resultados" element={<Resultados  addOrRemoveFromFavs={addOrRemoveFromFavs}/>} />       
          <Route path="/favoritos" element={<Favoritos favorites={favorites} addOrRemoveFromFavs={addOrRemoveFromFavs}/>} />       
          <Route path="/countrylist" element={<CountryList/>} />       
        </Routes>
      </div>

      <Footer />     
    </>           
  );
}

export default App;
