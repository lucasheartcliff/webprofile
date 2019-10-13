import React from 'react';
import PropTypes from "prop-types";
import classNames from "classnames";

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

import { makeStyles } from '@material-ui/styles';

import navbarStyles from './navbarStyles'

const componentStyles = makeStyles((theme)=> ({
    ...navbarStyles
}));

const Navbar = (props) =>{
    const {
        color,
        position,
        children,
        className
    } = props;

    const classes = componentStyles();

    const navbarClasses = classNames({
        [classes.navbar]: true,
        [classes[color]]: color,
        [classes[position]]:position,
        [className]: className
    });

    return(
        <AppBar {...props} className={navbarClasses}> 
            <Toolbar>
                {children}
            </Toolbar>
        </AppBar>
    )
}

Navbar.prototype = {
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

export default Navbar;