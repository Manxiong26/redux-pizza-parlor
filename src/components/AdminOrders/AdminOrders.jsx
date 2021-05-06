import {useSelector} from 'react-redux';

function AdminOrders(){

    const reduxStore = useSelector(store => store);

    return(
        <section>
            <h1>Prime Pizza Orders</h1>
            <table>
                <thead>
                    <td>Name</td>
                    <td>Time Order Was Placed</td>
                    <td>Type</td>
                    <td>Total Cost</td>
                </thead>
                <tr>
                    <td>{reduxStore.customer_name}</td>
                    <td>{reduxStore.time}</td>
                    <td>{reduxStore.type}</td>
                    <td>{reduxStore.total}</td>
                </tr>
            </table>
        </section>
    )
}
export default AdminOrders;