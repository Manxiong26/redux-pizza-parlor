const { default: axios } = require("axios")
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

function Home(){

    const dispatch = useDispatch();

    useEffect(() => {
        console.log('in useEffect')
        getStudents();
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

    return(
        <div>
            <h2>Add a Pizza</h2>
            <h2>Pizza List:</h2>
        </div>
    )
}

export default Home;