import { useDispatch } from 'react-redux';
import {useHistory} from 'react-router-dom'


function PizzaItem({pizza}) {

const history = useHistory();
const dispatch = useDispatch();

const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Picked Pizza Clicked');
    history.push('/CustomerForm')
    dispatch({
        type: 'SET_SELECTED_PIZZA',
        payload: { property: 'price', value: pizza.price }
        
    })
}

    return (
        <>
            <div key={pizza.id}>
                <p>{pizza.name}</p>
                <p>{pizza.description}</p>
                <p>{pizza.price}</p>
                <img src={pizza.image_path}/>
            </div>
            <button type="submit" onClick={handleSubmit}>Pick This Pizza</button>
        </>
    )
}

export default PizzaItem;