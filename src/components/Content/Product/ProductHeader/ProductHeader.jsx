import React from 'react';
import './ProductHeader.scss';

function ProductHeader({ product }) {
  const rating = (product.rating_reviews.rating / 5) * 100;
  return (
    <div className="product-header">
        <h1>{ product.post_title }</h1>
      <div className="product-header-footer">
        <div className="rating-stars">
          <div className="grey-stars"></div>
          <div className="filled-stars" style={{width: `${ rating }%`}}></div>
        </div>
        <div className="product-header-details">
          <div className="customers">{ product.rating_reviews.reviews } customers</div>
          <div className="customers">3 Answered Questions</div>
          <div className="customers">Apple</div>
        </div>
      </div>
    </div>
  );
}

export default ProductHeader;
