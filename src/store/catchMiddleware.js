import { applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { createPromise } from 'redux-promise-middleware';

const middlewares = [];

const isPromise = value => value && typeof value === 'object' && typeof value.then === 'function';
const catchMiddleware = () => next => action => {
    if(!isPromise(action.payload)) {
        next(action);
    } else {
        next(action).catch(error => {
            console.log('There is an error', error);
        });
    }
};

middlewares.push(catchMiddleware);
middlewares.push(createPromise({promiseTypeSuffixes: [
    'PENDING',
    'COMPLETED',
    'ERROR'
]}));
middlewares.push(thunk);

export default applyMiddleware(...middlewares);