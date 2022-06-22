import createSagaMiddleware from 'redux-saga';
import {all, spawn} from 'redux-saga/effects';

const saga = createSagaMiddleware();

export function* rootSaga() {
    const sagas = [];
    yield all(sagas.map(s => spawn(s)));
}

export default saga;
