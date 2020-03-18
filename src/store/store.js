import { createStore } from 'redux';
import formReducer from './formReducer';
import catchMiddleware from './catchMiddleware';


export default createStore(formReducer, catchMiddleware);