import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link, useHistory } from 'react-router-dom';

const App = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory(); // Use o hook useHistory para a navegação

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleLogin = () => {
    // Autenticação lógica aqui (pode ser implementada posteriormente)
    console.log('Username:', username);
    console.log('Password:', password);
  };

  const handleCreateAccount = () => {
    history.push('/Registro'); // Use history.push para redirecionar
  };

  return (
    <Router>
      <div className="App">
        <div className="login-container">
          <h1>Faça login</h1>
          <div className="form-group">
            <label htmlFor="username">Nome de usuário:</label>
            <input type="text" id="username" value={username} onChange={handleUsernameChange} />
          </div>
          <div className="form-group">
            <label htmlFor="password">Senha:</label>
            <input type="password" id="password" value={password} onChange={handlePasswordChange} />
          </div>
          <button onClick={handleLogin}>Entrar</button>
          <button onClick={handleCreateAccount} className="create-account-button" style={{ marginLeft: '25px' }}>
            Criar conta
          </button>
        </div>
      </div>

      <Switch>
        <Route path="/Registro">
          {/* Seu conteúdo da página de registro aqui */}
          <h2>Página de Registro</h2>
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
