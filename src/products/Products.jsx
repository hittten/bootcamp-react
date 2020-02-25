import React from 'react';
import ProductList from "../product-list/ProductList";
import * as productService from "../product.service";
import {Link} from "react-router-dom";
import './Products.css';

function Products() {
  return (
    <div className="wrapper products">
      <h1>Products</h1>
      <ProductList
        products={productService.list()}
        buttonText="add to car"
        handleButtonClick={productService.addToShoppingCar}
      />
      <Link to="/products/add">
        <i className="material-icons">
          add
        </i>
      </Link>
    </div>
  );
}

export default Products;
