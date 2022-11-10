import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux'
import axios from "axios";
import { useSearchParams } from "react-router-dom";

import { setNavigationParams } from "../redux/slices/pageParamsSlice"

import Categories from "../components/Categories";
import SortPopUp from "../components/SortPopUp";
import PizzaBlock from "../components/PizzaBlock";
import PizzaBlockSkeleton from "../components/Skeletons/PizzaBlockSkeleton";
import PaginationBlock from "../components/PaginationBlock";



const Home = () => {
    const [pizzas, setPizzas] = useState([])
    const [loading, setLoading] = useState(false)


    let [searchParams, setSearchParams] = useSearchParams();
    const dispatch = useDispatch()

    const {
        categoryID,
        sortPopUpMode,
        sortPopUpIndex,
        ascDesc,
        categoryTitles,
        sortTitles,
        currentPage,
        pageCount,
        searchValue } = useSelector((state) => state.pageParamsSlice)

    useEffect(() => {
        dispatch(setNavigationParams({
            categoryID: searchParams.get('categoryID') || categoryID,
            sortPopUpIndex: searchParams.get('sortPopUpIndex') || sortPopUpIndex,
            ascDesc: searchParams.get('ascDesc') || ascDesc,
            currentPage: searchParams.get('currentPage') || currentPage
        }))
    }, [])


    useEffect(() => {
        setLoading(true)

        const sortTitles = ["rating", "price", "title"]
        const category = categoryID !== 0 ? `&category=${categoryID}` : "";
        const sortBy = sortTitles[sortPopUpIndex]
        const search = searchValue !== "" ? `&search=${searchValue.toLocaleLowerCase()}` : ""

        setSearchParams({
            categoryID,
            sortPopUpIndex,
            ascDesc,
            currentPage
        })

        const fetchData = async () => {
            return await axios.get(`https://62b982ad41bf319d227e5acb.mockapi.io/items?page=${+currentPage + 1}&limit=4${category}&sortBy=${sortBy}&order=${ascDesc}${search}`)
        }


        try {
            fetchData()
                .then(res => {
                    if (res.status === 200) {
                        return (setPizzas(res.data), setLoading(false))

                    }
                    return (alert('Что то пошло не так'), setLoading(false))
                })

        } catch (error) {
            console.log(error)
        }

        window.scrollTo(0, 0)
    }, [categoryID, sortPopUpIndex, ascDesc, searchValue, currentPage, setSearchParams])


    return (
        <div className="container">
            <div className="content__top">
                <Categories
                    titles={categoryTitles}
                    categoryID={categoryID}
                />

                <SortPopUp
                    titles={sortTitles}
                    sortPopUpMode={sortPopUpMode}
                    sortPopUpIndex={sortPopUpIndex}
                    ascDesc={ascDesc}
                />
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">


                {
                    loading ?
                        [...new Array(8)].map((_, index) => <PizzaBlockSkeleton key={index} />)
                        :
                        pizzas.map(pizza => (
                            <PizzaBlock
                                pizzaInfo={pizza}
                                key={pizza.id}
                            />
                        ))
                }

            </div>
            <PaginationBlock currentPage={currentPage} pageCount={pageCount} />
        </div>
    )
}

export default Home