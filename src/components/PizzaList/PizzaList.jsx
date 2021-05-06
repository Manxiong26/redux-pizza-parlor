import axios from 'axios';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function PizzaList() {

    const dispatch = useDispatch();

    function getPizzaList() {

        axios({
            method: 'GET',
            url: '/api/pizza',
        })
            .then((response) => {
                console.log('Getting pizzas from Database!', response);
                dispatch({ type: 'SET_PIZZA_LIST', payload: response.data })
            })
            .catch(error => {
                console.log('Error getting pizzas from Database.', error);
                alert('Error with GET');
            })
    }

    useEffect(() => {
        console.log('In useEffect');
        getPizzaList();
    }, []);
}
