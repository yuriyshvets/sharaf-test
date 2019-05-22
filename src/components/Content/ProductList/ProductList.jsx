import React, { Component } from 'react';
import ProductListItem from '../ProductListItem/ProductListItem';
import './ProductList.scss';

class ProductList extends Component {
  render() {
    return (
      <div>
        <ul className="products-list">
          { this.props.products.hits.map(product =>
            <ProductListItem product={product}/>
          )}
        </ul>
      </div>
    );
  }
  componentDidMount() {
    console.log(this.props.products)
  }
}
export default ProductList;
