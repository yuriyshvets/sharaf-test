import React from 'react';
import './App.scss';
import Header from './components/Header/Header'
import Content from './components/Content/Content'
import products from './datasets/product_lists';
import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <div className="content-wrapper">
          <div className="container">
            <Content products={ products.results[0] } />
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
