import {CLEAR_BOOK_INFO, SUCCESS_BOOK_LOAD} from "../types/bookTypes";

const initialState = {
    img: null,
    categories: null,
    title: null,
    authors: null,
    description: null,
};

export const bookReducer = (state = initialState, action) => {
    switch (action.type) {
        case CLEAR_BOOK_INFO:
            return {
                ...state,
                img: null,
                categories: null,
                title: null,
                authors: null,
                description: null,
            }
        case SUCCESS_BOOK_LOAD:
            console.log('bookReducer', action.payload);
            const bookInfo = action.payload.volumeInfo;
            return {
                ...state,
                img: bookInfo.imageLinks?.thumbnail,
                categories: bookInfo.categories,
                title: bookInfo.title,
                authors: bookInfo.authors,
                description: bookInfo.description,
            }
        default:
            return state
    }
}
