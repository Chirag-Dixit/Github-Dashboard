import { combineReducers } from "@reduxjs/toolkit";
import userReducer from "./SearchUsers/reducer";
import { urlReducer } from "./repos_url/reducer";
import { nameReducer } from "./userRepo/reducer";
import searchReducer from "./Search/reducer";

const rootReducer = combineReducers({
    searchUsers: userReducer,
    url: urlReducer,
    name: nameReducer,
    search: searchReducer
})

export default rootReducer