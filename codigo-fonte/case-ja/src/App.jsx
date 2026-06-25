import { useState } from 'react';
import Header from './components/Header.jsx';
import Home from './pages/Home.jsx';
import Fornecedores from './pages/Fornecedores.jsx';

function App() {
  const [page, setPage] = useState('home');

  return (
    <>
      <Header activePage={page} onNavigate={setPage} />
      <main>
        {page === 'home' ? (
          <Home onOpenFornecedores={() => setPage('fornecedores')} />
        ) : (
          <Fornecedores />
        )}
      </main>
    </>
  );
}

export default App;
