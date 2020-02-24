import React from 'react';
import ProductList from "../product-list/ProductList";
import * as productService from "../product.service";

function ShoppingCar() {
  return (
    <div className="wrapper">
      <h1>Shopping Car</h1>
      <ProductList
        products={productService.listShoppingCarItems()}
        buttonText="remove from car"
        handleButtonClick={productService.removeFromShoppingCar}
      />
    </div>
  );
}

export default ShoppingCar;
