import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { API } from "../../api";


const initialState = {
    products: null,      //products changed
    isLoading: false,
    isSuccess: false,
    isError: false,
};


//All products
export const getAllProducts = createAsyncThunk('getAllProducts', async (params, thunkApi) => {

    try {
        const response = await API.get('/products/1', params);   //base url ke aage jo bhi endpoint hai wo likh do
        console.log("product slice response", response);
        return response.data;
    } catch (error) {
        console.log("product slice error", error);
        return thunkApi.rejectWithValue(error.message); // Return a serializable error message
    }
});

const ProductSlice = createSlice({
    name: "productSlice",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        // login cases
        builder.addCase(getAllProducts.pending, (state) => {
            state.isLoading = true;
            state.isError = false;
            state.errorMessage = null;
        });
        builder.addCase(getAllProducts.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.products = action.payload;    //changed to products
        });
        builder.addCase(getAllProducts.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.errorMessage = action.payload; // Store the error message
        });
    }
});

export default ProductSlice.reducer;