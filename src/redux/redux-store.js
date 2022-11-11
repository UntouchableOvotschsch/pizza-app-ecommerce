import {configureStore} from '@reduxjs/toolkit'

import pageParamsSlice from './slices/pageParamsSlice'
import cartSlice from "./slices/cartSlice";
import pizzaSlice from "./slices/pizzaSlice";


const store = configureStore({
    reducer: {
        pageParamsSlice,
        cartSlice,
        pizzaSlice
    },
})

export default store