const { default: axios } = require("axios")
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import PizzaList from '../PizzaList/PizzaList'

function Home(){

    const dispatch = useDispatch();

    useEffect(() => {
        console.log('in useEffect')
        getPizzaList();
        getOrder();
    }, [])

const getPizzaList = () => {
    axios.get('/api/pizza')
    .then((response) => {
        dispatch({type: 'SET_PIZZA_LIST', payload: response.data})
    })
    .catch((err) => {
        console.log(err);
    })
}
const getOrder = () =>{
    axios.get('/api/order')
    .then((response) => {
        dispatch({type: 'SET_ORDER', payload: response.data})
    })
    .catch((err) => {
        console.log(err);
    })
}

const addPizza = () => {
    axios.post('/api/pizza')
    .then((response) => {
        console.log(response);
        getPizzaList();
    })
    .catch((err) => {
        console.log(err);
    })
}

    return(
        <div>
            <h2>Add a Pizza</h2>
            <h2>Pizza List:</h2>
            <PizzaList addPizza={addPizza}/>
            
        </div>
    )
}

export default Home;