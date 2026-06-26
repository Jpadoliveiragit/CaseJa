import '../styles/fornecedores.css';

const fornecedores = [
  {
    nome: 'Buffet Sabor & Cia',
    categoria: 'Buffet',
    telefone: '(11) 98765-4321',
    valor: 'R$ 15.000,00'
  },
  {
    nome: 'Floricultura Florescer',
    categoria: 'Decoração',
    telefone: '(11) 99876-5432',
    valor: 'R$ 3.200,00'
  },
  {
    nome: 'Foto & Arte',
    categoria: 'Fotografia',
    telefone: '(11) 97654-3210',
    valor: 'R$ 4.800,00'
  },
  {
    nome: 'DJ Som Perfeito',
    categoria: 'Música',
    telefone: '(11) 96543-2109',
    valor: 'R$ 2.500,00'
  }
];

function Fornecedores() {
  return (
    <div className="fornecedores-page">
      <section className="page-title-area">
        <div>
          <p className="section-label">Gerenciamento</p>
          <h1>Fornecedores</h1>
          <p>Gerencie todos os fornecedores do seu casamento.</p>
        </div>
        <button className="primary-button" type="button">
          + Novo fornecedor
        </button>
      </section>

      <section className="table-card" aria-label="Tabela de fornecedores de exemplo">
        <div className="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>Nome</th>
                <th>Categoria</th>
                <th>Telefone</th>
                <th>Valor Estimado</th>
                <th>Ações</th>
              </tr>
            </thead>
            <tbody>
              {fornecedores.map((fornecedor) => (
                <tr key={fornecedor.nome}>
                  <td>{fornecedor.nome}</td>
                  <td>{fornecedor.categoria}</td>
                  <td>{fornecedor.telefone}</td>
                  <td>{fornecedor.valor}</td>
                  <td>
                    <div className="action-buttons">
                      <button className="icon-button edit" type="button" aria-label="Editar fornecedor">
                        Editar
                      </button>
                      <button className="icon-button delete" type="button" aria-label="Excluir fornecedor">
                        Excluir
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}

export default Fornecedores;
