import React, { Component } from 'react';
import ProductList from './ProductList/ProductList';
import './Content.scss';

class Content extends Component {
  render() {
    return (
      <div>
        <ProductList products={this.props.products}/>
      </div>
    );
  }
  componentDidMount() {
    console.log(this.props.products)
  }
}
export default Content;
