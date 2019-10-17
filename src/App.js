import React from 'react';

import Button from './components/button/Button';
import Container from './components/container/Container';
import Navbar from './components/navbar/Navbar';
import Sidebar from './components/sidebar/Sidebar';

import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import { connect } from 'react-redux';

const toggleTheme = (theme) =>{
  if(theme === "light"){
    theme = "dark";
  } else {
    theme = "light"
  }
  return{
    type: "switchPrimaryTheme",
    theme: theme
  }
}

function App({ theme, dispatch }) {
  const [state, setState] = React.useState({
    sidebar: false
  })

  const toggleSidebar = (status) => {
    setState({...state, sidebar: status});
  }

  return (
    <div>
      <Navbar color={theme.primary}>
        <IconButton edge="start">
          <MenuIcon onClick={()=>toggleSidebar(true)}/>
        </IconButton>
      </Navbar>
      
      <Sidebar color={theme.primary} anchor={"left"} open={state.sidebar} toggleSidebar={() =>toggleSidebar()}>
        <Button>Algo</Button>
      </Sidebar>
      <Container color={"light"}>
        <Button color={"royal"}>Boa Noite</Button><br />
        <Button color={"royal"} onClick={() => dispatch( toggleTheme(theme.primary) )}>Switch Theme</Button>
      </Container>
    </div>
  );
}

export default connect(state => ({ theme: state }))(App);
