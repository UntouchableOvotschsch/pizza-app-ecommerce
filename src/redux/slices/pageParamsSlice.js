import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    searchValue: '',
    categoryTitles: ["Все", "Мясные", "Вегетарианская", "Гриль", "Острые", "Закрытые"],
    sortTitles: ["популярности", "цене", "алфавиту"],
    currentPage: 0,
    pageCount: 3,
    categoryID: 0,
    sortPopUpMode: false,
    sortPopUpIndex: 0,
    ascDesc: 'asc'
}

export const pageParamsSlice = createSlice({
    name: 'pageParams',
    initialState,
    reducers: {
        setCategoryID: (state, action) => {
            state.categoryID = action.payload
        },
        setSortPopUpMode: (state, action) => {
            state.sortPopUpMode = action.payload
        },
        setSortPopUpIndex: (state, action) => {
            state.sortPopUpIndex = action.payload
        },
        setAscDesc: (state, action) => {
            state.ascDesc = action.payload
        },
        setCurrentPage: (state, action) => {
            state.currentPage = action.payload
        },
        setSearchValue: (state, action) => {
            state.searchValue = action.payload
        },
        setNavigationParams: (state, action) => {
            state.categoryID = +action.payload.categoryID
            state.sortPopUpIndex = +action.payload.sortPopUpIndex
            state.ascDesc = action.payload.ascDesc
            state.currentPage = +action.payload.currentPage
        }
    },
})

export const { setCategoryID, setSortPopUpMode, setSortPopUpIndex, setAscDesc, setCurrentPage, setSearchValue, setNavigationParams } = pageParamsSlice.actions

export default pageParamsSlice.reducer