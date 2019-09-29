import React from 'react';
import PropTypes from "prop-types";
import classNames from "classnames";

import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/styles';
import buttonStyle from './buttonsStyles';

const componentStyles = makeStyles(() => ({
    ...buttonStyle
}));

const CustomButton = (props) => {
    const {
        color,
        round,
        children,
        fullWidth,
        disabled,
        simple,
        size,
        block,
        link,
        justIcon,
        className,
        ...rest
    } = props;
    
    const classes = componentStyles();
    
    const btnClasses = classNames({
        [classes.button]: true,
        [classes[size]]: size,
        [classes[color]]: color,
        [classes.round]: round,
        [classes.fullWidth]: fullWidth,
        [classes.disabled]: disabled,
        [classes.simple]: simple,
        [classes.block]: block,
        [classes.link]: link,
        [classes.justIcon]: justIcon,
        [className]: className
    });

    return(
        <Button {...rest} className={btnClasses}>
            {children}
        </Button>
    )
};

CustomButton.propTypes = {
    color: PropTypes.oneOf([
        "royal",
        "info",
        "success",
        "warning",
        "danger",
        "rose",
        "white",
        "facebook",
        "twitter",
        "google",
        "github",
        "gitlab",
        "transparent"
    ]),
    size: PropTypes.oneOf(["sm", "lg"]),
    simple: PropTypes.bool,
    round: PropTypes.bool,
    fullWidth: PropTypes.bool,
    disabled: PropTypes.bool,
    block: PropTypes.bool,
    link: PropTypes.bool,
    justIcon: PropTypes.bool,
    children: PropTypes.node,
    className: PropTypes.string
};

export default CustomButton;