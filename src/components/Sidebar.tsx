import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './_sidebar.scss';



function Sidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const location = useLocation();

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <aside className={`sidebar ${isCollapsed ? 'collapsed' : ''}`}>
      <div className="sidebar-header">
        <h2>{!isCollapsed && 'Menu'}</h2>
        <button className="toggle-btn" onClick={toggleSidebar}>☰</button>
      </div>
      <nav>
        <ul>
          <li className={location.pathname === '/' ? 'active' : ''}>
            <Link to="/"><span>📦</span>{!isCollapsed && 'Dashboard'}</Link>
          </li>
          <li className={location.pathname === '/produtos' ? 'active' : ''}>
            <Link to="/produtos"><span>🗂</span>{!isCollapsed && 'Produtos'}</Link>
          </li>
          <li className={location.pathname === '/cadastros' ? 'active' : ''}>
            <Link to="/cadastros"><span>📝</span>{!isCollapsed && 'Cadastros'}</Link>
          </li>
        </ul>
      </nav>
      <div className="sidebar-config">
        <Link to="/config"><span>⚙️</span>{!isCollapsed && 'Configurações'}</Link>
      </div>
    </aside>
  );
}

export default Sidebar;
