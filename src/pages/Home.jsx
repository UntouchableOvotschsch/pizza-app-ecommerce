import React, {useState, useEffect} from "react";

import Categories from "../components/Categories";
import SortPopUp from "../components/SortPopUp";
import PizzaBlock from "../components/PizzaBlock";
import PizzaBlockSkeleton from "../components/Skeletons/PizzaBlockSkeleton";



const Home = () => {

    const [pizzas, setPizzas] = useState([])
    const [loading, setLoading] = useState(true)
  
    useEffect(() => {
      fetch('https://62b982ad41bf319d227e5acb.mockapi.io/items')
        .then(res => { return res.json() })
        .then(json => {
          setPizzas(json);
          setLoading(false)
        })
    }, [])


    return (
        <>
            <div className="content__top">
                <Categories titles={["Все", "Мясные", "Вегетарианская", "Гриль", "Острые", "Закрытые"]} />
                <SortPopUp />
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
        </>
    )
}

export default Home