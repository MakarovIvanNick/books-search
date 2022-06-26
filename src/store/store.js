import {applyMiddleware, combineReducers, createStore} from "redux";
import saga, {rootSaga} from "../sagas/rootSaga";
import {libraryReducer} from "./reducers/libraryReducer";
import {bookReducer} from "./reducers/bookReducer";

const rootReducer = combineReducers({
    getLibrary: libraryReducer,
    getBook: bookReducer,
})

const store = createStore(rootReducer, applyMiddleware(saga));
saga.run(rootSaga);
export default store;
