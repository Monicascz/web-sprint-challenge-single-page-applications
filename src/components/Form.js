import React from 'react'

export default function Form() {
    return (
        <div>
            <h1>Cowabunga! </h1>
            <h2> Build Your Pizza</h2>
            <p> [Insert Image Here]</p>
            <h4> Build Your Own Pizza</h4>
            <form>
                <label>
                    Select Your Pizza Size
                    <select name="size" ></select>
                </label>
            </form>
        </div>
    )
}
//Shape of Form
////DropDown Size
//size: '' 
////Radio Button Sauce
//sauce: ''
//Checkbox Toppings
//top-pepperoni: false
//top-sausage: false
//top-caBacon: false
//top-spicy-sausage: false
////Text Input for Special Instructions
//instructions: ''
