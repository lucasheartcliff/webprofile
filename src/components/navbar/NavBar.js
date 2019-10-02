import React from 'react';
import PropTypes from "prop-types";
import classNames from "classnames";

import AppBar from '@material-ui/core/AppBar';
import { makeStyles } from '@material-ui/styles';

const componentStyles = makeStyles({

});

const NavBar = (props) =>{
    const {
        color,
        position,
        children
    } = props;

    const classes = componentStyles();

    return(
        <AppBar {...props} className={classes}> 
            {children}
        </AppBar>
    )
}

NavBar.prototype = {
    color: PropTypes.oneOf([
        "royal",
        "info",
        "success",
        "warning",
        "danger",
        "rose",
        "dark",
        "light",
        "transparent"
    ]),
    position: PropTypes.string,
    className: PropTypes.string
};

export default NavBar;