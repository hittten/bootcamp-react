import React from 'react';
import './ProductList.css';
import { euroCurrency } from '../utils/euro-currency';
import { uppercase } from '../utils/uppercase';

class ProductList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      gridView: false,
      products: props.products,
    }
  }

  render() {
    const products = this.props.products.map((product, index) => {
      return (
        <li key={index}>
          <h2>{uppercase(product.name)}</h2>
          <img src={product.image} alt={product.name}/>
          <p>
            ({product.createdAt.toLocaleDateString()}) -
            {product.description.length > 150 ? product.description.slice(0, 150) + '...' : product.description}
          </p>
          <div className="price">{euroCurrency(product.price)}</div>
          <div>
            <button className="button" onClick={() => this.handleButtonClick(product)}>{this.props.buttonText}</button>
          </div>
        </li>
      )
    });

    return (
      <div className="product-list">
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

  handleButtonClick(product) {
    this.props.handleButtonClick(product);
    this.setState({products: this.props.products});
    console.log('remove', product);
  }
}

export default ProductList;
