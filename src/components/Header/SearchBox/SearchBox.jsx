import React from 'react';
import './SearchBox.scss';

function SearchBox() {
  return(
    <div className="search-box">
      <div className="search-box-category">
        <span>All departments</span><i></i>
      </div>
      <input type="text" placeholder="Search Products..."/>
    </div>
  );
}
export default SearchBox;
