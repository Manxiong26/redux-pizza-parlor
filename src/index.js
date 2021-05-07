import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';


import { applyMiddleware, createStore, combineReducers } from 'redux';

import logger from 'redux-logger';

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

const selectedPizza = (state = {}, action) => {
    if (action.type === 'SET_SELECTED_PIZZA') {
        // return action.payload;
        return {
            ...state,
            
            [action.payload.property]: action.payload.value
        }
    } return state;
} 


const storeInstance = createStore(
    combineReducers({
        pizzaList,
        orderList,
        selectedPizza
    }),
    applyMiddleware(logger),
);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
