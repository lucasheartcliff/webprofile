import { createStore } from 'redux';

const initialState = {
    primary: "light",
    secondary:"royal"
}

const reducer = (state = initialState, action) => {
    console.log(action);
    if(action.theme === "light"){
        return{
            ...state,
            primary: "light"
        };
    } else if(action.theme === "dark") {
        return{
            ...state,
            primary: "dark"
        }
    }

    return state;
}

const store = createStore(reducer);

export default store;