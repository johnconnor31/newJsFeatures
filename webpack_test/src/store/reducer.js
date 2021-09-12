import { createStore, applyMiddleware } from 'redux';
const initState = {
    count: 0
};
function reducer (state = initState, action) {
    switch(action.type) {
        case 'INCREMENT': 
        return { count: state.count + 1};
        case 'DECREMENT': 
        return { count: state.count - 1};
        default: 
        return { ...state };
    }
}

export default createStore(reducer);