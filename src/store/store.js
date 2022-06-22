import {applyMiddleware, combineReducers, createStore} from "redux";
import saga, {rootSaga} from "../sagas/rootSaga";


const rootReducer = combineReducers({

})

const store = createStore(rootReducer, applyMiddleware(saga));
saga.run(rootSaga);
export default store;
