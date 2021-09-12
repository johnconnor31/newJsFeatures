import { createStore, applyMiddleware } from 'redux';
import createSaga from 'redux-saga';
import { put, takeEvery } from 'redux-saga/effects';
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
const delay = (delay) => new Promise(res => setTimeout(res, delay));
function* asyncSaga () {
    yield delay(1000);
    yield put({ type: 'INCREMENT' });
}

function* watchSaga() {
    yield takeEvery('INCREMENT_ASYNC', asyncSaga);
}
const saga = createSaga();
export default createStore(reducer, applyMiddleware(saga));
saga.run(watchSaga);