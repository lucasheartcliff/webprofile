import React from 'react';
import PropTypes from "prop-types";
import classNames from "classnames";

import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import { makeStyles } from '@material-ui/core';
import sidebarStyles from './sidebarStyles';

const componentStyle = makeStyles(() => ({
    ...sidebarStyles
}))

const Sidebar = (props) => {
    const {
        color,
        anchor,
        children,
        open,
        toggleSidebar,
        className
    } = props;

    const classes = componentStyle();

    const sidebarClasses = classNames({
        [classes.sidebar]: true,
        [classes[color]]: color,
        [className]: className
    });

    return (
        <SwipeableDrawer open={open} onOpen={()=>toggleSidebar(true)} onClose={()=>toggleSidebar(false)} anchor={anchor} className={sidebarClasses} classes={{paper: sidebarClasses}}>
            {children}
        </SwipeableDrawer>
    );
}

Sidebar.prototype = {
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
    anchor: PropTypes.oneOf([
        "left",
        "right",
        "top",
        "bottom"
    ]),
    classNames: PropTypes.string,
    open: PropTypes.boolean
}

export default Sidebar;