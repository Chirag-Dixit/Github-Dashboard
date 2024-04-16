import { SET_SEARCH } from "./type"

const initialState = {
    searchVal: ''
}

const searchReducer = (state = initialState, action)=>{
    switch(action.type){
        case SET_SEARCH: return{
            searchVal: action.payload
        }

        default: return state
    }
}

export default searchReducer