import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {RootState} from "../redux-store";
import {apiUrl, FetchParams} from "../../api/api";
import {PizzasSliceState, PizzasTypes} from "./slicesTypes";


export const fetchAllPizzas = createAsyncThunk(
    "pizza/fetchAllPizzas",
    async (params: FetchParams, thunkAPI) => {
        try {
            const res = await apiUrl(params)
            return res.data as PizzasTypes[]
        } catch (e: any) {
            return thunkAPI.rejectWithValue("Что то пошло не так: " + e.message)
        }
    }
)


const initialState: PizzasSliceState = {
    pizzas: [],
}


export const pizzaSlice = createSlice({
    name: "pizza",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchAllPizzas.fulfilled, (state, action) => {
            state.pizzas = action.payload
        })
        builder.addCase(fetchAllPizzas.rejected, (state, action) => {
            alert(action.payload)
        })
    }
})

export const GetPizzasSelector = (state: RootState) => state.pizzaSlice

export default pizzaSlice.reducer
