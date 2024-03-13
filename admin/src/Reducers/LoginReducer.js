import { LOGIN_ERROR, LOGIN_LOADING, LOGIN_SUCCESS } from "../Commen/Constents";

export const LoginReducer = (state = { loading: false, error: "",token:"" }, action) => {
    switch (action.type) {
        case LOGIN_LOADING:
            return { ...state, loading: true };
        case LOGIN_SUCCESS:
            return { ...state, loading: false,token:action.payload }
        case LOGIN_ERROR:
            return { ...state, error: action.payload }
        default:
            return state
    }
}