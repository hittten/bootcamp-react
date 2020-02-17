import React from 'react';
import './ProductList.css';

function ProductList(props) {
  const products = props.products.map(product => {
    return (
      <li key={product.id}>
        <h2>{product.name}</h2>
        <img src={product.image} alt={product.name}/>
        <p>{product.description.length > 150 ? product.description.slice(0,150) + '...' : product.description}</p>
        <div className="price">{product.price} €</div>
        <div>
          <button className="button">add to cart</button>
        </div>
      </li>
    )
  });

  return (
    <div className="wrapper">
      <h1>Products</h1>
      <div className="views">
        <i className="material-icons">
          view_list
        </i>
        <i className="material-icons">
          view_module
        </i>
      </div>
      <ul>
        {products}
      </ul>
    </div>
  );
}

export default ProductList;
