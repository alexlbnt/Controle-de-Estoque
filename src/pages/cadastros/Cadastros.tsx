import Sidebar from '../../components/Sidebar';
import './_cadastros.scss';
import { Link } from 'react-router-dom';

function Cadastros() {
  return (
    <div className="cadastros-container">
      <Sidebar />

      <div className="cadastros-main">
        <header className="cadastros-header">
          <div className="logo">
            <Link to="/">Estoque Safe</Link>
          </div>
          <div className="user-info">
            <Link to="/conta">👤 Conta</Link>
          </div>
        </header>

        <main className="cadastros-content">
          <h2>Cadastrar Produto</h2>
          <form className="cadastro-form">
            <div className="form-grid">
              <div className="form-group">
                <label>Produto:</label>
                <input type="text" />
              </div>
              <div className="form-group">
                <label>Categoria:</label>
                <input type="text" />
              </div>
              <div className="form-group">
                <label>Valor:</label>
                <input type="text" />
              </div>
              <div className="form-group">
                <label>ID:</label>
                <input type="text" />
              </div>
              <div className="form-group">
                <label>Quantidade:</label>
                <input type="text" />
              </div>
              <div className="form-group">
                <label>Data:</label>
                <input type="date" />
              </div>
              <div className="form-group full-width">
                <label>Status:</label>
                <input type="text" />
              </div>
            </div>

            <div className="form-actions">
              <button type="submit" className="btn cadastrar">Cadastrar</button>
              <button type="button" className="btn remover">Remover</button>
            </div>
          </form>
        </main>
      </div>
    </div>
  );
}

export default Cadastros;
