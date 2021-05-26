import React from 'react';
import './App.css';


import Routes from './routes'

function App() {
  return (
    <div className="container">
      <div className="logo">Dextra<span>Burger</span></div>

      <div className="content">
        <div className="redirect">
          <div className="icon-menu-list">
            <i class="fa fa-clone" aria-hidden="true"></i>
          </div>
          <div className="icon-itens-adicionais">
            <i class="fa fa-folder-o" aria-hidden="true"></i>
          </div>
          <div className="icon-menu">
            <i class="fa fa-user-o" aria-hidden="true"></i>
          </div>
      </div>
      <Routes />
      </div>
    </div>
  );
}

export default App;
