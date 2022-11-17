import type {PayloadAction} from "@reduxjs/toolkit"
import {createSlice} from "@reduxjs/toolkit"
import {RootState} from "../redux-store";


export type PizzaType = {
    pizzaId: number,
    id: number,
    imageUrl: string,
    title: string,
    type: string,
    size: number,
    price: number
    count: number
}

interface CartSliceState {
    pizzas: PizzaType[],
    totalPrice: number
}

const initialState: CartSliceState = {
    pizzas: [],
    totalPrice: 0
}

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addPizza: (state, action: PayloadAction<PizzaType>) => {
            const {pizzaId, type, size, price} = action.payload
            const findPizza = state.pizzas.find(el => el.pizzaId === pizzaId && el.size === size && el.type === type)
            if (findPizza) {
                findPizza.count++
            } else {
                state.pizzas.push({...action.payload, id: state.pizzas.length + 1, count: 1})
            }
            state.totalPrice += price
        },
        increaseItem: (state, action: PayloadAction<number>) => {
            const findPizza = state.pizzas.find(el => el.id === action.payload)
            if (findPizza) {
                findPizza.count++
                state.totalPrice += findPizza.price
            }
        },
        decreaseItem: (state, action: PayloadAction<number>) => {
            const findPizza = state.pizzas.find(el => el.id === action.payload)
            if (findPizza) {
                if (findPizza.count === 1) {
                    state.pizzas = state.pizzas.filter(el => el.id !== action.payload)
                    state.totalPrice -= findPizza.price
                } else {
                    findPizza.count--
                    state.totalPrice -= findPizza.price
                }
            }
        },
        removePizza: (state, action: PayloadAction<number>) => {
            const findPizza = state.pizzas.find(el => el.id === action.payload)
            if (findPizza) {
                state.totalPrice -= findPizza.price
                state.pizzas = state.pizzas.filter(el => el.id !== action.payload)
            }
        },
        emptyCart: (state) => {
            state.pizzas = []
            state.totalPrice = 0
        }

    },
})

export const CartSliceSelector = (state: RootState) => state.cartSlice
export const AddedPizzasSelector = (id: number, sizes: number[], currentSize: number, currentType: number, typeNames: string[]) => (state: RootState) => state.cartSlice.pizzas.find(el => el.pizzaId === id && el.type === typeNames[currentType] && el.size === sizes[currentSize])

export const {addPizza, removePizza, emptyCart, increaseItem, decreaseItem} = cartSlice.actions

export default cartSlice.reducer