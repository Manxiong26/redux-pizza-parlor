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
            <p>Total {reduxStore.price}</p>
            <br />
            <h2>Step: 2 Customer Information</h2>
            <form>
                <input
                    required
                    placeholder='Name'
                    value={}
                />
                <input
                    required
                    placeholder='Street Address'
                    value={}
                />
                <input
                    required
                    placeholder='City'
                    value={}
                />
                <input
                    required
                    placeholder='Zipcode'
                    value={}
                />
                <button onClick={handleSubmit}>Next</button>
            </form>
        </div>
    )
}
export default CustomerForm;