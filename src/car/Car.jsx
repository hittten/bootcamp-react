import React from 'react';
import ProductList from "../product-list/ProductList";
import * as productService from "../product.service";

function Car() {
  return (
    <div className="wrapper">
      <h1>Car</h1>
      <ProductList
        products={productService.listCarItems()}
        buttonText="remove from car"
        handleButtonClick={productService.removeFromCar}
      />
    </div>
  );
}

export default Car;
