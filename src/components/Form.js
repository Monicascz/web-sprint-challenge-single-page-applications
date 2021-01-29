import React from 'react'
import {Route} from 'react-router-dom'

export default function Form(props) {
    const { values, change, submit, disabled, errors, pizzaOrder } = props
   
    const onchange = (evt) => {
        const { name, value, type, checked} = evt.target;
        const valueToUse= type === 'checkbox' ? checked : value;
        change(name, valueToUse);    
    }

    const onSubmit=(evt)=>{
        evt.preventDefault();
        submit();
    }

    
    
    return (
        <div>
            <h1>Cowabunga! </h1>
            <h2> Build Your Pizza</h2>
            <p> [Insert Image Here]</p>
            <p>----------------------------------</p>
            <h3> Build Your Own Pizza</h3>
            <form onSubmit={onSubmit}>
                <div>
                    <h4>Name for Your Order</h4>
                </div>
                <label>
                    <input name="ordername" type='text' value={values.name} onChange={onchange} placeholder="Your Name"></input>
                </label>
                <p>----------------------------------</p>
                {/* //////// SIZE DROPDOWN /////////// */}
                <div>
                    <h4>Choice of Size</h4>
                    <p>Required</p>
                </div>
                <label>
                     (required)
                    <br></br>
                    <select name="size" value={values.size} onChange={onchange}>
                        <option value=''>Select Your Pizza Size</option>
                        <option value='small'>Small</option>
                        <option value='med'>Medium</option>
                        <option value='large'>Large</option>
                    </select>
                </label>
                    <p>----------------------------------</p>
                {/* //////// SAUCE RADIO BUTTONS  /////////// */}
                <div>
                    <h4>Choice of Sauce</h4>
                    <p>Required</p>
                </div>
                <label> 
                    <input name="sauce" type='radio' value='ogred' checked={values.sauce === 'ogred'} onChange={onchange}></input>
                   Original Red: 
                </label>
                <br></br>
                <label> 
                    <input name="sauce" type='radio' value='garlic' checked={values.sauce === 'garlic'} onChange={onchange}></input>
                   Garlic Ranch: 
                </label>
                <label> 
                    <br></br>
                    <input name="sauce" type='radio' value='bbq' checked={values.sauce === 'bbq'} onChange={onchange}></input>
                  BBQ Sauce: 
                </label>
                <label> 
                    <br></br>
                    <input name="sauce" type='radio' value='spinach' checked={values.sauce === 'spinach'} onChange={onchange}></input>
                   Spinach Alfredo: 
                </label>
                    <p>----------------------------------</p>
                {/* //////// TOPPINGS CHECKBOXES  /////////// */}
                <div>
                    <h4>Add Toppings</h4>
                    <p>Choose up to 4</p>
                </div>
                <label>
                    <input type='checkbox' name='pepperoni' onChange={onchange} checked={values.pepperoni}></input>
                    Pepperoni
                </label>
                    <br></br>
                    <label>
                    <input type='checkbox' name='sausage' onChange={onchange} checked={values.sausage}></input>
                    Sausage
                </label>
                    <br></br>
                    <label>
                    <input type='checkbox' name='caBacon' onChange={onchange} checked={values.caBacon}></input>
                    Canadian Bacon
                </label>
                    <br></br>
                    <label>
                    <input type='checkbox' name='spicySausage' onChange={onchange} checked={values.spicySausage}></input>
                    Spicy Sausage
                </label>
                    <p>----------------------------------</p>
                {/* //////// SPECIAL INSTRUCTIONS TEXT BOX  /////////// */}
                <div>
                    <h4>Special Instructions</h4>
                </div>
                <label>
                    <input name="instructions" type='text' value={values.instructions} onChange={onchange} placeholder="Anything else you'd like to add?"></input>
                </label>
                <p>----------------------------------</p>
                <br></br>
                <div className ="errors">
                    <div>{errors.name}</div>
                    <div>{errors.size}</div>
                    <div>{errors.sauce}</div>
                </div>
                <button disabled={disabled} onClick={<Route path='/pizza/confirmation'/>}> Add to Order     $17.99</button>

            </form>
            {
                pizzaOrder.map(order =>{
                    return( 
                    <div>
                        <h1>Name: {order.ordername}</h1>
                        <h1>Size: {order.size}</h1>
                        <h1>Toppings: {order.toppings}</h1>
                        <h1>Special Instructions: {order.instructions}</h1>
                        
                    </div>
                    )
                })
            }

        </div>
    )
}
// pepperoni: false,
//   sausage: false,
//   caBacon: false,
//   spicySausage: false,
////Text Input for Special Instructions
//instructions: ''
