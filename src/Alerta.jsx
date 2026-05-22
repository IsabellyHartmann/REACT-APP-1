function Alerta(props) {
    // Aqui usamos props.texto, enviada pelo componente App
    return (
        <div className={`alert alert-${ props.tipo } text-center`} role="alert">
            {props.texto}
        </div>
    );
}

export default Alerta;