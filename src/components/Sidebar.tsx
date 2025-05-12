import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './_sidebar.scss';
import Logo from '../assets/Logo-Branco.svg';

// Ícones Lucide
import {
  LayoutDashboard,
  Package,
  ClipboardList,
  Settings
} from 'lucide-react';

function Sidebar() {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const location = useLocation();

  const toggleSidebar = () => setIsCollapsed(!isCollapsed);

  return (
    <aside className={`sidebar ${isCollapsed ? 'collapsed' : ''}`}>
      <div className="sidebar-header">
        <img
          src={Logo}
          alt="Logo"
          className="sidebar-logo"
          onClick={toggleSidebar}
        />
        {!isCollapsed && <h2>Menu</h2>}
      </div>

      <nav>
        <ul>
          <li className={location.pathname === '/' ? 'active' : ''}>
            <Link to="/">
              <LayoutDashboard size={20} />
              {!isCollapsed && <span>Dashboard</span>}
            </Link>
          </li>
          <li className={location.pathname === '/produtos' ? 'active' : ''}>
            <Link to="/produtos">
              <Package size={20} />
              {!isCollapsed && <span>Produtos</span>}
            </Link>
          </li>
          <li className={location.pathname === '/cadastros' ? 'active' : ''}>
            <Link to="/cadastros">
              <ClipboardList size={20} />
              {!isCollapsed && <span>Cadastros</span>}
            </Link>
          </li>
        </ul>
      </nav>

      <div className="sidebar-config">
        <Link to="/config">
          <Settings size={20} />
          {!isCollapsed && <span>Configurações</span>}
        </Link>
      </div>
    </aside>
  );
}

export default Sidebar;
