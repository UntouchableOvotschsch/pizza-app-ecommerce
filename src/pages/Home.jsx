import React, { useState, useEffect } from "react";

import Categories from "../components/Categories";
import SortPopUp from "../components/SortPopUp";
import PizzaBlock from "../components/PizzaBlock";
import PizzaBlockSkeleton from "../components/Skeletons/PizzaBlockSkeleton";
import PaginationBlock from "../components/PaginationBlock";


const Home = ({ searchValue }) => {

    const [pizzas, setPizzas] = useState([])
    const [loading, setLoading] = useState(true)

    const [catergoryID, setCategoryID] = useState(0)

    const [sortPopUpMode, setSortPopUpMode] = useState(false)
    const [sortPopUpIndex, setSortPopUpIndex] = useState(0)
    const [ascDesc, setAscDesc] = useState('asc')

    const [currentPage, setCurrentPage] = useState(0)

    useEffect(() => {
        setLoading(true)
        const sortTitles = ["rating", "price", "title"]
        const category = catergoryID !== 0 ? `&category=${catergoryID}` : "";
        const sortBy = sortTitles[sortPopUpIndex]
        const search = searchValue !== "" ? `&search=${searchValue.toLocaleLowerCase()}` : ""
        fetch(`https://62b982ad41bf319d227e5acb.mockapi.io/items?page=${currentPage + 1}&limit=4${category}&sortBy=${sortBy}&order=${ascDesc}${search}`)
            .then(res => { return res.json() })
            .then(json => {
                setPizzas(json);
                setLoading(false)
            })


        window.scrollTo(0, 0)
    }, [catergoryID, sortPopUpIndex, ascDesc, searchValue, currentPage])



    return (
        <div className="container">
            <div className="content__top">
                <Categories
                    titles={["Все", "Мясные", "Вегетарианская", "Гриль", "Острые", "Закрытые"]}
                    catergoryID={catergoryID}
                    setCategoryID={setCategoryID} />

                <SortPopUp
                    titles={["популярности", "цене", "алфавиту"]}
                    sortPopUpMode={sortPopUpMode}
                    setSortPopUpMode={setSortPopUpMode}
                    sortPopUpIndex={sortPopUpIndex}
                    setSortPopUpIndex={setSortPopUpIndex}
                    ascDesc={ascDesc}
                    setAscDesc={setAscDesc}
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
            <PaginationBlock setCurrentPage={setCurrentPage} />
        </div>
    )
}

export default Home