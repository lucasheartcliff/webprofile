import React from 'react';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import { makeStyles } from '@material-ui/core';

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
    },
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        ...theme.mixins.toolbar,
        justifyContent: 'flex-end',
    },
}))

const Sidebar = (props) => {
    const { children } = props;
    const classes = useStyles();

    return (
        <SwipeableDrawer open={true} variant="persistent" anchor="left" className={classes.drawer} classes={{paper: classes.drawerPaper}}>
            {children}
        </SwipeableDrawer>
    );
}

export default Sidebar;