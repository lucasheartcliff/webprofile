import React from 'react';
//import PropTypes from "prop-types";
//import classNames from "classnames";

import CardMedia from '@material-ui/core/CardMedia';
//import { makeStyles } from '@material-ui/core';
//import mediaStyles from './mediaStyles';

/*const componentStyles = makeStyles(() => ({
    ...mediaStyles
}))
*/
const Media = (props) =>{
    const{
        children,
        image,
        src
    } = props;

    //const classes = componentStyles();

    return(
        <CardMedia {...props} src={src} image={image}>
            {children}
        </CardMedia>
    );
}

export default Media;