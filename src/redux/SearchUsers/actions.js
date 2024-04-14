import { SET_SEARCH_USERS } from "./type"

export const setSearchUsers = payload => {
    return{
        type: SET_SEARCH_USERS,
        payload
    }
}
