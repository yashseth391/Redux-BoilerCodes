import { createSlice } from "@reduxjs/toolkit";


const userSlice = createSlice({
    name: 'users',
    initialState: {
        user: [],
    },
    reducers: {  //actions Put  , here we get state and actions
        addUser: (state /*You get current state */, action) => {
            //state=[]
            state.user.push(action.payload)
        }
        ,
        updateUser: (state, action) => {
            state.user[action.payload.indedx] = action.payload.data
        }
        ,
        deleteUser: (state, action) => {
            state.user.splice(action.payload, 1)
        }


    }
})



export const { addUser, updateUser, deleteUser } = userSlice.actions;
export default userSlice.reducer;