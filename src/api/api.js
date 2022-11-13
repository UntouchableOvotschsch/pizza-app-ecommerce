import axios from "axios";

const instance = axios.create({
  baseURL: "https://62b982ad41bf319d227e5acb.mockapi.io",
});


export const apiUrl = (currentPage, category, sortBy, ascDesc, search) => {
  return instance.get(`/items?page=${+currentPage + 1}&limit=4${category}&sortBy=${sortBy}&order=${ascDesc}${search}`)
}