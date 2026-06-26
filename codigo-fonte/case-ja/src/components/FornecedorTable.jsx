function FornecedorTable({ fornecedores }) {
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
  );
}

export default FornecedorTable;
