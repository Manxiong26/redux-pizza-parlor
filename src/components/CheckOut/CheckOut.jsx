import CustomerForm from '../CustomerForm/CustomerForm';
import { useDispatch, useSelector } from 'react-redux';



function CheckOut (pizza){

    const dispatch = useDispatch();
    const selectedPizza = useSelector( store => store.selectedPizza );

    return (
        <div>
            <h1>Prime Pizza</h1>
                <br/>
                <h2> Step 3: Check Out!!!!!!!!</h2>
                <p key={pizza.id}>{selectedPizza.name}</p>
                <h2 key={pizza.id}>Total: ${selectedPizza.price}</h2>
                {/* <h3><CustomerForm customerName={customerName}/></h3> */}
        </div>
    )
}

export default CheckOut;