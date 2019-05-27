import React, { Component } from 'react';
import './ProductOptions.scss';

class ProductOptions extends Component {
  state = {
    colors: [
      {name: "Space Grey", cssName: 'space-grey'},
      {name: "Silver", cssName: 'silver'},
      {name: "Rodse Gold", cssName: 'rose-gold'},
      {name: "Gold", cssName: 'gold'}
    ],
    screenSizes: [
      13.3, 15.3
    ],
    storages: [
      {name: 64, inStock: false},
      {name: 128, inStock: true},
      {name: 256, inStock: true},
      {name: 512, inStock: true}
    ],
    processors: [
      {name: 'Intel Core i3', cssName: 'i3', inStock: true},
      {name: 'Intel Core i5', cssName: 'i5', inStock: true},
      {name: 'Intel Core i7', cssName: 'i7', inStock: true}
    ],
    rams: [
      {value: 4, inStock: false},
      {value: 8, inStock: true},
      {value: 16, inStock: true},
      {value: 32, inStock: true}
    ],
    color: null,
    screenSize: null,
    storage: null,
    processor: null,
    ram: null,
  };
  render() {
    const { product } = this.props;
    return (
      <div className="product-options">
        <div className="price-box">
          <div className="price">
            AED { this.getFormattedPrice(product.price) }
          </div>
          { product.sale_price ?
            <div className="discount-wrapper">
            <div className="discount">
              Save AED { product.discount_val }
            </div>
              <span className="regular-price">
                was AED { this.getFormattedPrice(product.regular_price) }
            </span>
            </div>
            : null }
        </div>
        <div className="colors-container product-options-item">
          <div className="options-label">
            Color: <strong>{ this.state.color }</strong>
          </div>
          <div className="colors-labels">
            { this.state.colors.map((color, index) =>
              <label className="checkbox-container-round" key={ color.cssName }>
                <input
                  type="radio"
                  name="color"
                  onChange={() => this.handleColor(color.name)}
                  defaultChecked={ !index }
                />
                <i className={`checkmark color-${color.cssName}`}></i>
              </label>
            ) }
          </div>
        </div>
        <div className="screen-container product-options-item">
          <div className="options-label">
            Screen Size: <strong>{ this.state.screenSize } inch</strong>
          </div>
          <div className="screen-labels">
            { this.state.screenSizes.map((size, index) =>
              <label className="checkbox-container-box" key={ size }>
                <div className="size">
                  <strong>{ size }</strong>
                  <span>inches</span>
                </div>
                <input
                  type="radio"
                  name="size"
                  onChange={() => this.handleScreenSize(size)}
                  defaultChecked={ !index }
                />
                <div className="checkmark"></div>
              </label>
            ) }
          </div>
        </div>
        <div className="storage-container product-options-item">
          <div className="options-label">
            Storage: <strong>{ this.state.storage } GB</strong>
          </div>
          <div className="screen-labels">
            { this.state.storages.map(storage =>
              <label className="checkbox-container-rect" key={ storage.name }>
                <input
                  type="radio"
                  name="storage"
                  onChange={() => this.handleStorage(storage.name)}
                  defaultChecked={ this.state.storages.find(s => s.inStock).name === storage.name}
                  disabled={ !storage.inStock }
                />
                <div className={`checkmark ${!storage.inStock ? 'disabled' : null}`}></div>
                <div className="storage">
                  { storage.name } GB
                </div>
              </label>
            ) }
          </div>
        </div>
        <div className="processor-container product-options-item">
          <div className="options-label">
            Procesor: <strong>{ this.state.processor } </strong>
          </div>
          <div className="screen-labels">
            { this.state.processors.map((processor, index) =>
              <label className="checkbox-container-box" key={ processor.name }>
                <input
                  type="radio"
                  name="processor"
                  onChange={() => this.handleProcessor(processor.name)}
                  defaultChecked={ !index }
                />
                <div className={`checkmark ${processor.cssName}`}></div>
              </label>
            ) }
          </div>
        </div>
        <div className="custom-select product-options-item">
          <select value={this.state.ram} onChange={this.handleRam.bind(this)}>
            { this.state.rams.map(ram => ram.inStock ?
              <option value={ ram.value }>RAM: { ram.value } GB</option>
              : null
            ) }
          </select>
        </div>
        <button className="order-button">Add to cart</button>
      </div>
    );
  }
  getFormattedPrice(value) {
    let priceStr = value.toString();
    if (priceStr.length > 3) {
      let priceArr = priceStr.split('');
      priceArr.splice(-3, 0, ',');
      return priceArr.join('');
    } else {
      return priceStr;
    }
  }
  handleColor(color) {
    this.setState({color})
  }
  handleScreenSize(screenSize) {
    this.setState({screenSize})
  }
  handleStorage(storage) {
    this.setState({storage})
  }
  handleProcessor(processor) {
    this.setState({processor})
  }
  getInStore(arr) {
    return this.state[arr].find(s => s.inStock);
  }
  componentDidMount() {
    this.handleColor(this.state.colors[0].name);
    this.handleScreenSize(this.state.screenSizes[0]);
    this.handleStorage(this.getInStore('storages').name);
    this.handleProcessor(this.getInStore('processors').name);
  }
  handleRam(e) {
    e.persist();
    const ram = e.target.value;
    this.setState({ ram });
  }
}

export default ProductOptions;
