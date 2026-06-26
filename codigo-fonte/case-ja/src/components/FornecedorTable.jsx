function FornecedorTable({ fornecedores, onEditar, onExcluir }) {
  if (fornecedores.length === 0) {
    return (
      <section className="empty-card">
        <p>Nenhum fornecedor cadastrado até o momento. Clique em “Novo fornecedor” para adicionar.</p>
      </section>
    );
  }

  return (
    <section className="table-card" aria-label="Tabela de fornecedores cadastrados">
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
              <tr key={fornecedor.id}>
                <td>{fornecedor.nome}</td>
                <td>{fornecedor.categoria}</td>
                <td>{fornecedor.telefone}</td>
                <td>{fornecedor.valorEstimado}</td>
                <td>
                  <div className="action-buttons">
                    <button
                      className="icon-button edit"
                      type="button"
                      aria-label="Editar fornecedor"
                      onClick={() => onEditar(fornecedor)}
                    >
                      Editar
                    </button>
                    <button
                      className="icon-button delete"
                      type="button"
                      aria-label="Excluir fornecedor"
                      onClick={() => onExcluir(fornecedor.id)}
                    >
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
  );
}

export default FornecedorTable;
