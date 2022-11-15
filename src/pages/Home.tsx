import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useSearchParams} from "react-router-dom";
import {GetPageParamsSelector, setNavigationParams} from "../redux/slices/pageParamsSlice";
import {fetchAllPizzas, GetPizzasSelector} from "../redux/slices/pizzaSlice";
import Categories from "../components/Categories";
import SortPopUp from "../components/SortPopUp";
import PizzaBlock from "../components/PizzaBlock";
import PizzaBlockSkeleton from "../components/Skeletons/PizzaBlockSkeleton";
import PaginationBlock from "../components/PaginationBlock";
import {NotFound} from "./NotFound";


const Home: React.FC = () => {
    const [loading, setLoading] = useState(false)

    const [searchParams, setSearchParams] = useSearchParams();
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
        searchValue
    } = useSelector(GetPageParamsSelector)

    const {pizzas} = useSelector(GetPizzasSelector)

    useEffect(() => {
        dispatch(setNavigationParams({
            categoryID: searchParams.get("categoryID") || categoryID,
            sortPopUpIndex: searchParams.get("sortPopUpIndex") || sortPopUpIndex,
            ascDesc: searchParams.get("ascDesc") || ascDesc,
            currentPage: searchParams.get("currentPage") || currentPage
        }))
        window.scrollTo(0, 0)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])


    useEffect(() => {
        setLoading(true)

        const sortTitles = ["rating", "price", "title"]
        const category = categoryID !== 0 ? `&category=${categoryID}` : "";
        const sortBy = sortTitles[sortPopUpIndex]
        const search = searchValue !== "" ? `&search=${searchValue.toLocaleLowerCase()}` : ""


        if (categoryID !== 0 || sortPopUpIndex !== 0 || currentPage !== 0 || ascDesc !== "asc") {
            setSearchParams({
                categoryID,
                sortPopUpIndex,
                currentPage,
                ascDesc
            })
        } else {
            setSearchParams("")
        }
        // @ts-ignore
        dispatch(fetchAllPizzas({currentPage, category, sortBy, ascDesc, search}))
            .finally(() => {
                setLoading(false)
            })

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [categoryID, sortPopUpIndex, searchValue, ascDesc, currentPage])

    if (!loading && !pizzas.length) {
        return (<NotFound/>)
    }
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
                        pizzas.map((pizza: any) => (
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