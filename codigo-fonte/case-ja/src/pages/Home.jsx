import FeatureCard from '../components/FeatureCard.jsx';
import '../styles/home.css';

function Home({ onOpenFornecedores }) {
  return (
    <div className="home-page">
      <section className="hero-section">
        <div className="hero-content">
          <p className="section-label">Case Já</p>
          <p className="hero-subtitle">Sistema de Organização de Casamentos</p>
          <h1>Organize cada detalhe do seu grande dia</h1>
          <p className="hero-text">
            O Case Já ajuda casais e organizadores a controlar fornecedores,
            tarefas e gastos de tudo que envolve o casamento em um único lugar.
          </p>
          <button className="primary-button" type="button" onClick={onOpenFornecedores}>
            Acessar fornecedores
          </button>
        </div>

        <div className="hero-panel" aria-label="Resumo do sistema">
          <div>
            <span>01</span>
            <strong>Fornecedores</strong>
            <p>Organize contatos, categorias e valores estimados.</p>
          </div>
          <div>
            <span>02</span>
            <strong>Tarefas</strong>
            <p>Prepare o espaço para acompanhar as próximas etapas.</p>
          </div>
          <div>
            <span>03</span>
            <strong>Gastos</strong>
            <p>Planeje o controle financeiro das próximas etapas.</p>
          </div>
        </div>
      </section>

      <FeatureCard
        title="Nesta etapa do projeto"
        highlight="Gerenciamento de Fornecedores"
        text="Aqui você poderá cadastrar, visualizar, editar e excluir fornecedores do seu casamento de forma simples e organizada."
      />
    </div>
  );
}

export default Home;
