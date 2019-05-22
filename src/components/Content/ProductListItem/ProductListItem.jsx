import React, { Component } from 'react';
import './ProductListItem.scss';

class ProductListItem extends Component {
  render() {
    const { product } = this.props;
    return (
      <li key={product.post_id} className="products-list-item">
        { product.post_title }
        <img src={ product.images } alt={ product.post_title }/>
      </li>
    );
  }
}
export default ProductListItem;
