import React from "react";
import './scss/app.scss'


import Header from "./components/Header";
import Categories from "./components/Categories";
import SortPopUp from "./components/SortPopUp";
import PizzaBlock from "./components/PizzaBlock";



const App = () => {
  return (
    <div class="wrapper">
      <Header />
      <div class="content">
        <div class="container">
          <div class="content__top">
            <Categories />
            <SortPopUp />
          </div>
          <h2 class="content__title">Все пиццы</h2>
          <div class="content__items">
            <PizzaBlock/>
            <PizzaBlock/>
            <PizzaBlock/>
            <PizzaBlock/>
            <PizzaBlock/>
            <PizzaBlock/>
            <PizzaBlock/>
            <PizzaBlock/>
            <PizzaBlock/>
            <PizzaBlock/>
            <PizzaBlock/>
            <PizzaBlock/>
            
          </div>
        </div>
      </div>
    </div>

  );
}

export default App;
