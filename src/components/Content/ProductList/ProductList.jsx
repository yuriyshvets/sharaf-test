import React, { Component } from 'react';
import ProductListItem from '../ProductListItem/ProductListItem';
import './ProductList.scss';
import Sidebar from "../../Sidebar/Sidebar";

class ProductList extends Component {
  state = {
    sortBy: 0,
    showSidebar: true,
    mobileShowSidebar: false,
  };
  render() {
    return (
      <div className="products-list-wrapper">
        <Sidebar showSidebar={ this.state.showSidebar } switchSidebar={this.switchSidebar}/>
        <div className="products-list-inner">
          <div className="products-list-actions">
            <button
              onClick={ this.switchSidebar }
              className="sidebar-switcher"
            >
              Filters
            </button>
            <div className="custom-select sort-by">
              <select
                value={ this.state.sortBy }
                onChange={ this.handleSort.bind(this) }
              >
                <option value={0}>Best match</option>
                <option value={1}>Lowest Price</option>
                <option value={2}>Highest Price</option>
              </select>
            </div>
          </div>
          <ul className="products-list">
            { this.props.products.hits.map(product =>
              <ProductListItem product={product} key={ product.post_id }/>
            )}
          </ul>
        </div>
      </div>
    );
  }
  handleSort(e) {
    e.persist();
    const sortBy = e.target.value;
    this.setState({ sortBy });
  }
  switchSidebar = () => {
    this.setState({showSidebar: !this.state.showSidebar});
    if (window.innerWidth < 640) {
      this.setState({mobileShowSidebar: !this.state.mobileShowSidebar});
    }
  }
  updateSwitchSidebar() {
    if (window.innerWidth < 640) {
      if (!this.state.mobileShowSidebar && this.state.showSidebar) {
        this.setState({showSidebar: false});
      }
    } else {
      this.setState({showSidebar: true});
      this.setState({showCloseSidebar: true});
    }
  }
  componentDidMount() {
    if(window.innerWidth < 640) {
      this.setState({showSidebar: false});
    }
    window.addEventListener("resize", this.updateSwitchSidebar.bind(this));
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.updateSwitchSidebar.bind(this));
  }
}
export default ProductList;
