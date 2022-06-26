import {
    GET_LIBRARY,
    LOADING_ERROR,
    LOADING_LIBRARY, LOADING_MORE_LIBRARY,
    REQUEST_PARAMETERS,
    SUCCESS_LOAD_MORE
} from "../types/libraryTypes";

const initialState = {
    books: [],
    totalItems: 0,
    loading: false,
    loadingMore: false,
    error: null,
    dataRequest: {term:'',category:'all',sort: 'relevance',start: 0},
};

export const libraryReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOADING_LIBRARY:
            return {
                ...state,
                loading: true,
            }
        case GET_LIBRARY:
            const data = action.payload;
            console.log(data);
            const totalItems = data.totalItems;
            const books = [];
            data.items.map(item => {
                const itemInfo = item.volumeInfo;
               books.push({
                  img: itemInfo.imageLinks?.thumbnail,
                   categories: itemInfo.categories,
                   title: itemInfo.title,
                   authors: itemInfo.authors,
                   link: item.selfLink,
               });
            });
            return {
                ...state,
                books: books,
                totalItems,
                loading: false,
                error: null,
            }
        case LOADING_ERROR:
            const error = action.payload;
            return {
                ...state,
                loading: false,
                error,
            }
        case REQUEST_PARAMETERS:
            return {
                ...state,
                dataRequest: action.payload.payload,
            }
        case SUCCESS_LOAD_MORE:
            const dataMore = action.payload;
            console.log(dataMore);
            const booksMore = [];
            dataMore.items.map(item => {
                const itemInfo = item.volumeInfo;
                booksMore.push({
                    img: itemInfo.imageLinks?.thumbnail,
                    categories: itemInfo.categories,
                    title: itemInfo.title,
                    authors: itemInfo.authors,
                    link: item.selfLink,
                });
            });
            return {
                ...state,
                books: [...state.books, ...booksMore],
                loadingMore: false,
                totalItems: dataMore.totalItems,
            }
        case LOADING_MORE_LIBRARY:
            return {
                ...state,
                loadingMore: true,
            }
        default:
            return state;
    }
}
