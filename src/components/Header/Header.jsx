import React, { Component } from 'react';
import MainMenu from './MainMenu/MainMenu';
import TopMenu from './TopMenu/TopMenu';
import SearchBox from './SearchBox/SearchBox';
import TopUserMenu from './TopUserMenu/TopUserMenu';
import logo from '../../assets/images/logo.png';
import './Header.scss';

class Header extends Component {
  state = {
    mainMenuItems: [
      {
        title: 'Departments',
        id: 0,
        active: false,
      },
      {
        title: 'Brands',
        id: 1,
        active: false,
      },
      {
        title: 'Services',
        id: 2,
        active: false,
      },
      {
        title: 'Deals',
        id: 3,
        active: true,
      },
    ],
    topMenuItems: [
      {
        title: 'History',
        id: 0,
      },
      {
        title: 'Gift Cards',
        id: 1,
      },
      {
        title: 'Help',
        id: 2,
      },
    ],
  };
  render() {
    return (
      <header className="main-header">
        <div className="container">
          <div className="header-left">
            <a href="/">
              <img src={logo} alt="" className="logo" />
            </a>
            <MainMenu menuItems={this.state.mainMenuItems} />
          </div>
          <div className="header-right">
            <div className="top-menus">
              <TopMenu menuItems={this.state.topMenuItems} />
              <TopUserMenu />
            </div>
            <SearchBox />
          </div>
        </div>
      </header>
    );
  }
}
export default Header;
