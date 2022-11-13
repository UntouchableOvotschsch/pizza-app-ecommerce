import {createSlice} from "@reduxjs/toolkit"

const initialState = {
  pizzas: [],
  totalPrice: 0

}

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addPizza: (state, action) => {
      const {pizzaId, type, size, price} = action.payload
      const findPizza = state.pizzas.find(el => el.pizzaId === pizzaId && el.size === size && el.type === type)
      if (findPizza) {
        findPizza.count++
      } else {
        state.pizzas.push({...action.payload, id: state.pizzas.length + 1, count: 1})
      }
      state.totalPrice += price
    },
    increaseItem: (state, action) => {
      const findPizza = state.pizzas.find(el => el.id === action.payload)
      findPizza.count++
      state.totalPrice += findPizza.price
    },
    decreaseItem: (state, action) => {
      const findPizza = state.pizzas.find(el => el.id === action.payload)
      if (findPizza.count === 1) {
        state.pizzas = state.pizzas.filter(el => el.id !== action.payload)
        state.totalPrice -= findPizza.price
      } else {
        findPizza.count--
        state.totalPrice -= findPizza.price
      }

    },
    removePizza: (state, action) => {
      const findPizza = state.pizzas.find(el => el.id === action.payload)
      state.totalPrice -= findPizza.price
      state.pizzas = state.pizzas.filter(el => el.id !== action.payload)

    },
    emptyCart: (state) => {
      state.pizzas = []
      state.totalPrice = 0
    }

  },
})

export const {addPizza, removePizza, emptyCart, increaseItem, decreaseItem} = cartSlice.actions

export default cartSlice.reducer