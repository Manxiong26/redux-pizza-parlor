import React from 'react';
import axios from 'axios';
import './App.css';

import { HashRouter as Router, Route, Link } from 'react-router-dom';

import CustomerForm from '../CustomerForm/CustomerForm';
import AdminOrders from '../AdminOrders/AdminOrders';

function App() {

  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Prime Pizza</h1>
      </header>
  
      <img src='images/pizza_photo.png' />
      <p>Pizza is great.</p>
      <Router>
          <Route exact path="/" component={Home} />
      </Router>
  
    </div>
  );
}

export default App;
