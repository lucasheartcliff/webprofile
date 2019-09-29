import React from 'react';
import logo from './logo.svg';
import './App.css';

import CustomButton from './components/button/Button';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <CustomButton type='' color='royal' >
          Hello World
        </CustomButton>
      </header>
    </div>
  );
}

export default App;
