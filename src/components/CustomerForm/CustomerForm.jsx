import {useHistory} from 'react-router-dom';
import {useSelector} from 'react-redux';
import {useState} from 'react';

function CustomerForm (){

    const [customerName, setCustomerName] = useState('');
    const [streetAddress, setStreetAddress] = useState('');
    const [city, setCity] = useState('');
    const [zip, setZip] = useState('');

    const reduxStore = useSelector(store => store);
    const history = useHistory();

    function handleSubmit(event){
        event.preventDefault();
        history.push('/checkout');
        console.log('inside handleSubmit on CustomerForm');
    }
    return(
        <div>
            <h1>Prime Pizza</h1>
            <p>Total {reduxStore.total}</p>
            <br />
            <h2>Step: 2 Customer Information</h2>
            <form >
                <input
                    required
                    placeholder='Name'
                    value={customerName}
                    onChange = {(event) => setCustomerName(event.target.value)}
                />
                <input
                    required
                    placeholder='Street Address'
                    value={streetAddress}
                    onChange = {(event) => setStreetAddress(event.target.value)}
                />
                <input
                    required
                    placeholder='City'
                    value={city}
                    onChange = {(event) => setCity(event.target.value)}
                />
                <input
                    required
                    placeholder='Zipcode'
                    value={zip}
                    onChange = {(event) => setZip(event.target.value)}
                />
                <button onClick={handleSubmit}>Next</button>
            </form>
        </div>
    )
}
export default CustomerForm;