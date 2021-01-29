import React from 'react'

export default function Confirmation(props) {
    const {pizzaOrder} = props;
    console.log('pizza', pizzaOrder)
    return (
        <div>
            {
                pizzaOrder.map(order =>{
                    return( 
                    <div>
                        <h1>{order.instructions}</h1>
                        <h1>{order.size}</h1>
                    </div>
                    )
                })
            }
        </div>
    )
}
