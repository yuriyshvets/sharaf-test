import React, { Component } from 'react';
import './Sidebar.scss';
import { CSSTransition } from 'react-transition-group';

class Sidebar extends Component {
  state = {
    showCloseSidebar: false,
    mobileMode: false,
  }
  render() {
    return (
      <CSSTransition in={this.props.showSidebar} timeout={500} classNames="slide" unmountOnExit>
        <aside
          className={`sidebar ${ this.state.mobileMode ? 'mobile-mode' : null}`}
        >
          {this.state.showCloseSidebar ?
            <button
              onClick={ this.props.switchSidebar }
              className="close-button"
            >
              X
            </button>
            : null }
          <h2>Refine</h2>
          <div className="refine-item">
            <h3>Categories</h3>
            <ul>
              <li>Xbox 360</li>
              <li>Xbox One</li>
              <li>Ninetendo Switch</li>
              <li>Playstation 4</li>
              <li>Ninetendo V</li>
              <li><span className="list-link">See all consoles</span></li>
              <li>See more categories</li>
            </ul>
          </div>
          <div className="refine-item">
            <h3>Brand</h3>
            <input
              type="text"
              className="brand-search"
              placeholder="Search by brand..."
            />
            <label className="checkbox-container">
              <input type="checkbox"/>
              <i className="checkmark"></i>Samsung
            </label>
            <label className="checkbox-container">
              <input type="checkbox"/>
              <i className="checkmark"></i>LG
            </label>
            <label className="checkbox-container">
              <input type="checkbox"/>
              <i className="checkmark"></i>Philips
            </label>
          </div>
          <div className="refine-item">
            <h3>Price (AED)</h3>
            <label className="checkbox-container">
              <input type="checkbox"/>
              <i className="checkmark"></i>0-100
            </label>
            <label className="checkbox-container">
              <input type="checkbox"/>
              <i className="checkmark"></i>0-500
            </label>
            <label className="checkbox-container">
              <input type="checkbox"/>
              <i className="checkmark"></i>500-1000
            </label>
          </div>
          <div className="refine-item" style={{paddingBottom: '11px'}}>
            <h3>Color</h3>
            <div className="colors-labels">
              <label className="checkbox-container-round">
                <input type="checkbox"/>
                <i className="checkmark color-dark-blue"></i>
              </label>
              <label className="checkbox-container-round">
                <input type="checkbox"/>
                <i className="checkmark color-blue"></i>
              </label>
              <label className="checkbox-container-round">
                <input type="checkbox"/>
                <i className="checkmark color-pink"></i>
              </label>
              <label className="checkbox-container-round">
                <input type="checkbox"/>
                <i className="checkmark color-grey"></i>
              </label>
              <label className="checkbox-container-round">
                <input type="checkbox"/>
                <i className="checkmark color-yellow"></i>
              </label>
            </div>
            <span className="list-link">See more colors</span>
          </div>
          <div className="refine-item">
            <h3>Rating</h3>
            <label className="rating-stars-container checkbox-container">
              <input type="checkbox"/>
              <i className="checkmark"></i>
              <div className="rating-stars">
                <div className="grey-stars"></div>
                <div className="filled-stars" style={{width: '80%'}}></div>
              </div>
              & Up
            </label>
            <label className="rating-stars-container checkbox-container">
              <input type="checkbox"/>
              <i className="checkmark"></i>
              <div className="rating-stars">
                <div className="grey-stars"></div>
                <div className="filled-stars" style={{width: '60%'}}></div>
              </div>
              & Up
            </label>
            <label className="rating-stars-container checkbox-container">
              <input type="checkbox"/>
              <i className="checkmark"></i>
              <div className="rating-stars">
                <div className="grey-stars"></div>
                <div className="filled-stars" style={{width: '40%'}}></div>
              </div>
              & Up
            </label>
            <label className="rating-stars-container checkbox-container">
              <input type="checkbox"/>
              <i className="checkmark"></i>
              <div className="rating-stars">
                <div className="grey-stars"></div>
                <div className="filled-stars" style={{width: '20%'}}></div>
              </div>
              & Up
            </label>
          </div>
        </aside>
      </CSSTransition>
    );
  }
  setCloseButton() {
    if(window.innerWidth < 640) {
      this.setState({showCloseSidebar: true});
      this.setState({mobileMode: true});
    } else {
      this.setState({showCloseSidebar: false});
      this.setState({mobileMode: false});
    }
  }
  componentDidMount() {
    this.setCloseButton();
    window.addEventListener("resize", this.setCloseButton.bind(this));
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.setCloseButton.bind(this));
  }
}
export default Sidebar;
