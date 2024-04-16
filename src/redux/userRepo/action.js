import { SET_USER_NAME } from "./type"

export const setName = payload => {
    return{
        type: SET_USER_NAME,
        payload
    }
}