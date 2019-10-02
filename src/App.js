import React from 'react';
import logo from './logo.svg';
import './App.css';

import Button from './components/button/Button';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Button color='danger'>
          Hello World
        </Button>
        <Button color='royal'>
          Hello World
        </Button>
        <Button color='info'>
          Hello World
        </Button>
        <Button color='warning'>
          Hello World
        </Button>
        <Button color='default'>
          Hello World
        </Button>
        <Button color='light'>
          Hello World
        </Button>
        <Button color='dark'>
          Hello World
        </Button>
        <Button color='success'>
          Hello World
        </Button>
        <Button color='rose'>
          Hello World
        </Button>
        <Button color='transparent'>
          Transparent
        </Button>
      </header>
    </div>
  );
}

export default App;
