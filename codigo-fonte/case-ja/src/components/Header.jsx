import '../styles/header.css';

function Header({ activePage, onNavigate, onOpenFornecedores }) {
  return (
    <header className="app-header">
      <div className="header-content">
        <button className="logo-button" type="button" onClick={() => onNavigate('home')}>
          <span className="logo-text">Case Já</span>
          <span className="logo-subtitle">Sistema de Organização de Casamentos</span>
        </button>

        <nav className="main-menu" aria-label="Menu principal">
          <button
            className={activePage === 'home' ? 'menu-link active' : 'menu-link'}
            type="button"
            onClick={() => onNavigate('home')}
          >
            Início
          </button>
          <button
            className={activePage === 'fornecedores' ? 'menu-link active' : 'menu-link'}
            type="button"
            onClick={() => onNavigate('fornecedores')}
          >
            Fornecedores
          </button>
        </nav>

        {activePage === 'home' && (
          <button className="header-action" type="button" onClick={onOpenFornecedores}>
            Acessar fornecedores
          </button>
        )}
      </div>
    </header>
  );
}

export default Header;
