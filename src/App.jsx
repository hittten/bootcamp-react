import React from 'react';
import './App.css';
import Header from "./header/Header";
import Car from "./car/Car";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Products from "./products/Products";
import ProductAdd from "./product-add/ProductAdd";

function App() {
  return (
    <Router>
      <Header/>
      <Switch>
        <Route exact path="/">
          <Products/>
        </Route>
        <Route path="/products/add">
          <ProductAdd/>
        </Route>
        <Route path="/car">
          <Car/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
