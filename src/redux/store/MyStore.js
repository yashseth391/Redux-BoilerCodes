import { configureStore } from "@reduxjs/toolkit";
import { UserReducer } from "../slice/UserSlice";



const myStore = configureStore({
    reducer: UserReducer
})


export default myStore;