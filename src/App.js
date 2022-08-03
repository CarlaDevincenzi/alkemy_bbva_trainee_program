// Libraries
import {Routes, Route} from "react-router-dom";
//Components
import Login from './components/Login';
import Listado from './components/Listado';
import Header from './components/Header';
import Footer from './components/Footer';
// Styles


import './css/app.css';


function App() {
  return (
   <>          
      <Header />

      <div className="container mt-3 mb-5">  
        <Routes>
          <Route exact path="/" element={<Login/>} />
          <Route path="/listado" element={<Listado/>} />       
        </Routes>
      </div>

      <Footer />     
    </>           
  );
}

export default App;
