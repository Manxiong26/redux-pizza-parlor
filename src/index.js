import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';

import logger from 'redux-logger';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';


const pizzaList = (state = [], action ) => {
    if(action.type === 'SET_PIZZA_LIST'){
        return action.payload;
    }
    return state;
}

const orderList = (state = [], action ) => {
    if(action.type === 'SET_ORDER') {
        return action.payload;
    }
    return state;
}


const storeInstance = createStore(
    combineReducers({
        pizzaList,
        orderList
    }),
    applyMiddleware(logger),
);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
