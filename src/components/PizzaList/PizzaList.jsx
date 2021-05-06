import axios from 'axios';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PizzaItem from '../PizzaItem/PizzaItem';

function PizzaList() {

    //const dispatch = useDispatch();

    // function getPizzaList() {

    //     axios({
    //         method: 'GET',
    //         url: '/api/pizza',
    //     })
    //         .then((response) => {
    //             console.log('Getting pizzas from Database!', response);
    //             dispatch({ type: 'SET_PIZZA_LIST', payload: response.data })
    //         })
    //         .catch(error => {
    //             console.log('Error getting pizzas from Database.', error);
    //             alert('Error with GET');
    //         })
    // }

    const getPizzaList = () => {
    axios.get('/api/pizza')
    .then((response) => {
        dispatch({type: 'SET_PIZZA_LIST', payload: response.data})
    })
    .catch((err) => {
        console.log(err);
    })
}
// const addPizza = (newPizza) => {
//         axios.post('/api/pizza')
//         .then((response) => {
//             console.log(response);
//             getPizzaList();
//         })
//         .catch((err) => {
//             console.log(err);
//         })
//     }


    useEffect(() => {
        console.log('In useEffect');
        getPizzaList();
        addPizza()
    }, []);

    const pizzaList = useSelector( store => store.pizzaList );

    return (
        <>
            <div className="PizzaList">
                <ul>
                    {pizzaList.map((pizza, i) => {
                   return <PizzaItem key={i} pizza={pizza} /> 
                    })}
                </ul>
            </div>
        </>
    )
}



export default PizzaList;