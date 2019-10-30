import React from 'react';

import Button from './components/button/Button';
import Container from './components/container/Container';
import Navbar from './components/navbar/Navbar';
import Sidebar from './components/sidebar/Sidebar';
//import CardMedia from '@material-ui/core/CardMedia';
import backgroundMain from "./assets/images/backgroundMain.jpg";
import gelado from "./assets/images/gelado.jpg";

import Media from "./components/media/Media";
import Icon from './components/icons/IconButton';
import Grid from '@material-ui/core/Grid';
//import MenuIcon from '@material-ui/icons/Menu';

import { connect } from 'react-redux';

const toggleTheme = (theme) =>{
  if(theme === "light"){
    theme = "dark";
  } else {
    theme = "light";
  }
  return{
    type: "switchPrimaryTheme",
    theme: theme
  };
}

const background = {
  height:300,
  filter: `blur(3px) brightness(85%)`
}

function App({ theme, dispatch }) {
  const [state, setState] = React.useState({
    sidebar: false
  })

  const toggleSidebar = (status) => {
    setState({...state, sidebar: status});
  }
  const color = theme.primary.active === "light" ? "#eee" : "#333";
  return (
    <div style={{backgroundColor:color}}>
      <Navbar color={theme.primary.active}>
        <Icon color={theme.primary.desactive} position={"left"} onClick={()=>toggleSidebar(true)}>menu</Icon>
        <Icon color={theme.primary.desactive} position={"right"} onClick={() => dispatch( toggleTheme(theme.primary.active) )}>brightness_4</Icon>
      </Navbar>
      
      <Media
        style={background}
        image={backgroundMain}
      />

      <Sidebar color={theme.primary.active} anchor={"left"} open={state.sidebar} toggleSidebar={() =>toggleSidebar()}>
        <Button>Algo</Button>
      </Sidebar>
      <Container color={theme.primary.active}>
        <Grid container justify="center">
        <Media
          style={{height:"150px",width:"150px",borderRadius:"150px",marginTop:"-80px",boxShadow:"0 10px 10px 0 rgba(153, 153, 153, 0.14), 0 6px 2px -4px rgba(153, 153, 153, 0.2), 0 2px 10px 0 rgba(153, 153, 153, 0.12)",}}
          image={gelado}
        />
        </Grid>
      </Container>
      <br/><br/>
    </div>
  );
}

export default connect(state => ({ theme: state }))(App);