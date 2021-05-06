
function PizzaItem({pizza}) {
    return (
        <>
            <div key={pizza.id}>
                <p>{pizza.name}</p>
                <p>{pizza.description}</p>
                <p>{pizza.price}</p>
            </div>
        </>
    )
}

export default PizzaItem;