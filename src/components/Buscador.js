import swAlert from '@sweetalert/with-react';
import { useNavigate } from 'react-router-dom';

function Buscador() {

    const navigate = useNavigate();

    const submitHandler = (e) => {
        e.preventDefault();
        const keyWord = e.currentTarget.keyWord.value.trim();
        console.log(keyWord);

        if(keyWord.length === 0){
            swAlert(<h5>Tiene que ingresar al menos una palabra</h5>);
        }else if(keyWord.length < 4){
            swAlert(<h5>Tiene que ingresar al menos 4 caracteres</h5>);
        }else{
            e.currentTarget.keyWord.value = '';
            navigate(`/resultados?keyword=${keyWord}`);
        }
    }

        return (
                <form className="d-flex align-items-center" onSubmit={submitHandler}>
                    <label className="form-label mb-0 mx-2">
                        <input className="form-control" type="text" name="keyWord" placeholder="Buscar..." />
                    </label>
                    <button className="btn btn-info" type="submit">Buscar</button>  
                </form>
        );    
    }

export default Buscador;
