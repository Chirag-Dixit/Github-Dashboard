import { SET_URL } from "./type"

export const setUrl = payload => {
    return{
        type: SET_URL,
        payload
    }
}