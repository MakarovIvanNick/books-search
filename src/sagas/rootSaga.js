import createSagaMiddleware from 'redux-saga';
import {all, spawn} from 'redux-saga/effects';
import {booksWatcher} from "./getBookSaga";

const saga = createSagaMiddleware();

export function* rootSaga() {
    const sagas = [booksWatcher];
    yield all(sagas.map(s => spawn(s)));
}

export default saga;
