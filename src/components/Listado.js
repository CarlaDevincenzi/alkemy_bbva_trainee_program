import { useEffect, useState } from "react";
import { useNavigate, Link, Navigate } from "react-router-dom";

function Listado(){    
    //const [activo, setActivo] = useState(false);
    
    let token = localStorage.getItem("token");

    //useEffect(() => {
      //  token = localStorage.getItem("token");       
   // }, []);    
    
    return(
        <>
            { ((!token)? <Navigate to="/" replace/> :        
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