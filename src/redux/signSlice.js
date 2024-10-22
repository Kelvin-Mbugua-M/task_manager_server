import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    userLoggedIn:false ,
}
const signSlice = createSlice({
    name:"userAuthCheck",
    initialState,
    reducers:{
        toggleLoggedInState:(state)=>{
            state.userLoggedIn = !state.userLoggedIn
        }
    }
})
export default signSlice.reducer
export const {toggleLoggedInState} = signSlice.actions