import axios from 'axios';
import swAlert from '@sweetalert/with-react';
import { useNavigate, Navigate } from "react-router-dom";

function Login(){

    const navigate = useNavigate();    

    const submitHandler = e =>{
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        const regexEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        
        if(email === '' || password === ''){
            swAlert(<h2>Los campos no pueden estar vacios</h2>);            
            return;
        }

        if(email !== '' && !regexEmail.test(email)){
            swAlert(<h2>Debes escribir una direccion de correo valida</h2>);             
            return;
        }

        if(email !== "challenge@alkemy.org" || password !== "react"){
            swAlert(<h2>Credenciales invalidas</h2>);            
            return;
        }
                
        axios
            .post("http://challenge-react.alkemy.org", {email, password})
            .then(res =>{
                swAlert(<h2>Perfecto, ingresaste correctamente</h2>);                
                const info_token = res.data.token;
                //localStorage.setItem("token", info_token);
                sessionStorage.setItem("token", info_token);
                navigate("/listado");                
            })
    }

    //let token = localStorage.getItem("token");
    let token = sessionStorage.getItem("token");

    return(
        <>
            { token && <Navigate replace to="/listado" /> }

            <div className="row">
                <div className="col-6 offset-3">
                    <h2>Formulario de Login</h2>
                    <form onSubmit={submitHandler}>
                        <label className="form-label d-block mt-2">
                            <span>Correo electronico</span> <br />
                            <input className="form-control" type="text" name="email" />
                        </label>
                        <br />
                        <label className="form-label d-block mt-2">
                            <span>Contraseña</span> <br />
                            <input className="form-control" type="password" name="password" />
                        </label>                        
                        <button className="btn btn-info mt-2" type="submit">Ingresar</button>  
                </form>
                </div>
            </div>
        </>
    ); 
}

export default Login;