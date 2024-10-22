import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    dimension:true,    
}
const interfaceSlice = createSlice({
    name:"interface",
    initialState,
    reducers:{
        changeInterfaceState:(state)=>{
            state.dimension = !state.dimension
        }
    }
})
export default interfaceSlice.reducer
export const {changeInterfaceState } = interfaceSlice.actions