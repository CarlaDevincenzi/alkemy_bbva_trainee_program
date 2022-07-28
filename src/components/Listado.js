import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Listado(){
    
    const [activo, setActivo] = useState(false);
    const navigate = useNavigate();
    
    useEffect(() => {
        const token = localStorage.getItem("token");
        console.log(token);
        if(token === null){
            navigate('/');
        }
    }, []);    
    
    return(        
        <>        
            <h2>Soy el componente Listado</h2>
            <h2>Activo esta: {activo.toString()}</h2>
            <button onClick={() => setActivo(!activo)}>click</button>
            {activo && (<h2>ACTIVO</h2>)}
        </>
    );
}

export default Listado;
//<h2>{activo.valueOf().toString()}</h2>