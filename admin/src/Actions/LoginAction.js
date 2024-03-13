import apiHelper from "../Commen/ApiHelper"
import { LOGIN_ERROR, LOGIN_LOADING, LOGIN_SUCCESS } from "../Commen/Constents"

export const LoginAction = (payload) => async(dispatch, getState) => {
    try {
        dispatch({type:LOGIN_LOADING})
        const {data} = await apiHelper.login(payload)
        localStorage.setItem("token", data.token)
        dispatch({type:LOGIN_SUCCESS, payload:data.token})
    } catch (error) {
        dispatch({type:LOGIN_ERROR,payload:error.message})
    }
}


