import axios from "axios";

const instance = axios.create({
  baseURL: "https://62b982ad41bf319d227e5acb.mockapi.io",
});


export const apiUrl = (params) => {
  const {currentPage, category, sortBy, ascDesc, search} = params
  return instance.get(`/items?page=${+currentPage + 1}&limit=4${category}&sortBy=${sortBy}&order=${ascDesc}${search}`)
}