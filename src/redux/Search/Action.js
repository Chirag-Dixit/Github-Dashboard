import { SET_SEARCH } from "./type"

export const setSearch = payload => {
    return{
        type: SET_SEARCH, 
        payload
    }
}