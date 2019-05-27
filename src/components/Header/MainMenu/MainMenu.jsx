import React from 'react';
import './MainMenu.scss';

function MainMenu(props) {
  return(
    <ul className="main-menu">
      { props.menuItems.map(i =>
        <li key={i.id} className={i.active ? 'active' : null}>
          <a href="#">{ i.title }</a>
        </li>) }
    </ul>
  );
}
export default MainMenu;
