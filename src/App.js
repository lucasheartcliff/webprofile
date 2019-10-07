import React from 'react';
import logo from './logo.svg';
import './App.css';

import Button from './components/button/Button';
import Container from './components/container/Container';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Container color={"dark"}>
          <Button color={"royal"}>Boa Noite</Button><br/>
          <Button color={"light"}>Rapeize</Button>
        </Container>
      </header>
    </div>
  );
}

export default App;
