import swAlert from '@sweetalert/with-react';

function Buscador() {
const submitHandler = (e) => {
    e.preventDefault();
    const keyWord = e.currentTarget.keyWord.value;
    console.log(keyWord);

    if(keyWord.length === 0){
        swAlert(<h2>Tiene que ingresar al menos una palabra</h2>);
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
