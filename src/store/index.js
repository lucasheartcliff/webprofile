import { createStore } from 'redux';

const initialState = {
    primary: {
        active: "light",
        desactive: "dark"
    },
    secondary:"royal"
}

const reducer = (state = initialState, action) => {
    console.log(action)
    if(action.theme === "light"){
        return{
            ...state,
            primary: {
                active:"light",
                desactive:"dark"
            }
        };
    } else if(action.theme === "dark") {
        return{
            ...state,
            primary: {
                active:"dark",
                desactive:"light"
            }
        };
    }

    return state;
}

const store = createStore(reducer);

export default store;