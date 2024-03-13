import { applyMiddleware, combineReducers, compose, createStore } from "redux"
import thunk from "redux-thunk"
import { CategoryReducer } from "./Reducers/CategoryReducer"
import { ProductReducer } from "./Reducers/ProductReducer"
import { GallaryReducer } from "./Reducers/GalleryReducer"
import { LoginReducer } from "./Reducers/LoginReducer"


const initState = {
    Login:{
        token:localStorage.getItem("token") 
    }
}


const reducers = combineReducers({
    Category:CategoryReducer,
    Product:ProductReducer,
    Gallery:GallaryReducer,
    Login:LoginReducer

})

const store = createStore(reducers, initState, compose(applyMiddleware(thunk)))

export default store