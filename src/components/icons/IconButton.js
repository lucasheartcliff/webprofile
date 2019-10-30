import React from 'react';
//import Proptypes from 'prop-types';
import classNames from "classnames";

import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';

import { makeStyles } from '@material-ui/core';
import iconStyles from './iconStyles';

const componentStyles= makeStyles(()=>({
    ...iconStyles
}))


const CustomIcon = (props) =>{
    const {
        children,
        color,
        className
    } = props;

    const classes = componentStyles();

    const iconClasses = classNames({
        [classes.icon]: true,
        [classes[color]]: color,
        [className]: className
    });

    return (
        <IconButton {...props}>
            <Icon className={iconClasses}>{children}</Icon>
        </IconButton>
    )
}

export default CustomIcon;