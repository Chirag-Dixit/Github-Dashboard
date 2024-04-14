import { SET_SEARCH_USERS } from "./type"

const initialState = {
    data: []
}

const userReducer = (state = initialState, action) => {
    switch(action.type){
        case SET_SEARCH_USERS: return{
            data: action.payload
        }

        default: return state
    }
}

export default userReducer