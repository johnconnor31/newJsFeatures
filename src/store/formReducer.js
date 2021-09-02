const initialState = {
    textVal: '',
    error: null,
    pendingSubmit: false,
    submitResponse: null
}

export const formReducer =  (state=initialState, action) => {
    console.log('action', action.type);
    switch (action.type) {
        case 'CHANGE_TEXT':
            return {
                ...state, 
                textVal: action.payload
            };
        case 'SUBMIT_PENDING':
        return {
            ...state, 
            pendingSubmit: true
        };
        case 'SUBMIT_COMPLETED':
        return {
            ...state, 
            pendingSubmit: false,
            submitResponse: action.payload
        };
        case 'SUBMIT_ERROR':
        return {
            ...state, 
            pendingSubmit: false,
            submitResponse: action.payload
        };
        case 'TEXT_ERROR':
        return {
            ...state, 
            error: action.payload
        };
        default:
            break;
    }
};

export default formReducer;
