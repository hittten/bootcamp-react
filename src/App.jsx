import React from 'react';
import './App.css';
import Header from "./header/Header";
import ShoppingCar from "./shopping-car/ShoppingCar";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Products from "./products/Products";

function App() {
  return (
    <Router>
      <Header/>
      <Switch>
        <Route exact path="/">
          <Products/>
        </Route>
        <Route path="/shopping-car">
          <ShoppingCar/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
