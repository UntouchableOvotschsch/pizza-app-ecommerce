import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {apiUrl} from "../../api/api";


export const fetchAllPizzas = createAsyncThunk(
  "pizza/fetchAllPizzas",
  async ({currentPage, category, sortBy, ascDesc, search}) => {
    const res = await apiUrl(currentPage, category, sortBy, ascDesc, search)
    return res.data
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
  }
})

export default pizzaSlice.reducer