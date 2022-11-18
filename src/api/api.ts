import axios from "axios";

const instance = axios.create({
    baseURL: "https://62b982ad41bf319d227e5acb.mockapi.io",
});

export type FetchParams = {
    currentPage: number,
    category: string,
    sortBy: string,
    ascDesc: string,
    search: string
}

export const apiUrl = (params: FetchParams) => {
    const {currentPage, category, sortBy, ascDesc, search} = params
    return instance.get(`/items?page=${+currentPage + 1}&limit=4${category}&sortBy=${sortBy}&order=${ascDesc}${search}`)
}