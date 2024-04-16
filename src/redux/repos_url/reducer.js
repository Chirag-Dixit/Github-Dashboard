import { SET_URL } from "./type"

const initialState = {
    url: '', 
}

export const urlReducer = (state = initialState, action)=>{
    switch(action.type){
        case SET_URL: return{
            url: action.payload,
        }

        default: return state
    }
}