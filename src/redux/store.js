import { compose, legacy_createStore as createStore } from "@reduxjs/toolkit";
import rootReducer from "./rootReducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSTION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancers())

export default store