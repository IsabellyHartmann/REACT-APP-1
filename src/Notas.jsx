import React, { useState } from 'react';

function Notas() {

    const [formData, setFormData] = useState({
        nomeAluno: '',
        notaTeste: '',
        notaTrabalho: '',
        notaAtitudes: ''
    });

    const [tarefas, setTarefas] = useState([]);


    // Guarda os dados submetidos (para mostrar depois do envio)
    const [dadosSubmetidos, setDadosSubmetidos] = useState(null);

    // Esta função é chamada quando o formulário é submetido
    function handleSubmit(e) {
        e.preventDefault(); // impede o recarregamento da página
        setDadosSubmetidos(formData); // guarda os dados preenchidos


        return (
            // Este é o bootstrap 4
            <div className="mt-4 row">

            </div>
        );
    }


    const novaNotaAluno = {
        id: Date.now(),
        nome: formData.nomeAluno,
        notaTeste: formData.notaTeste,
        notaTrabalho: formData.notaTrabalho,
        notaAtitudes: formData.notaAtitudes
    };
    setTarefas([...tarefas, novaNotaAluno]);

    function newNotaAluno() {
        const novaNotaAluno = {
            id: Date.now(),
            nome: formData.nomeAluno,
            notaTeste: formData.notaTeste,
            notaTrabalho: formData.notaTrabalho,
            notaAtitudes: formData.notaAtitudes
        };
        setFormData(novaNotaAluno);
        setTarefas([...tarefas, novaNotaAluno]);
        setDadosSubmetidos(null);
    }
    // Limpa o formulário e os dados apresentados
    function limparFormulario() {
        setFormData({ id: '', nomeAluno: '', notaTeste: '', notaTrabalho: '', notaAtitudes: '' });
        setDadosSubmetidos(null);
    }
    function limparTarefas() {
        setTarefas([]);
    }

    return (
        <div className="mt-4 row">



            <div className="col-8">
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>Nome do Aluno</label>
                        <input type="text" className="form-control" value={formData.nomeAluno} onChange={(e) =>
                            setFormData({ ...formData, nomeAluno: e.target.value })} required />
                    </div>

                    <div className="form-group">
                        <label>(%)Nota do Teste</label>
                        <input type="number" className="form-control" value={formData.notaTeste} onChange={(e) =>
                            setFormData({ ...formData, notaTeste: e.target.value })} required />
                    </div>

                    <div className="form-group">
                        <label>(%)Nota do Trabalho</label>
                        <input type="number" className="form-control" value={formData.notaTrabalho} onChange={(e) =>
                            setFormData({ ...formData, notaTrabalho: e.target.value })} required />
                    </div>

                    <div className="form-group">
                        <label>(%)Nota das Atitudes</label>
                        <input type="number" className="form-control" value={formData.notaAtitudes} onChange={(e) =>
                            setFormData({ ...formData, notaAtitudes: e.target.value })} required />
                    </div>

                    {/* Botões de ação */}
                    <button className="btn btn-success mr-2">Enviar</button>

                    <button type="button" className="btn btn-outline-secondary"
                        onClick={limparFormulario}>Limpar</button>

                    <button type="button" className="btn btn-outline-secondary"
                        onClick={newNotaAluno}>Nova Nota</button>

                    <button type="button" className="btn btn-danger float-right"
                        onClick={limparTarefas}>Limpar Tarefas</button>

                </form>
            </div>





            <div className="col-6">
                {dadosSubmetidos && (
                    <div className="card mt-4">
                        <div className="card-body">
                            <h5 className="card-title">Dados Recebidos</h5>
                            <p><strong>Nome do Aluno:</strong> {dadosSubmetidos.nomeAluno}</p>
                            <p><strong>Nota do Teste:</strong> {dadosSubmetidos.notaTeste}</p>
                            <p><strong>Nota do Trabalho:</strong> {dadosSubmetidos.notaTrabalho}</p>
                            <p><strong>Nota das Atitudes:</strong> {dadosSubmetidos.notaAtitudes}</p>
                        </div>
                    </div>
                )}

                <ul className="list-group mt-4">
                    {tarefas.map(tarefa => (
                        <li key={tarefa.id} className="list-group-item">
                            <h5>{tarefa.nomeAluno}</h5>
                            <p>{tarefa.notaTeste}</p>
                            <p>{tarefa.notaTrabalho}</p>
                            <p>{tarefa.notaAtitudes}</p>
                        </li>
                    ))}
                </ul>
            </div>

        </div>
    );

}

export default Notas;
