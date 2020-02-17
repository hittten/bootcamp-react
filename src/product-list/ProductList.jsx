import React from 'react';
import './ProductList.css';

class ProductList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      gridView: false,
    }
  }

  render() {
    const products = this.props.products.map(product => {
      return (
        <li key={product.id}>
          <h2>{product.name}</h2>
          <img src={product.image} alt={product.name}/>
          <p>
            ({product.createdAt.toLocaleDateString()}) -
            {product.description.length > 150 ? product.description.slice(0, 150) + '...' : product.description}
          </p>
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
          <i className={`material-icons ${!this.state.gridView ? 'selected' : ''}`}
             onClick={() => this.setState({gridView: false})}>
            view_list
          </i>
          <i className={`material-icons ${this.state.gridView ? 'selected' : ''}`}
             onClick={() => this.setState({gridView: true})}>
            view_module
          </i>
        </div>
        <ul className={this.state.gridView ? 'grid' : ''}>
          {products}
        </ul>
      </div>
    );
  }
}

export default ProductList;
