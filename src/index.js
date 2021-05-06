import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';

import { applyMiddleware, createStore, combineReducers } from 'redux';

ReactDOM.render(<App />, document.getElementById('root'));
