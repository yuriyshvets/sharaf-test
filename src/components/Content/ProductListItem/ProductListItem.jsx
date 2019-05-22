import React, { Component } from 'react';
import './ProductListItem.scss';

class ProductListItem extends Component {
  render() {
    const { product } = this.props;
    return (
      <li key={product.post_id} className="products-list-item">
        <img src={ product.images } alt={ product.post_title } />
        <div className="title">
          { product.post_title }
        </div>
        <div className="rating">

        </div>
        <div className="price-box">
          {product.sale_price ? 'sdfsd' : null }
          <div className="price">
            AED { product.price }
          </div>
        </div>
      </li>
    );
  }
}
export default ProductListItem;
