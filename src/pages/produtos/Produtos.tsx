import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Sidebar from '../../components/Sidebar';
import './_produtos.scss';

interface Produto {
  id: number;
  nome: string;
  quantidade: number;
  categoria: string;
  valor: number;
  status: 'Disponível' | 'Indisponível';
  data: string;
}

function Produtos() {
  const [produtos, setProdutos] = useState<Produto[]>([]);

  useEffect(() => {
    const mockProdutos: Produto[] = [
      {
        id: 1,
        nome: 'Mouse Gamer',
        quantidade: 50,
        categoria: 'Periféricos',
        valor: 120.00,
        status: 'Disponível',
        data: '2025-05-01'
      },
      {
        id: 2,
        nome: 'Teclado Mecânico',
        quantidade: 30,
        categoria: 'Periféricos',
        valor: 220.00,
        status: 'Disponível',
        data: '2025-05-03'
      },
      {
        id: 3,
        nome: 'HD Externo 1TB',
        quantidade: 0,
        categoria: 'Armazenamento',
        valor: 340.00,
        status: 'Indisponível',
        data: '2025-05-02'
      }
    ];

    setProdutos(mockProdutos);
  }, []);

  return (
    <div className="produtos-container">
      <Sidebar />
      <div className="produtos-main">
        <header className="produtos-header">
          <div className="logo">
            <Link to="/">Estoque Safe</Link>
          </div>
          <div className="user-info">
            <Link to="/conta" className="link-conta">👤 Conta</Link>
          </div>
        </header>

        <main className="produtos-content">
          <h2>Produtos</h2>
          <div className="produtos-table">
            <table>
              <thead>
                <tr>
                  <th>Produto</th>
                  <th>Quantidade</th>
                  <th>Categoria</th>
                  <th>Valor</th>
                  <th>ID</th>
                  <th>Status</th>
                  <th>Data</th>
                </tr>
              </thead>
              <tbody>
                {produtos.map(prod => (
                  <tr key={prod.id}>
                    <td>{prod.nome}</td>
                    <td>{prod.quantidade}</td>
                    <td>{prod.categoria}</td>
                    <td>R$ {prod.valor.toFixed(2)}</td>
                    <td>{prod.id}</td>
                    <td className={prod.status === 'Disponível' ? 'disponivel' : 'indisponivel'}>
                      {prod.status}
                    </td>
                    <td>{new Date(prod.data).toLocaleDateString()}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="actions">
            <Link to="/cadastros" className="btn-cadastrar">Cadastrar Produto</Link>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Produtos;
