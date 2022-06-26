import {CLEAR_BOOK_INFO, SUCCESS_BOOK_LOAD} from "../types/bookTypes";

export const successBookLoad = payload => {
    return {
        type: SUCCESS_BOOK_LOAD,
        payload,
    }
}

export const clearBookInfo = () => {
    return {
        type: CLEAR_BOOK_INFO,
    }
}
