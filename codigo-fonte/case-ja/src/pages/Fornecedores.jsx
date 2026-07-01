import { useEffect, useState } from 'react';
import FornecedorForm from '../components/FornecedorForm.jsx';
import FornecedorTable from '../components/FornecedorTable.jsx';
import '../styles/fornecedores.css';

const STORAGE_KEY = 'case-ja-fornecedores';

const fornecedoresExemplo = [
  {
    id: 1,
    nome: 'Buffet Sabor & Cia',
    categoria: 'Buffet',
    telefone: '(11) 98765-4321',
    valorEstimado: 'R$ 15.000,00',
    observacao: 'Opção para buffet completo da festa.'
  },
  {
    id: 2,
    nome: 'Floricultura Florescer',
    categoria: 'Decoração',
    telefone: '(11) 99876-5432',
    valorEstimado: 'R$ 3.200,00',
    observacao: 'Responsável por flores e arranjos.'
  },
  {
    id: 3,
    nome: 'Foto & Arte',
    categoria: 'Fotografia',
    telefone: '(11) 97654-3210',
    valorEstimado: 'R$ 4.800,00',
    observacao: 'Cobertura de cerimônia e recepção.'
  }
];

function Fornecedores() {
  const [fornecedores, setFornecedores] = useState([]);
  const [modoCadastro, setModoCadastro] = useState(false);
  const [fornecedorEmEdicao, setFornecedorEmEdicao] = useState(null);
  const [mensagem, setMensagem] = useState('');

  useEffect(() => {
    const fornecedoresSalvos = localStorage.getItem(STORAGE_KEY);

    if (fornecedoresSalvos) {
      try {
        setFornecedores(JSON.parse(fornecedoresSalvos));
      } catch {
        setFornecedores(fornecedoresExemplo);
        localStorage.setItem(STORAGE_KEY, JSON.stringify(fornecedoresExemplo));
      }
      return;
    }

    setFornecedores(fornecedoresExemplo);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(fornecedoresExemplo));
  }, []);

  function salvarFornecedor(dadosFornecedor) {
    const novoFornecedor = {
      id: Date.now(),
      ...dadosFornecedor
    };

    const listaAtualizada = [...fornecedores, novoFornecedor];
    setFornecedores(listaAtualizada);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(listaAtualizada));
    setModoCadastro(false);
    setMensagem('Fornecedor cadastrado com sucesso.');
  }

  function editarFornecedor(dadosFornecedor) {
    const listaAtualizada = fornecedores.map((fornecedor) => {
      if (fornecedor.id === fornecedorEmEdicao.id) {
        return {
          ...fornecedor,
          ...dadosFornecedor
        };
      }

      return fornecedor;
    });

    setFornecedores(listaAtualizada);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(listaAtualizada));
    setFornecedorEmEdicao(null);
    setMensagem('Fornecedor atualizado com sucesso.');
  }

  function abrirEdicao(fornecedor) {
    setFornecedorEmEdicao(fornecedor);
    setModoCadastro(false);
    setMensagem('');
  }

  function excluirFornecedor(id) {
    const confirmouExclusao = window.confirm('Deseja realmente excluir este fornecedor?');

    if (!confirmouExclusao) {
      return;
    }

    const listaAtualizada = fornecedores.filter((fornecedor) => fornecedor.id !== id);
    setFornecedores(listaAtualizada);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(listaAtualizada));
    setMensagem('Fornecedor excluído com sucesso.');
  }

  function cancelarFormulario() {
    setModoCadastro(false);
    setFornecedorEmEdicao(null);
  }

  if (fornecedorEmEdicao) {
    return (
      <FornecedorForm
        fornecedor={fornecedorEmEdicao}
        onSalvar={editarFornecedor}
        onCancelar={cancelarFormulario}
      />
    );
  }

  if (modoCadastro) {
    return (
      <FornecedorForm
        onSalvar={salvarFornecedor}
        onCancelar={cancelarFormulario}
      />
    );
  }

  return (
    <div className="fornecedores-page">
      <section className="page-title-area">
        <div>
          <p className="section-label">Gerenciamento</p>
          <h1>Fornecedores</h1>
          <p>Gerencie todos os fornecedores do seu casamento.</p>
        </div>
        <button className="primary-button" type="button" onClick={() => setModoCadastro(true)}>
          + Novo fornecedor
        </button>
      </section>

      {mensagem && <p className="feedback-message">{mensagem}</p>}

      <FornecedorTable
        fornecedores={fornecedores}
        onEditar={abrirEdicao}
        onExcluir={excluirFornecedor}
      />
    </div>
  );
}

export default Fornecedores;
