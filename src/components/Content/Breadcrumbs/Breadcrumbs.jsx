import React from 'react';
import './Breadcrumbs.scss';

function Breadcrumbs(props) {
  const { items } = props;
  return(
    <div className="breadcrumbs">
      { items.map((i, index) => {
        return (
          index < items.length - 1 ?
          <div className="breadcrums-item" key={i.title}>
            <a href={ i.link }>{ i.title }</a>
            <span> >&nbsp;</span>
          </div>
          :
          <div className="breadcrums-item" key={i.title}>
            { i.title }
          </div>
        );
      }
      )}
    </div>
  );
}
export default Breadcrumbs;
