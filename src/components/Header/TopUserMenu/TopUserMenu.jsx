import React from 'react';
import './TopUserMenu.scss';

function TopUserMenu() {
  return(
    <div className="top-user-menus">
      <div className="location">
        <i className='location-icon'></i>
        UAE
      </div>
      <div className="account">
        <a href="#">
          <i className='account-icon'></i>
          Account
        </a>
      </div>
      <div className="cart">
        <a href="#">
          <i  className='cart-icon'></i>
          Cart <span className="product-counter">3</span>
        </a>
      </div>
    </div>
  );
}
export default TopUserMenu;
