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

export interface CartSliceState {
    pizzas: PizzaType[],
    totalPrice: number
}


export enum AscDesc {
    ASC = "asc",
    DESC = "desc"
}

export interface PageParamsSlice {
    searchValue: string,
    categoryTitles: string[],
    sortTitles: string[],
    currentPage: number,
    pageCount: number,
    categoryID: number,
    sortPopUpMode: boolean,
    sortPopUpIndex: number,
    ascDesc: AscDesc
}


export type PizzasTypes = {
    id: number,
    imageUrl: string,
    title: string,
    types: number[],
    sizes: number[],
    price: number
}

export interface PizzasSliceState {
    pizzas: PizzasTypes[]
}