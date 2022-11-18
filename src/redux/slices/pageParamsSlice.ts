import type {PayloadAction} from "@reduxjs/toolkit"
import {createSlice} from "@reduxjs/toolkit"
import {RootState} from "../redux-store";
import {AscDesc, PageParamsSlice} from "./slicesTypes";


const initialState: PageParamsSlice = {
    searchValue: "",
    categoryTitles: ["Все", "Мясные", "Вегетарианская", "Гриль", "Острые", "Закрытые"],
    sortTitles: ["популярности", "цене", "алфавиту"],
    currentPage: 0,
    pageCount: 3,
    categoryID: 0,
    sortPopUpMode: false,
    sortPopUpIndex: 0,
    ascDesc: AscDesc.DESC
}

export const pageParamsSlice = createSlice({
    name: "pageParams",
    initialState,
    reducers: {
        setCategoryID: (state, action: PayloadAction<number>) => {
            state.categoryID = action.payload
        },
        setSortPopUpMode: (state, action: PayloadAction<boolean>) => {
            state.sortPopUpMode = action.payload
        },
        setSortPopUpIndex: (state, action: PayloadAction<number>) => {
            state.sortPopUpIndex = action.payload
        },
        setAscDesc: (state, action: PayloadAction<AscDesc>) => {
            state.ascDesc = action.payload
        },
        setCurrentPage: (state, action: PayloadAction<number>) => {
            state.currentPage = action.payload
        },
        setSearchValue: (state, action: PayloadAction<string>) => {
            state.searchValue = action.payload
        },
        setNavigationParams: (state, action: PayloadAction<PageParamsSlice>) => {
            state.categoryID = action.payload.categoryID
            state.sortPopUpIndex = action.payload.sortPopUpIndex
            state.ascDesc = action.payload.ascDesc
            state.currentPage = action.payload.currentPage
        }
    },
})

export const GetPageParamsSelector = (state: RootState) => state.pageParamsSlice

export const {
    setCategoryID,
    setSortPopUpMode,
    setSortPopUpIndex,
    setAscDesc,
    setCurrentPage,
    setSearchValue,
    setNavigationParams
} = pageParamsSlice.actions

export default pageParamsSlice.reducer