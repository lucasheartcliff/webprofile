import { lightColor, darkColor } from '../../assets/jss/colors';

const navbarStyles = {
    navbar:{
        display:"flex",
        flexGrow:1,
        boxShadow: "0 14px 26px -12px rgba(205, 205, 205, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(255, 255, 255, 0.2)"
    },
    light:{
        backgroundColor: lightColor,
        boxShadow:
            "0 14px 26px -12px rgba(205, 205, 205, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(255, 255, 255, 0.2)"
    },
    dark:{
        backgroundColor: darkColor,
        boxShadow:
            "0 14px 26px -12px rgba(51, 51, 51, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(51, 51, 51, 0.2)"
    },
}

export default navbarStyles;