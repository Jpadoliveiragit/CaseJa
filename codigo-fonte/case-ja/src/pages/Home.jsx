import FeatureCard from '../components/FeatureCard.jsx';
import '../styles/home.css';

function Home({ onOpenFornecedores }) {
  return (
    <div className="home-page">
      <section className="hero-section">
        <div className="hero-content">
          <p className="section-label">Case Já</p>
          <h1>Organize cada detalhe do seu grande dia</h1>
          <p className="hero-text">
            O Case Já ajuda casais e organizadores a controlar fornecedores,
            tarefas e gastos de tudo que envolve o casamento em um único lugar.
          </p>
          <button className="primary-button" type="button" onClick={onOpenFornecedores}>
            Acessar fornecedores
          </button>
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
