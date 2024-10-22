import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    currentDisplay:'unread'
}
const notificationSlice = createSlice({
    name:'notification',
    initialState,
    reducers:{
        updateDisplay:(state,action)=>{
            state.unread = action.payload
        }
    }
})
export default notificationSlice.reducer
export const {updateDisplay} = notificationSlice.actions