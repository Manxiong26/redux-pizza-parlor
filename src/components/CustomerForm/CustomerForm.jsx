import {useHistory} from 'react-router-dom';

function CustomerForm (){

    function handleSubmit(event){
        event.PreventDefault();
        history.push('/checkout');
        console.log('inside handleSubmit on CustomerForm');
    }
    return(
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
    )
}
export default CustomerForm;