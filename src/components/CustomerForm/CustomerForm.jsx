import {useHistory} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {useState} from 'react';
import PizzaItem from '../PizzaItem/PizzaItem';

function CustomerForm (pizza){

    const [customerName, setCustomerName] = useState('');
    const [streetAddress, setStreetAddress] = useState('');
    const [city, setCity] = useState('');
    const [zip, setZip] = useState('');

    const selectedPizza = useSelector( store => store.selectedPizza );
    const history = useHistory();
    const dispatch = useDispatch();

    function handleSubmit(event){
        event.preventDefault();
        history.push('/checkout');
        console.log('inside handleSubmit on CustomerForm');
        dispatch({
            type: 'SET_SELECTED_PIZZA',
            payload: { property: 'name', value: pizza.name }
        })

    }
    return(
        <div>
            <h1>Prime Pizza</h1>
            <p key={pizza.id}>Total: ${selectedPizza.price}</p>
            {/* <PizzaItem key={pizza.id} pizza={pizza.price}/> */}
            <br />
            <h2>Step: 2 Customer Information</h2>
            <form >
                <input
                    required
                    placeholder='Name'
                    value={customerName}
                    onChange = {(event) => setCustomerName(event.target.value)}
                /> <br /><br />
                <input
                    required
                    placeholder='Street Address'
                    value={streetAddress}
                    onChange = {(event) => setStreetAddress(event.target.value)}
                /> <br /><br />
                <input
                    required
                    placeholder='City'
                    value={city}
                    onChange = {(event) => setCity(event.target.value)}
                /> <br /><br />
                <input
                    required
                    placeholder='Zipcode'
                    value={zip}
                    onChange = {(event) => setZip(event.target.value)}
                /> <br /><br />
                <button onClick={handleSubmit}>Next</button>
            </form>
        </div>
    )
}
export default CustomerForm;