import React, { useState } from 'react';

function Tarefas() {

    const [formData, setFormData] = useState({
        id: '',
        titulo: '',
        data: '',
        descricao: ''
    });
    
    const [tarefas, setTarefas] = useState([]);

    function handleSubmit(e) {
        e.preventDefault(); // impede o recarregamento da página
        //setDadosSubmetidos(formData); // guarda os dados preenchidos
    }

    function limparFormulario() {
        setFormData({ nome: '', email: '', telefone: '', morada: '', codigopostal: '', mensagem: '' });
        setDadosSubmetidos(null);
    }

    function newTarefa() {
        const novaTarefa = {
            id: Date.now(),
            titulo: `Tarefa ${tarefas.length + 1}`,
            data: new Date().toLocaleDateString(),
            descricao: 'Descrição da tarefa'
        };
        setTarefas([...tarefas, novaTarefa]);
    }

    return (
        <div className="mt-4 row">
            <div className="col-6">
                <form onSubmit={handleSubmit}>
                    
                    <button type="button" className="btn btn-outline-secondary"
                        onClick={newTarefa}>New</button>

                </form>
                
            </div>

            <div className="col-6">
                <ul className="list-group">
                    {tarefas.map(tarefa => (
                        <li key={tarefa.id} className="list-group-item">
                            <h5>{tarefa.titulo}</h5>
                            <p>{tarefa.data}</p>
                            <p>{tarefa.descricao}</p>
                        </li>
                    ))}
                </ul>

            </div>
        </div>
    );
}

export default Tarefas;