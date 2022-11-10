import { configureStore } from '@reduxjs/toolkit'

import pageParamsSlice from './slices/pageParamsSlice'
import cartSlice from "./slices/cartSlice";


const store = configureStore({
    reducer: {
        pageParamsSlice,
        cartSlice,
    },
})

export default store