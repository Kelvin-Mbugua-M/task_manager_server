import { configureStore } from "@reduxjs/toolkit"
import interfaceReducer from "./interfaceSlice"
import signReducer from "./signSlice"
import notificationReducer from "./notificationSlice"
const  Store = configureStore({
    reducer:{
        interface:interfaceReducer,
        userAuthCheck:signReducer,
        notification:notificationReducer,
        
    }
})
export default Store