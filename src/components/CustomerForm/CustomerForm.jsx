import {useHistory} from 'react-router-dom';
import {useSelector} from 'react-redux';

function CustomerForm (){

    const reduxStore = useSelector(store => store);
    const history = useHistory();

    function handleSubmit(event){
        event.PreventDefault();
        history.push('/checkout');
        console.log('inside handleSubmit on CustomerForm');
    }
    return(
        <div>
            <h1>Prime Pizza</h1>
            <p>Total {reduxStore.total}</p>
            <br />
            <h2>Step: 2 Customer Information</h2>
            <form>
                <input
                    required
                    placeholder='Name'
                    value={customer_name}
                />
                <input
                    required
                    placeholder='Street Address'
                    value={street_address}
                />
                <input
                    required
                    placeholder='City'
                    value={city}
                />
                <input
                    required
                    placeholder='Zipcode'
                    value={zip}
                />
                <button onClick={handleSubmit}>Next</button>
            </form>
        </div>
    )
}
export default CustomerForm;