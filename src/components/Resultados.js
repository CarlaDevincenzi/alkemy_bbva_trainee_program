function Resultados(){

    let query = new URLSearchParams(window.location.search);
    let key_word = query.get('keyword');

    return(
        <>
            <h2>Esta es la seccion de resultados</h2>
            <p>vas a buscar '{key_word}'</p>
        </>
    )
}

export default Resultados;