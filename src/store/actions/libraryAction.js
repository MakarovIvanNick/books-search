import {
    ASYNC_GET_LIBRARY, ASYNC_LOAD_MORE, ASYNC_MORE_ABOUT_BOOK,
    GET_LIBRARY,
    LOADING_ERROR,
    LOADING_LIBRARY, LOADING_MORE_LIBRARY,
    REQUEST_PARAMETERS, SUCCESS_LOAD_MORE
} from "../types/libraryTypes";

export const getLibrary = payload => {
    return {
        type: GET_LIBRARY,
        payload,
    }
}

export const asyncGetLibrary = payload => {
    return {
        type: ASYNC_GET_LIBRARY,
        payload,
    }
}

export const loading = () => {
    return {
        type: LOADING_LIBRARY,
    }
}

export const loadingError = (payload) => {
    return {
        type: LOADING_ERROR,
        payload,
    }
}

export const requestParameters = (payload) => {
    return {
        type: REQUEST_PARAMETERS,
        payload,
    }
}

export const asyncLoadMore = payload => {
    return {
        type: ASYNC_LOAD_MORE,
        payload,
    }
}

export const loadMoreSuccess = payload => {
    return {
        type: SUCCESS_LOAD_MORE,
        payload,
    }
}

export const loadingMore = () => {
    return {
        type: LOADING_MORE_LIBRARY,
    }
}

export const asyncMoreAboutBook = payload => {
    return {
        type: ASYNC_MORE_ABOUT_BOOK,
        payload,
    }
}
