import React, { useState } from 'react';
function tarefas() {
    // Estado único "formData" guarda todos os campos do formulário num objeto
    const [formData, setFormData] = useState({
        id: '',
        titulo: '',
        data: '',
        descricao: ''
    });
    const [Tarefas, setTarefas] = useState([]);

    const [dadosSubmetidos, setDadosSubmetidos] = useState(null);
    // Esta função é chamada quando o formulário é submetido
    function handleSubmit(e) {
        e.preventDefault(); // impede o recarregamento da página
        setDadosSubmetidos(formData); // guarda os dados preenchidos
    }
    // Limpa o formulário e os dados apresentados
    function limparFormulario() {
        setFormData({ id: '', titulo: '', data: '', descricao: '' });
        setDadosSubmetidos(null);
    }


    return (
        <div className="mt-6 row">
            <form onSubmit={handleSubmit}>
                {/* Cada campo é controlado — o valor vem do estado React */}
                <div className="form-group">
                    <label>Titulo</label>
                    <input type="text" className="form-control" value={formData.titulo} onChange={(e) =>

                        setFormData({ ...formData, titulo: e.target.value })} required />
                </div>
                <div className="form-group">
                    <label>Data</label>
                    <input type="date" className="form-control" value={formData.data} onChange={(e) =>

                        setFormData({ ...formData, data: e.target.value })} />
                </div>
                <div className="form-group">
                    <label>Descrição</label>
                    <textarea className="form-control" rows="3" value={formData.descricao} onChange={(e) =>

                        setFormData({ ...formData, descricao: e.target.value })}></textarea>
                </div>
                {/* setTarefas([...Tarefas, { ...formData, id: novoId }]); */}

                {/* Botões de ação */}
                <button className="btn btn-success mr-2">Enviar</button>

                <button type="button" className="btn btn-outline-secondary"

                    onClick={limparFormulario}>Limpar</button>
            </form>

            <div className="col-6">
                {dadosSubmetidos && (
                    <div className="card mt-4">
                        <div className="card-body">
                            <h5 className="card-title">Dados Recebidos</h5>
                            <p><strong>id:</strong> {dadosSubmetidos.id}</p>
                            <p><strong>Titulo:</strong> {dadosSubmetidos.titulo}</p>
                            <p><strong>Data:</strong> {dadosSubmetidos.data}</p>
                            <p><strong>Descrição:</strong> {dadosSubmetidos.descricao}</p>
                        </div>
                    </div>
                )}

            </div>

            <div className="col-4">
            </div>

        </div>
    );

}
export default tarefas;