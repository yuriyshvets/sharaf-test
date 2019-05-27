import React, { Component } from 'react';
import ProductList from './ProductList/ProductList';
import Product from './Product/Product';
import './Content.scss';
import { Route, Switch } from 'react-router-dom';

 class Content extends Component {
  render() {
    return (
      <div className="content">
        <Switch>
          <Route path='/' exact component={
            () => <ProductList products={ this.props.products } />}
          />
          <Route path='/product/:id' component={
            () => <Product products={ this.props.products } />}
          />
        </Switch>
      </div>
    );
  }
}
export default Content;
