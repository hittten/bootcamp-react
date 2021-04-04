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
import ProductAdd from "./product-add/ProductAdd";
import {Carto} from "./carto/Carto";
import {CartoGeoJson} from "./carto/CartoGeoJson";

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
        <Route path="/shopping-car">
          <ShoppingCar/>
        </Route>
        <Route path="/carto">
          <Carto id="map" dataSet="bases_bicimad"/>
          <Carto id="map2" dataSet="stops"/>
          <CartoGeoJson id="map3"/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
