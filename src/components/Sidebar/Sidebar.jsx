import React, { Component } from 'react';
import './Sidebar.scss';

class Sidebar extends Component {
  render() {
    return (
      <aside className="sidebar">
        <h2>Refine</h2>
        <div className="refine-item">
          <h3>Categories</h3>
          <ul>
            <li>Xbox 360</li>
            <li>Xbox One</li>
            <li>Nintendo Switch</li>
          </ul>
        </div>
        <div className="refine-item">
          <h3>Brand</h3>
          <label><input type="checkbox"/>Apple</label>
        </div>
        <div className="refine-item">
          <h3>Price (AED)</h3>
          <label><input type="checkbox"/>0-100</label>
          <label><input type="checkbox"/>0-500</label>
          <label><input type="checkbox"/>500-1000</label>
        </div>
        <div className="refine-item">
          <h3>Color</h3>
          <input type="checkbox"/>
          <input type="checkbox"/>
          <input type="checkbox"/>
        </div>
        <div className="refine-item">
          <h3>Rating</h3>
          <label><input type="checkbox"/>0-100</label>
          <label><input type="checkbox"/>0-500</label>
          <label><input type="checkbox"/>500-1000</label>
        </div>
      </aside>
    );
  }
}
export default Sidebar;
