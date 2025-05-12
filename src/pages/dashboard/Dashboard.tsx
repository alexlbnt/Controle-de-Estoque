import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './_dashboard.scss';
import Sidebar from '../../components/Sidebar';


interface OrcamentoFornecedor {
  orcamentoFornecedores_id: number;
  orcamento_id: number;
  fornecedor_id: number;
  data_envio: string;
  data_retorno: string | null;
  Nomefornecedos?: string;
}

function Dashboard() {
  const [orcamentos, setOrcamentos] = useState<OrcamentoFornecedor[]>([]);

  useEffect(() => {
    const mockData: OrcamentoFornecedor[] = [
      {
        orcamentoFornecedores_id: 1,
        orcamento_id: 101,
        fornecedor_id: 1,
        data_envio: '2025-04-01',
        data_retorno: null,
        Nomefornecedos: 'Fornecedor A',
      },
      {
        orcamentoFornecedores_id: 2,
        orcamento_id: 102,
        fornecedor_id: 2,
        data_envio: '2025-03-28',
        data_retorno: '2025-04-05',
        Nomefornecedos: 'Fornecedor B',
      },
      {
        orcamentoFornecedores_id: 3,
        orcamento_id: 103,
        fornecedor_id: 3,
        data_envio: '2025-04-02',
        data_retorno: null,
        Nomefornecedos: 'Fornecedor C',
      },
    ];

    setOrcamentos(mockData);
  }, []);

  const totalProdutos = 638;
  const entradaEstoque = 200;
  const saidaEstoque = 122;
  const valorTotal = 25600;

  return (
    <div className="dashboard-container">
      <Sidebar />

      <div className="dashboard-main">
        <header className="dashboard-header">
          <div className="logo">
            <Link to="/">Estoque Safe</Link>
          </div>
          <div className="user-info">
            <Link to="/conta" className="link-conta">👤 Conta</Link>
          </div>
        </header>

        <main className="dashboard-content">
          <h2>Dashboard</h2>
          <div className="cards">
            <div className="card"><span className="label">📦 Total de Produtos</span><strong>{totalProdutos}</strong></div>
            <div className="card"><span className="label">✅ Entrada de Estoque</span><strong>{entradaEstoque}</strong></div>
            <div className="card"><span className="label">🚫 Saída de Estoque</span><strong>{saidaEstoque}</strong></div>
            <div className="card"><span className="label">💰 Valor Total</span><strong>R$ {valorTotal}</strong></div>
          </div>

          <h2>Recentes</h2>
          <div className="orcamentos-table">
            <table>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Status</th>
                  <th>Data</th>
                  <th>Valor</th>
                  <th>Visualizar</th>
                </tr>
              </thead>
              <tbody>
                {orcamentos.map((orc) => (
                  <tr key={orc.orcamentoFornecedores_id}>
                    <td>{orc.orcamento_id}</td>
                    <td>{orc.data_retorno ? 'Finalizado' : 'Em Cotação'}</td>
                    <td>{new Date(orc.data_envio).toLocaleDateString()}</td>
                    <td>R$ {Math.floor(Math.random() * 500)}</td>
                    <td><button className="btn-view">🔍</button></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Dashboard;
