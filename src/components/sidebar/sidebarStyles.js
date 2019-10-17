import { darkColor, lightColor } from '../../assets/jss/colors';

const sidebarWidth = 250;

const sidebarStyles = {
    sidebar: {
        width: sidebarWidth,
        flexShrink: 0,
    },
    sidebarPaper: {
        width: sidebarWidth,
    },
    sidebarHeader: {
        display: 'flex',
        alignItems: 'center',
        padding: '10px',
        justifyContent: 'flex-end',
    },

    light: {
        backgroundColor: lightColor
    },
    dark: {
        backgroundColor: darkColor
    }
}

export default sidebarStyles;