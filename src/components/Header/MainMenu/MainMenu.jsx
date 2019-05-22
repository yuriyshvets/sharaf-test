import React from 'react';
import './MainMenu.scss';

function MainMenu(props) {
  return(
    <ul className="main-menu">
      { props.menuItems.map(i => <li key={i.id} className={i.active ? 'active' : null}>{i.title}</li>) }
    </ul>
  );
}
export default MainMenu;
