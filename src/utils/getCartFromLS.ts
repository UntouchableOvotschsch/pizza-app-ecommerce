import {CartSliceState} from "../redux/slices/slicesTypes";

export const getCartFromLS = () => {
    const data = localStorage.getItem("cart_items")
    const emptyData = {pizzas: [], totalPrice: 0}
    return data ? JSON.parse(data) as CartSliceState : emptyData
}