import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Dashboard from './pages/dashboard/Dashboard';
import Produtos from './pages/produtos/Produtos';
import Login from './pages/login/Login';
import Cadastros from './pages/cadastros/Cadastros';
import Conta from './pages/conta/Conta';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/dashboard" />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/produtos" element={<Produtos />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastros" element={<Cadastros />} />
        <Route path="/conta" element={<Conta />} />
      </Routes>
    </Router>
  );
};

export default App;
