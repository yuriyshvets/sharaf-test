import React, { Component } from 'react';
import './ProductListItem.scss';
import { Link } from 'react-router-dom';

class ProductListItem extends Component {
  render() {
    const { product } = this.props;
    const rating = (product.rating_reviews.rating / 5) * 100;
    return (
      <li key={product.post_id} className="products-list-item">
        <Link to={`/product/${ product.post_id }`}>
          <img src={ product.images } alt={ product.post_title } />
        </Link>
        <div className="title">
          <Link to={`/product/${ product.post_id }`}>
            { product.post_title }
          </Link>
        </div>
        <div className="rating">
          <div className="rating-stars">
            <div className="grey-stars"></div>
            <div className="filled-stars" style={{width: `${ rating }%`}}></div>
          </div>
          <span>{ product.rating_reviews.reviews }</span>
        </div>
        <div className="price-box">
          { product.sale_price ?
            <div className="discount-wrapper">
              <span className="regular-price">
                AED { product.regular_price }
              </span>
              <span className="discount">
                Save { product.discount }%
              </span>
            </div>
            : null }
          <div className="price">
            AED { product.price }
          </div>
        </div>
      </li>
    );
  }
}
export default ProductListItem;
