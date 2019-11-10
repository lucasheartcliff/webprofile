import React from 'react';

//import Button from './components/button/Button';
import Container from './components/container/Container';
import Navbar from './components/navbar/Navbar';
import Sidebar from './components/sidebar/Sidebar';

import backgroundMain from "./assets/images/backgroundMain.jpg";
import gelado from "./assets/images/gelado.jpg";

import Media from "./components/media/Media";
import Icon from './components/icons/IconButton';
import Grid from '@material-ui/core/Grid';

import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import GitHubIcon from '@material-ui/icons/GitHub';

import { connect } from 'react-redux';

const profileTwitter = "https://twitter.com/lucasheartcliff";
const profileFacebook = "https://facebook.com/lucasheartcliff";
const profileGithub = "https://github.com/lucasheartcliff";

const toggleTheme = (theme) => {
    if (theme === "light") {
        theme = "dark";
    } else {
        theme = "light";
    }
    return {
        type: "switchPrimaryTheme",
        theme: theme
    };
}

const background = {
    height: 300,
    display: "flex",
    filter: `blur(3px) brightness(85%)`
}

const App = ({ theme, dispatch }) => {
    const [state, setState] = React.useState({
        sidebar: false
    })

    const toggleSidebar = (status) => {
        setState({ ...state, sidebar: status });
    }
    const color = theme.primary.active === "light" ? "#eee" : "#333";
    return (
        <div style={{ backgroundColor: color}}>
            <Grid display={"flex"} direction={"column"} >
                <Navbar color={theme.primary.active}>
                    <Icon color={theme.primary.desactive} position={"left"} onClick={() => toggleSidebar(true)}>menu</Icon>
                    <Icon color={theme.primary.desactive} position={"right"} onClick={() => dispatch(toggleTheme(theme.primary.active))}>brightness_4</Icon>
                </Navbar>

                <Media
                    style={background}
                    image={backgroundMain}
                />

                <Sidebar color={theme.primary.active} anchor={"left"} open={state.sidebar} toggleSidebar={() => toggleSidebar()}>
                    <Icon color={theme.primary.desactive} position={"left"} onClick={() => toggleSidebar(false)}>menu</Icon>
                </Sidebar>

                <Container color={theme.primary.active}>
                    <Grid container justify={"center"}  alignItems={"center"} direction={"column"}>
                        
                            <Media
                                style={{ height: "150px", width: "150px", borderRadius: "150px", marginTop: "-80px", boxShadow: "0 10px 10px 0 rgba(153, 153, 153, 0.14), 0 6px 2px -4px rgba(153, 153, 153, 0.2), 0 2px 10px 0 rgba(153, 153, 153, 0.12)", }}
                                image={gelado}
                            />
                        
                        <Grid direction={"row"} justify={"space-around"}>
                            <Icon color="twitter" onClick={()=>{window.location.href = profileTwitter}}>
                                <TwitterIcon />
                            </Icon>

                            <Icon color="facebook" onClick={()=>{window.location.href = profileFacebook}}>
                                <FacebookIcon />
                            </Icon>

                            <Icon color="github" onClick={()=>{window.location.href = profileGithub}}>
                                <GitHubIcon />
                            </Icon>
                        </Grid>
                    </Grid>
                </Container>
            </Grid>
        </div>
    );
}

export default connect(state => ({ theme: state }))(App);