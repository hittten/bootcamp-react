import React from 'react';
import './ProductsAdd.css';
import * as productService from "../product.service";

class ProductAdd extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      price: '',
      description: '',
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    event.preventDefault();

    productService.create({...this.state})
      .then(product => {
          console.log('new product', product);
        }
      );
  }

  render() {
    return (
      <div className="products-add wrapper">
        <h1>Add new product</h1>
        <form onSubmit={this.handleSubmit}>
          <p>
            <label htmlFor="name">name</label>
            <input onChange={this.handleInputChange} name="name" type="text" id="name" required/>
          </p>
          <p>
            <label htmlFor="price">price</label>
            <input onChange={this.handleInputChange} name="price" type="number" id="price" required/>
          </p>
          <p>
            <label htmlFor="description">description</label>
            <textarea onChange={this.handleInputChange} name="description" id="description" required/>
          </p>
          <p>
            <button className="button" type="submit">Save</button>
          </p>
        </form>
      </div>
    );
  }
}

export default ProductAdd;
