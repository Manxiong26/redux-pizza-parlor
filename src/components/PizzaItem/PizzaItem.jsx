
function PizzaItem({pizza}) {

const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Picked Pizza Clicked');

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