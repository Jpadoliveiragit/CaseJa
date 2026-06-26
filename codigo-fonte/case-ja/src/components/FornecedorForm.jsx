import { useState } from 'react';

const categorias = [
  'Buffet',
  'Decoração',
  'Fotografia',
  'Música',
  'Doces',
  'Cerimonial',
  'Espaço',
  'Outros'
];

const dadosIniciais = {
  nome: '',
  categoria: '',
  telefone: '',
  valorEstimado: '',
  observacao: ''
};

function FornecedorForm({ fornecedor, onSalvar, onCancelar }) {
  const editando = Boolean(fornecedor);
  const [formulario, setFormulario] = useState(fornecedor || dadosIniciais);
  const [erro, setErro] = useState('');

  function atualizarCampo(event) {
    const { name, value } = event.target;
    setFormulario({
      ...formulario,
      [name]: value
    });
  }

  function enviarFormulario(event) {
    event.preventDefault();

    if (
      !formulario.nome.trim() ||
      !formulario.categoria ||
      !formulario.telefone.trim() ||
      !formulario.valorEstimado.trim()
    ) {
      setErro('Preencha todos os campos obrigatórios.');
      return;
    }

    onSalvar({
      nome: formulario.nome.trim(),
      categoria: formulario.categoria,
      telefone: formulario.telefone.trim(),
      valorEstimado: formulario.valorEstimado.trim(),
      observacao: formulario.observacao.trim()
    });
  }

  return (
    <div className="fornecedores-page">
      <section className="page-title-area">
        <div>
          <p className="section-label">{editando ? 'Atualização' : 'Novo cadastro'}</p>
          <h1>{editando ? 'Editar fornecedor' : 'Novo fornecedor'}</h1>
          <p>
            {editando
              ? 'Atualize as informações principais do fornecedor.'
              : 'Preencha as informações principais do fornecedor.'}
          </p>
        </div>
      </section>

      <form className="form-card" onSubmit={enviarFormulario}>
        {erro && <p className="form-error">{erro}</p>}

        <div className="form-grid">
          <label>
            Nome *
            <input
              type="text"
              name="nome"
              value={formulario.nome}
              onChange={atualizarCampo}
              placeholder="Ex: Buffet Sabor & Cia"
            />
          </label>

          <label>
            Categoria *
            <select name="categoria" value={formulario.categoria} onChange={atualizarCampo}>
              <option value="">Selecione uma categoria</option>
              {categorias.map((categoria) => (
                <option key={categoria} value={categoria}>
                  {categoria}
                </option>
              ))}
            </select>
          </label>

          <label>
            Telefone *
            <input
              type="text"
              name="telefone"
              value={formulario.telefone}
              onChange={atualizarCampo}
              placeholder="Ex: (11) 98765-4321"
            />
          </label>

          <label>
            Valor estimado *
            <input
              type="text"
              name="valorEstimado"
              value={formulario.valorEstimado}
              onChange={atualizarCampo}
              placeholder="Ex: R$ 5.000,00"
            />
          </label>
        </div>

        <label className="full-field">
          Observação
          <textarea
            name="observacao"
            value={formulario.observacao}
            onChange={atualizarCampo}
            placeholder="Anote detalhes importantes sobre esse fornecedor"
            rows="4"
          />
        </label>

        <div className="form-actions">
          <button className="secondary-button" type="button" onClick={onCancelar}>
            Cancelar
          </button>
          <button className="primary-button" type="submit">
            {editando ? 'Salvar alterações' : 'Salvar fornecedor'}
          </button>
        </div>
      </form>
    </div>
  );
}

export default FornecedorForm;
