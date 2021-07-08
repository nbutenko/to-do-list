import {applyMiddleware, createStore} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import taskList from "./reducers";

const store = createStore(
    taskList, composeWithDevTools(applyMiddleware())
)

export default store;