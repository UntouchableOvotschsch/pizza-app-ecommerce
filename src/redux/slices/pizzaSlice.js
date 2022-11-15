import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {apiUrl} from "../../api/api";


export const fetchAllPizzas = createAsyncThunk(
  "pizza/fetchAllPizzas",
  async (params, thunkAPI) => {
    try {
      const res = await apiUrl(params)
      return thunkAPI.fulfillWithValue(res.data)
    } catch (e) {
      return thunkAPI.rejectWithValue("Что то пошло не так: " + e.message)
    }
  }
)

const initialState = {
  pizzas: [],
}


export const pizzaSlice = createSlice({
  name: "pizza",
  initialState,
  extraReducers: {
    [fetchAllPizzas.fulfilled]: (state, action) => {
      state.pizzas = action.payload
    },
    [fetchAllPizzas.rejected]: (state, action) => {
      alert(action.payload)
    }
  }
})

export const GetPizzasSelector = state => state.pizzaSlice

export default pizzaSlice.reducer
