import React, { useState } from 'react';

function Notas() {
    // Estado para armazenar os dados do formulário
    const [formData, setFormData] = useState({
        nomeAluno: '',
        disciplina: '',
        notaTestes: '',
        notaTrabalhos: '',
        notaAtitudes: '',

        percTestes: '',
        percTrabalhos: '',
        percAtitudes: '',

    });
    // Estado para armazenar os dados submetidos
    const [dadosSubmetidos, setDadosSubmetidos] = useState(null);

    // Função para calcular a nota final
    function notasFinais() {
        notasFinais = (formData.notaTestes * formData.percTestes / 100) + (formData.notaTrabalhos * formData.percTrabalhos / 100) + (formData.notaAtitudes * formData.percAtitudes / 100);
    }
    // Função para calcular a média das notas
    function mediaNotas() {
        mediaNotas = (formData.notaTestes + formData.notaTrabalhos + formData.notaAtitudes) / 3;
        if (mediaNotas >= 9.5) {
            return 'Aprovado';
        } else {
            return 'Reprovado';
        }
    }
    // Função para limpar o formulário
    function limparFormulario() {
        setFormData({ nomeAluno: '', disciplina: '', notaTestes: '', percTrabalhos: '', percAtitudes: '' });
    }
    // Função para lidar com o envio do formulário
    function handleSubmit(e) {
        e.preventDefault(); // impede o recarregamento da página
        //setDadosSubmetidos(formData); // guarda os dados preenchidos
    }

   /* function mostrarDados() {
        if(parseFloat(formData.notaTestes) > 20 || parseFloat(formData.notaTrabalhos) > 20 || parseFloat(formData.notaAtitudes) > 20) {
            alert('As notas devem ser entre 0 e 20.');
            return;
        }else if(parseFloat(formData.percTestes) > 100 || parseFloat(formData.percTrabalhos) > 100 || parseFloat(formData.percAtitudes) > 100) {
            alert('As percentagens devem ser entre 0 e 100.');
            return;
        }else if(parseFloat(formData.percTestes) + parseFloat(formData.percTrabalhos) + parseFloat(formData.percAtitudes) !== 100) {
            alert('A soma das percentagens deve ser igual a 100%.');
            return;
        }   else {
            setDadosSubmetidos(formData);
        }*/



    return (
        <div className="mt-4 row">

            <div className="w-100">
                <h1>Cálculo da nota final</h1>
                <h2>Dados do Aluno</h2>
            </div>

            <form className="col-12 row">
                <div className="col-8">
                    <div className="form-group">
                        <label>Nome do Aluno</label>
                        <input type="text" className="form-control" value={formData.nomeAluno} onChange={(e) =>
                            setFormData({ ...formData, nomeAluno: e.target.value })} required />
                    </div>
                </div>

                <div className="col-4">
                    <div className="form-group">
                        <label>Disciplina</label>
                        <input type="text" className="form-control" value={formData.disciplina} onChange={(e) =>
                            setFormData({ ...formData, disciplina: e.target.value })} required />
                    </div>
                </div>

                <div className="col-3">
                    <div className="form-group">
                        <label>Nota dos Testes</label>
                        <input type="number" className="form-control" step="0.1" max="20" value={formData.notaTestes} onChange={(e) =>
                            setFormData({ ...formData, notaTestes: e.target.value })} required />
                    </div>

                    <div className="form-group">
                        <label>Nota dos Trabalhos:</label>
                        <input type="number" className="form-control" step="0.1" max="20" value={formData.notaTrabalhos} onChange={(e) =>
                            setFormData({ ...formData, notaTrabalhos: e.target.value })} required />
                    </div>

                    <div className="form-group">
                        <label>Nota das Atitudes:</label>
                        <input type="number" className="form-control" step="0.1" max="20" value={formData.notaAtitudes} onChange={(e) =>
                            setFormData({ ...formData, notaAtitudes: e.target.value })} required />
                    </div>
                </div>

                <div className="col-3">
                    <div className="form-group">
                        <label>(%) Testes</label>
                        <input type="number" className="form-control" step="0.1" max="100" value={formData.percTestes} onChange={(e) =>
                            setFormData({ ...formData, percTestes: e.target.value })} required />
                    </div>

                    <div className="form-group">
                        <label>(%) Trabalhos:</label>
                        <input type="number" className="form-control" step="0.1" max="100" value={formData.percTrabalhos} onChange={(e) =>
                            setFormData({ ...formData, percTrabalhos: e.target.value })} required />
                    </div>

                    <div className="form-group">
                        <label>(%) Atitudes:</label>
                        <input type="number" className="form-control" step="0.1" max="100" value={formData.percAtitudes} onChange={(e) =>
                            setFormData({ ...formData, percAtitudes: e.target.value })} required />
                    </div>
                </div>

            </form>

            <div className="col-12 mt-4">
                <button className="btn btn-primary d-block mx-left">Calcular Nota Final</button>

            </div>

            <div className="col-12 mt-4">
                <button className="btn btn-primary d-block mx-left">Limpar</button>
            </div>


        </div>
    );
}


export default Notas;
