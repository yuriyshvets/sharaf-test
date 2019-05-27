import React, { Component } from 'react';
import Breadcrumbs from '../Breadcrumbs/Breadcrumbs';
import ProductHeader from './ProductHeader/ProductHeader';
import ProductOptions from './ProductOptions/ProductOptions';
import ProductTabs from './ProductTabs/ProductTabs';
import { withRouter } from 'react-router-dom';
import './Product.scss';

class Product extends Component {
  state = {
    product: null,
    breadcrumbs: [
      {title: 'Electronics', link: '#'},
      {title: 'Computers & Tablets', link: '#'},
      {title: 'Laptops', link: '#'},
      {title: 'All laptops', link: '#'},
      {title: 'Macbooks', link: '#'},
      {title: 'Macbook Pro'}
    ]
  };
  render() {
    return (
      <div className="product">
        <Breadcrumbs items={ this.state.breadcrumbs } />
        {this.state.product ? <div>
          <div className="product-details">
            <div className="product-details-left">
              <ProductHeader product={ this.state.product } />
              <div className="gallery">
                <img
                  src={ this.state.product.images }
                  alt={ this.state.product.post_title }
                />
              </div>
            </div>
            <div className="product-details-right">
              <ProductOptions product={ this.state.product } />
            </div>
          </div>
          <ProductTabs />
        </div> : null }
      </div>
    );
  }
  componentDidMount() {
    console.log(this.props)
    const productId = this.props.match.params.id;
    const product = this.props.products.hits.find(product =>
      product.post_id == productId);
    this.setState({ product });
  }
}

export default withRouter(Product);
