import React from 'react';
import PropTypes from "prop-types";
import classNames from "classnames";

import { makeStyles } from '@material-ui/styles';
import Container from '@material-ui/core/Container';
import containerStyles from './containerStyle';

const componentStyles = makeStyles(() => ({    
    ...containerStyles   
}))

const CustomContainer = (props) =>{
    const {
        color,
        children,
        className
    } = props;

    const classes = componentStyles();

    const containerClasses = classNames({
        [classes.container]: true,
        [classes[color]]: color,
        [className]: className
    });

    return(
        <Container {...props} className={containerClasses}>
            {children}
        </Container>
    );
}

CustomContainer.propTypes = {
    color: PropTypes.oneOf([
        "dark",
        "light"
    ]),
    fixed: PropTypes.bool,
    maxWidthXs: PropTypes.oneOf(["xs"]),
    maxWidthSm: PropTypes.oneOf(["sm"]),
    maxWidthMd: PropTypes.oneOf(["md"]),
    maxWidthLg: PropTypes.oneOf(["lg"]),
    maxWidthXl: PropTypes.oneOf(["xl"]),
    children: PropTypes.node,
    className: PropTypes.string
};

export default CustomContainer;