import {call, put, takeLatest} from 'redux-saga/effects';
import {ASYNC_GET_LIBRARY, ASYNC_LOAD_MORE, ASYNC_MORE_ABOUT_BOOK} from "../store/types/libraryTypes";
import {get, getOneBook} from "../services/httpsServices";
import {
    getLibrary,
    loading,
    loadingError,
    loadingMore,
    loadMoreSuccess,
    requestParameters
} from "../store/actions/libraryAction";
import {clearBookInfo, successBookLoad} from "../store/actions/bookActions";

function* getBooksWorker(payload) {
    try {
        yield put(requestParameters(payload));
        yield put(loading());
        const response = yield call(get, payload);
        yield put(getLibrary(response));
        yield put(clearBookInfo());
    } catch (e) {
        yield put(loadingError(e))
    }
}

function* loadMore(payload) {
    try {
        console.log('loadMore',payload.payload);
        const nextReq = {...payload, payload: {...payload.payload, start: payload.payload.start + 30} };
        yield put(requestParameters(nextReq));
        yield put(loadingMore());
        const response = yield call(get, nextReq);
        yield put(loadMoreSuccess(response));
    } catch (e) {
        yield put(loadingError(e))
    }
}

function* moreAboutBook(payload) {
    try {
        const response = yield call(getOneBook, payload.payload);
        yield put(successBookLoad(response));
    } catch (e) {
        console.log('moreAboutBook', e);
    }
}

export function* booksWatcher() {
    yield takeLatest(ASYNC_GET_LIBRARY, getBooksWorker);
    yield takeLatest(ASYNC_LOAD_MORE, loadMore);
    yield takeLatest(ASYNC_MORE_ABOUT_BOOK, moreAboutBook);
}
