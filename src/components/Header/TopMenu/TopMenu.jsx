import React from 'react';
import './TopMenu.scss';

function TopMenu(props) {
  return(
    <ul className="top-menu">
      { props.menuItems.map(i => <li key={i.id} className={i.active ? 'active' : null}>{i.title}</li>) }
    </ul>
  );
}
export default TopMenu;
