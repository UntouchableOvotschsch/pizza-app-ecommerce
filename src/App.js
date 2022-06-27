import React from "react";
import './scss/app.scss'



import Header from "./components/Header";
import Categories from "./components/Categories";
import SortPopUp from "./components/SortPopUp";
import PizzaBlock from "./components/PizzaBlock";

import pizzas from './assets/pizzas/pizzas.json'

const App = () => {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
          <div className="content__top">
            <Categories titles={["Все", "Мясные", "Вегетарианская", "Гриль", "Острые", "Закрытые"]} />
            <SortPopUp />
          </div>
          <h2 className="content__title">Все пиццы</h2>
          <div className="content__items">

            {
              pizzas.map((pizza,  index) => (
                <PizzaBlock
                  pizzaInfo={pizza}
                  key={index}
                />
              ))
            }


          </div>
        </div>
      </div>
    </div>

  );
}

export default App;
