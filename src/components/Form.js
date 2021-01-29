import React from 'react'

export default function Form(props) {
    const { values, change } = props
    const onchange = (evt) => {
        const { name, value} = evt.target;
        change(name, value);

    }
    
    return (
        <div>
            <h1>Cowabunga! </h1>
            <h2> Build Your Pizza</h2>
            <p> [Insert Image Here]</p>
            <h4> Build Your Own Pizza</h4>
            <form>
                <label>
                    Choice of Size (required)
                    <br></br>
                    <select name="size" value={values.size} onChange={onchange}>
                        <option value=''>Select Your Pizza Size</option>
                        <option value='small'>Small</option>
                        <option value='med'>Medium</option>
                        <option value='large'>Large</option>
                    </select>
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
