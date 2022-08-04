import { Navigate } from "react-router-dom";

function Detalle (){
    //let token = localStorage.getItem('token');
    let token = sessionStorage.getItem('token');

    return (
        <>
            { !token && <Navigate replace to="/" />}
                <h2>Detalle de la pelicula</h2>
        </>
    )
}

export default Detalle;