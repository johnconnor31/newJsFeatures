import { applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import promiseMiddleware from './promiseMiddleware';

const middlewares = [];

const isPromise = value => value && typeof value === 'object' && typeof value.then === 'function';
const catchMiddleware = () => next => action => {
    if(!isPromise(action.payload)) {
       return next(action);
    } else {
        return next(action).catch(error => {
            console.log('There is an error', error);
        });
    }
};

middlewares.push(catchMiddleware);
middlewares.push(promiseMiddleware);
middlewares.push(thunk);

export default applyMiddleware(...middlewares);