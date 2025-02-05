import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { API } from "../../api";

const initialState = {
    userData: null,
    isLoading: false,
    isSuccess: false,
    isError: false,
};

export const login = createAsyncThunk('login', async (params, thunkApi) => {
    console.log('Auth slice', params);
    try {
        const response = await API.post('/auth/login', params);
        console.log("auth slice response", response);
        return response.data;
    } catch (error) {
        console.log("auth slice error", error);
        return thunkApi.rejectWithValue(error.message); // Return a serializable error message
    }
});

const AuthSlice = createSlice({
    name: "authSlice",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        // login cases
        builder.addCase(login.pending, (state) => {
            state.isLoading = true;
            state.isError = false;
            state.errorMessage = null;
        });
        builder.addCase(login.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.userData = action.payload;
        });
        builder.addCase(login.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.errorMessage = action.payload; // Store the error message
        });
    }
});

export default AuthSlice.reducer;