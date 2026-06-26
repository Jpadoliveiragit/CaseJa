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
    observacao: 'Fornecedor de exemplo.'
  },
  {
    id: 2,
    nome: 'Floricultura Florescer',
    categoria: 'Decoração',
    telefone: '(11) 99876-5432',
    valorEstimado: 'R$ 3.200,00',
    observacao: 'Fornecedor de exemplo.'
  },
  {
    id: 3,
    nome: 'Foto & Arte',
    categoria: 'Fotografia',
    telefone: '(11) 97654-3210',
    valorEstimado: 'R$ 4.800,00',
    observacao: 'Fornecedor de exemplo.'
  }
];

function Fornecedores() {
  const [fornecedores, setFornecedores] = useState([]);
  const [modoCadastro, setModoCadastro] = useState(false);

  useEffect(() => {
    const fornecedoresSalvos = localStorage.getItem(STORAGE_KEY);

    if (fornecedoresSalvos) {
      setFornecedores(JSON.parse(fornecedoresSalvos));
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
  }

  if (modoCadastro) {
    return (
      <FornecedorForm
        onSalvar={salvarFornecedor}
        onCancelar={() => setModoCadastro(false)}
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

      <FornecedorTable fornecedores={fornecedores} />
    </div>
  );
}

export default Fornecedores;
