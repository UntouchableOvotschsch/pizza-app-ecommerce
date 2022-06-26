import React from "react";
import './scss/app.scss'


import Header from "./components/Header";
import Categories from "./components/Categories";
import SortPopUp from "./components/SortPopUp";
import PizzaBlock from "./components/PizzaBlock";



const App = () => {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
          <div className="content__top">
            <Categories />
            <SortPopUp />
          </div>
          <h2 className="content__title">Все пиццы</h2>
          <div className="content__items">
            <PizzaBlock />
            <PizzaBlock />

          </div>
        </div>
      </div>
    </div>

  );
}

export default App;
