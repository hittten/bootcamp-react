import React from 'react';
import './ProductList.css';
import {euroCurrency} from '../utils/euro-currency';
import {uppercase} from '../utils/uppercase';
import {ReactComponent as Loading} from '../assets/spinner.svg';

class ProductList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      error: null,
      isLoaded: false,
      gridView: false,
      products: [],
    }
  }

  componentDidMount() {
    this.props.products
      .then(
        data => {
          this.setState({
            isLoaded: true,
            products: data,
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        error => {
          this.setState({
            isLoaded: true,
            error: error,
          })
        }
      )
  }

  render() {
    const {error, isLoaded} = this.state;
    let products = <Loading/>;

    if (error) {
      products = <div>Error: {error.message}</div>;
    } else if (isLoaded) {
      products = this.state.products.map((product, index) => {
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
              <button className="button"
                      onClick={(e) => this.handleButtonClick(product, e.target)}>{this.props.buttonText}</button>
            </div>
          </li>
        )
      });
    }

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

  handleButtonClick(product, buttonElement) {
    buttonElement.disabled = true;
    this.props.handleButtonClick(product).then(() => {
      buttonElement.disabled = false;
      this.setState({products: this.state.products});
      console.log(product);
    });
  }
}

export default ProductList;
