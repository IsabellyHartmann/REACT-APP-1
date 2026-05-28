import React, { useState } from 'react';
import Alerta from './Alerta';

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
    const notasFinais = () => {
        return (formData.notaTestes * formData.percTestes / 100) + (formData.notaTrabalhos * formData.percTrabalhos / 100) + (formData.notaAtitudes * formData.percAtitudes / 100);
    };
    // Função para calcular a média das notas
    const mediaNotas = () => {
        const media = (formData.notaTestes + formData.notaTrabalhos + formData.notaAtitudes) / 3;
        return media >= 9.5 ? 'Aprovado' : 'Reprovado';
    };

    const limparFormulario = () => {
        setFormData({
            nomeAluno: '',
            disciplina: '',
            notaTestes: '',
            notaTrabalhos: '',
            notaAtitudes: '',
            percTestes: '',
            percTrabalhos: '',
            percAtitudes: '',
        });
        setDadosSubmetidos(null);
    };

    const validarFormulario = () => {
        const notaTestes = parseFloat(formData.notaTestes);
        const notaTrabalhos = parseFloat(formData.notaTrabalhos);
        const notaAtitudes = parseFloat(formData.notaAtitudes);
        const percTestes = parseFloat(formData.percTestes);
        const percTrabalhos = parseFloat(formData.percTrabalhos);
        const percAtitudes = parseFloat(formData.percAtitudes);

        if (
            [notaTestes, notaTrabalhos, notaAtitudes, percTestes, percTrabalhos, percAtitudes]
                .some(value => Number.isNaN(value))
        ) {
            alert('Por favor, preencha todos os campos numéricos.');
            return false;
        }

        if (
            notaTestes < 0 || notaTestes > 20 ||
            notaTrabalhos < 0 || notaTrabalhos > 20 ||
            notaAtitudes < 0 || notaAtitudes > 20
        ) {
            alert('As notas devem ser entre 0 e 20.');
            return false;
        }

        if (
            percTestes < 0 || percTestes > 100 ||
            percTrabalhos < 0 || percTrabalhos > 100 ||
            percAtitudes < 0 || percAtitudes > 100
        ) {
            alert('As percentagens devem ser entre 0 e 100.');
            return false;
        }

        if (percTestes + percTrabalhos + percAtitudes !== 100) {
            alert('A soma das percentagens deve ser igual a 100%.');
            return false;
        }

        return true;
    };

    const handleCalcular = () => {
        if (!validarFormulario()) {
            return;
        }

        setDadosSubmetidos({
            ...formData,
            notaFinal: notasFinais().toFixed(2),
            situacao: mediaNotas(),
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        handleCalcular();
    };

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
                        <input type="text" className="form-control" value={formData.nomeAluno} placeholder="Carlos Santos" onChange={(e) =>
                            setFormData({ ...formData, nomeAluno: e.target.value })} required />
                    </div>
                </div>

                <div className="col-4">
                    <div className="form-group">
                        <label>Disciplina</label>
                        <input type="text" className="form-control" value={formData.disciplina} placeholder="RC" onChange={(e) =>
                            setFormData({ ...formData, disciplina: e.target.value })} required />
                    </div>
                </div>

                <div className="col-3">
                    <div className="form-group">
                        <label>Nota dos Testes</label>
                        <input type="number" className="form-control" step="0.1" max="20" value={formData.notaTestes} placeholder="14" onChange={(e) =>
                            setFormData({ ...formData, notaTestes: e.target.value })} required />
                    </div>

                    <div className="form-group">
                        <label>Nota dos Trabalhos:</label>
                        <input type="number" className="form-control" step="0.1" max="20" value={formData.notaTrabalhos} placeholder="18" onChange={(e) =>
                            setFormData({ ...formData, notaTrabalhos: e.target.value })} required />
                    </div>

                    <div className="form-group">
                        <label>Nota das Atitudes:</label>
                        <input type="number" className="form-control" step="0.1" max="20" value={formData.notaAtitudes} placeholder="16" onChange={(e) =>
                            setFormData({ ...formData, notaAtitudes: e.target.value })} required />
                    </div>
                </div>

                <div className="col-3">
                    <div className="form-group">
                        <label>(%) Testes</label>
                        <input type="number" className="form-control" step="0.1" max="100" value={formData.percTestes} placeholder="40" onChange={(e) =>
                            setFormData({ ...formData, percTestes: e.target.value })} required />
                    </div>

                    <div className="form-group">
                        <label>(%) Trabalhos:</label>
                        <input type="number" className="form-control" step="0.1" max="100" value={formData.percTrabalhos} placeholder="40" onChange={(e) =>
                            setFormData({ ...formData, percTrabalhos: e.target.value })} required />
                    </div>

                    <div className="form-group">
                        <label>(%) Atitudes:</label>
                        <input type="number" className="form-control" step="0.1" max="100" value={formData.percAtitudes} placeholder="20" onChange={(e) =>
                            setFormData({ ...formData, percAtitudes: e.target.value })} required />
                    </div>
                </div>
                <div className="col-12 mt-4 d-flex gap-3">
                    <button type="button" onClick={handleCalcular} className="btn btn-primary">Calcular</button>
                    <button type="button" onClick={limparFormulario} className="btn btn-danger">Limpar</button>
                </div>
                <div className="col-12 mt-2">Por favor, preencha os campos e clique em calcular</div>
            </form>

            {dadosSubmetidos && (
                <div className="col-12 mt-4">
                    <h3>Resultado</h3>
                    <p>Aluno: {dadosSubmetidos.nomeAluno}</p>
                    <p>Disciplina: {dadosSubmetidos.disciplina}</p>
                    <p>Nota Final: {dadosSubmetidos.notaFinal}</p>
                    <p>Situação: {dadosSubmetidos.situacao}</p>
                </div>
            )}
        </div>
    );
}

export default Notas;
