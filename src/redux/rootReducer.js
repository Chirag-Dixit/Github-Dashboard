import { combineReducers } from "@reduxjs/toolkit";
import userReducer from "./SearchUsers/reducer";

const rootReducer = combineReducers({
    searchUsers: userReducer
})

export default rootReducer