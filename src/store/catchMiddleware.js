import { createPromise } from 'redux-promise-middleware';
import thunk from 'redux-thunk';

const middlewares = [];

middlewares.push(() => next => action => {
    if(typeof action.payload === 'object' && typeof action.payload.then === 'function') {
        return next(action).catch(e => console.log('caught', e));
    } else {
        return next(action);
    }
});
middlewares.push(thunk)
middlewares.push(createPromise({
    promiseTypeSuffixes: ['PENDING', 'COMPLETED', 'ERROR']
}));
export default middlewares;