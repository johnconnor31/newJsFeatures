import { createStore, applyMiddleware } from 'redux';
import formReducer from './formReducer';
import catchMiddleware from './catchMiddleware';


export default createStore(formReducer, applyMiddleware(...catchMiddleware));