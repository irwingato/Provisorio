import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Registro from './Registro'; // Importe a página de registro

const App = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleLogin = () => {
    // Lógica de autenticação aqui (pode ser implementada posteriormente)
    console.log('Username:', username);
    console.log('Password:', password);
  };

  return (
    <Router>
      <div className="App">
        <div className="login-container">
          <h1>Faça login</h1>
          <div className="form-group">
            <label htmlFor="username">Nome de usuário:</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={handleUsernameChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Senha:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={handlePasswordChange}
            />
          </div>
          <button onClick={handleLogin}>Entrar</button>
          <Link to="/registro">
            <button className="create-account-button">Criar uma nova conta</button>
          </Link>
        </div>
      </div>
      <Routes> {/* Envolve todas as rotas dentro de <Routes> */}
        <Route path="/registro" element={<Registro />} /> {/* Configura a rota para a página de registro */}
      </Routes>
    </Router>
  );
};

export default App;