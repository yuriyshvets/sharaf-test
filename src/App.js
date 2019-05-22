import React from 'react';
import './App.scss';
import Header from './components/Header/Header'
import Sidebar from './components/Sidebar/Sidebar'
import Content from './components/Content/Content'
import products from './datasets/product_lists';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="content-wrapper">
        <div className="container">
          <Sidebar />
          <Content products={ products.results[0] } />
        </div>
      </div>
    </div>
  );
}

export default App;
