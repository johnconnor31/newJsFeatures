export default () => next => action => {
    console.log('inside promise middleware with', action );
    if(typeof action.payload === 'object' && typeof action.payload.then === 'function') {
        console.log('It is a promise!');
        next({
            type: `${action.type}_PENDING`,
            payload: null
        })
        return action.payload.then(val => next({
            type: `${action.type}_COMPLETED`,
            payload: val
        }))
        .catch(err => next({
            type: `${action.type}_ERROR`,
            payload: err
        }));
} else {
    return next(action);
}
}