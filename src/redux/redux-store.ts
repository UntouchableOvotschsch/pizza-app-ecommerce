import {configureStore} from "@reduxjs/toolkit"
import {useDispatch} from "react-redux";

import pageParamsSlice from "./slices/pageParamsSlice"
import cartSlice from "./slices/cartSlice";
import pizzaSlice from "./slices/pizzaSlice";


const store = configureStore({
    reducer: {
        pageParamsSlice,
        cartSlice,
        pizzaSlice
    },
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()

export default store