import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    Value: 0,
}



const counterSlice = createSlice({
    name: 'counterSlice',
    initialState  // if initialState is InitialState  ,, then initialState: InitialState
    ,//actions
    reducers: {
        increament: (state) => {
            state.Value += 1
        },
        decreament: (state) => {
            state.Value -= 1
        },
        increamentByAmount: (state, actions) => {
            state.Value = actions.payload;
        }

    }
})


export const { increament, decreament, increamentByAmount } = counterSlice.actions;

export default counterSlice.reducer;