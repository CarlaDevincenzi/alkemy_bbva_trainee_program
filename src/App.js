// Libraries
import {Routes, Route} from "react-router-dom";
//Components
import Login from './components/Login';
import Listado from './components/Listado';
import Detalle from './components/Detalle';
import Header from './components/Header';
import Footer from './components/Footer';
import Buscador from './components/Buscador';
import CountryList from "./components/CountryList";
// Styles
import './css/app.css';


function App() {
  return (
   <>          
      <Header />

      <div className="container mt-3 mb-5">  
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route path="/listado" element={<Listado />} />       
          <Route path="/detalle" element={<Detalle />} />       
          <Route path="/busqueda" element={<Buscador />} />       
          <Route path="/countrylist" element={<CountryList/>} />       
        </Routes>
      </div>

      <Footer />     
    </>           
  );
}

export default App;
