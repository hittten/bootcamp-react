import React from 'react';
import ProductList from "../product-list/ProductList";
import * as productService from "../product.service";

function Products() {
  return(
    <div className="wrapper">
      <h1>Products</h1>
      <ProductList
        products={productService.list()}
        buttonText="add to car"
        handleButtonClick={productService.addToCar}
      />
    </div>
  );
}

export default Products;
