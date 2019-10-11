import React from 'react';
import logo from './logo.svg';
import './App.css';

import Button from './components/button/Button';
import Container from './components/container/Container';
import Navbar from './components/navbar/Navbar';

import IconButton from '@material-ui/core/IconButton';
//import MenuIcon from '@material-ui/icons/Menu';

function App() {
  return (
    <div className="App">
      <header className="">
        <img src={logo} className="App-logo" alt="logo" />
        <Navbar color="light">
          <IconButton>
            
          </IconButton>
          <Button color="rose">Something</Button>
        </Navbar>
        <Container color={"dark"}>
          <Button color={"royal"}>Boa Noite</Button><br/>
          <Button color={"light"}>Rapeize</Button>
        </Container>
      </header>
    </div>
  );
}

export default App;
