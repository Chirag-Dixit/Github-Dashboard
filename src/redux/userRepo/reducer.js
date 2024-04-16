import { SET_USER_NAME } from "./type"

const initialState = {
    userName: '', 
}

export const nameReducer = (state = initialState, action)=>{
    switch(action.type){
        case SET_USER_NAME: return{
            userName: action.payload,
        }

        default: return state
    }
}