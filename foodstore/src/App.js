import React from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import FoodShop from './component/foodshop'
import './App.css';
import NavBar from './component/navbar'
import SearchArea  from './component/searcharea';
import Contact from './component/contact'
import { Route, Link, Switch, BrowserRouter } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
            <React.Fragment>
            <FoodShop />
            <Switch>
            <Route path="/home" exact component={FoodShop} />
            <Route path="/contact" component={Contact} />
            </Switch>
            </React.Fragment>
      </BrowserRouter>
           
    </div>
  );
}

export default App;
