import { useState, useEffect } from 'react';
import './_dashboard.scss';

interface OrcamentoFornecedor {
  orcamentoFornecedores_id: number;
  orcamento_id: number;
  fornecedor_id: number;
  data_envio: string;
  data_retorno: string | null;
  Nomefornecedos?: string;
}

function Dashboard() {
  const [orcamentosEnviados, setOrcamentosEnviados] = useState<OrcamentoFornecedor[]>([]);
  const [orcamentosRecebidos, setOrcamentosRecebidos] = useState<OrcamentoFornecedor[]>([]);
  const [activeTab, setActiveTab] = useState<'enviados' | 'recebidos'>('enviados');

  useEffect(() => {
    // Dados mockados
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
      {
        orcamentoFornecedores_id: 4,
        orcamento_id: 104,
        fornecedor_id: 4,
        data_envio: '2025-04-10',
        data_retorno: null,
        Nomefornecedos: 'Fornecedor A',
      }
    ];

    // Separar os dados mockados em enviados e recebidos
    const enviados = mockData.filter((orc) => orc.data_retorno === null);
    const recebidos = mockData.filter((orc) => orc.data_retorno !== null);

    setOrcamentosEnviados(enviados);
    setOrcamentosRecebidos(recebidos);
  }, []);

  return (
    <div className="dashboard-container">
      {/* Menu Lateral */}
      <aside className="dashboard-sidebar">
        <h2>CotaFênix</h2>
        <button className="btn-create">Criar Cotação</button>
        <nav>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/inserir-itens">Inserir Itens</a></li>
            <li><a href="/cadastrar-fornecedores">Cadastrar Fornecedores</a></li>
          </ul>
        </nav>
      </aside>

      {/* Conteúdo Principal */}
      <div className="dashboard-main">
        {/* Menu Superior */}
        <header className="dashboard-header">
          <h1>Dashboard</h1>
          <div className="user-info">
            <span>Gabriel</span>
            <button className="logout-btn">⎋</button>
          </div>
        </header>

        {/* Área Central */}
        <main className="dashboard-content">
          <div className="tabs">
            <button
              className={activeTab === 'enviados' ? 'active' : ''}
              onClick={() => setActiveTab('enviados')}
            >
              Orçamentos Enviados
            </button>
            <button
              className={activeTab === 'recebidos' ? 'active' : ''}
              onClick={() => setActiveTab('recebidos')}
            >
              Orçamentos Recebidos
            </button>
          </div>

          <div className="orcamentos-table">
            <table>
              <thead>
                <tr>
                  <th>Fornecedor</th>
                  <th>Data</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {activeTab === 'enviados' &&
                  orcamentosEnviados.map((orc) => (
                    <tr key={orc.orcamentoFornecedores_id}>
                      <td>{orc.Nomefornecedos || `Fornecedor ${orc.fornecedor_id}`}</td>
                      <td>{new Date(orc.data_envio).toLocaleDateString()}</td>
                      <td><span className="status status-enviado">Em Cotação</span></td>
                    </tr>
                  ))}

                {activeTab === 'recebidos' &&
                  orcamentosRecebidos.map((orc) => (
                    <tr key={orc.orcamentoFornecedores_id}>
                      <td>{orc.Nomefornecedos || `Fornecedor ${orc.fornecedor_id}`}</td>
                      <td>{new Date(orc.data_retorno!).toLocaleDateString()}</td>
                      <td><span className="status status-recebido">Finalizado</span></td>
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