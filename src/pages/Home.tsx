import React, {useEffect, useState} from "react";
import {useSearchParams} from "react-router-dom";

import {useSelector} from "react-redux";
import {useAppDispatch} from "../redux/redux-store";
import {GetPageParamsSelector, setNavigationParams} from "../redux/slices/pageParamsSlice";
import {fetchAllPizzas, GetPizzasSelector} from "../redux/slices/pizzaSlice";
import {AscDesc, PageParamsSlice, PizzasTypes} from "../redux/slices/slicesTypes";

import Categories from "../components/Categories";
import SortPopUp from "../components/SortPopUp";
import PizzaBlock from "../components/PizzaBlock";
import PizzaBlockSkeleton from "../components/Skeletons/PizzaBlockSkeleton";
import PaginationBlock from "../components/PaginationBlock";


const Home: React.FC = () => {
    const [loading, setLoading] = useState(false)
    const dispatch = useAppDispatch()

    const [searchParams, setSearchParams] = useSearchParams();

    const {
        categoryID,
        sortPopUpMode,
        sortPopUpIndex,
        ascDesc,
        categoryTitles,
        sortTitles,
        currentPage,
        pageCount,
        searchValue
    } = useSelector(GetPageParamsSelector)

    const {pizzas} = useSelector(GetPizzasSelector)

    useEffect(() => {

        const searchParameters = {
            categoryID: searchParams.get("categoryID") ?? Number(searchParams.get("categoryID")) !== categoryID ? Number(searchParams.get("categoryID")) : categoryID,
            sortPopUpIndex: searchParams.get("sortPopUpIndex") ?? Number(searchParams.get("sortPopUpIndex")) !== sortPopUpIndex ? Number(searchParams.get("sortPopUpIndex")) : sortPopUpIndex,
            ascDesc: searchParams.get("ascDesc") ?? searchParams.get("ascDesc") !== ascDesc ? AscDesc.DESC : AscDesc.ASC,
            currentPage: searchParams.get("currentPage") ?? Number(searchParams.get("currentPage")) !== currentPage ? Number(searchParams.get("currentPage")) : currentPage
        }

        dispatch(setNavigationParams(searchParameters as PageParamsSlice))
        window.scrollTo(0, 0)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])


    useEffect(() => {
        setLoading(true)

        const sortTitles = ["rating", "price", "title"]
        const category = categoryID !== 0 ? `&category=${categoryID}` : "";
        const sortBy = sortTitles[sortPopUpIndex]
        const search = searchValue === "" ? "" : `&search=${searchValue.toLocaleLowerCase()}`


        if (categoryID !== 0 || sortPopUpIndex !== 0 || currentPage !== 0 || ascDesc !== AscDesc.DESC) {
            const params = {
                categoryID: categoryID.toString(),
                sortPopUpIndex: sortPopUpIndex.toString(),
                currentPage: currentPage.toString(),
                ascDesc: ascDesc
            }
            setSearchParams(params)
        } else {
            setSearchParams("")
        }
        dispatch(fetchAllPizzas({currentPage, category, sortBy, ascDesc, search}))
            .finally(() => {
                setLoading(false)
            })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [categoryID, sortPopUpIndex, searchValue, ascDesc, currentPage])

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
                        [...new Array(8)].map((_, index) => <PizzaBlockSkeleton key={index}/>)
                        :
                        pizzas.map((pizza: PizzasTypes) => (
                            <PizzaBlock
                                pizzaInfo={pizza}
                                key={pizza.id}
                            />
                        ))
                }

            </div>
            <PaginationBlock currentPage={currentPage} pageCount={pageCount}/>
        </div>
    )
}

export default Home