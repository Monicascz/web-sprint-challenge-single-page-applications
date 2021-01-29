import React from 'react'

export default function Form(props) {
    const { values, change } = props
    console.log("sauce1 ", values.sauce)
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
                {/* //////// SIZE DROPDOWN /////////// */}
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
                <br></br>
                <br></br>
                <br></br>
                {/* //////// SAUCE RADIO BUTTONS  /////////// */}
                <p>Choice of Sauce (required)</p>
                <label> 
                    <input name="sauce" type='radio' value='ogred' checked={values.sauce === 'ogred'} onChange={onchange}>
                    </input>
                   Original Red: 
                </label>
                <br></br>
                <label> 
                    <br></br>
                    <input name="sauce" type='radio' value='garlic' checked={values.sauce === 'garlic'} onChange={onchange}>
                    </input>
                   Garlic Ranch: 
                </label>
                <br></br>
                <label> 
                    <br></br>
                    <input name="sauce" type='radio' value='bbq' checked={values.sauce === 'bbq'} onChange={onchange}>
                    </input>
                  BBQ Sauce: 
                </label>
                <br></br>
                <label> 
                    <br></br>
                    <input name="sauce" type='radio' value='spinach' checked={values.sauce === 'spinach'} onChange={onchange}>
                    </input>
                   Spinach Alfredo: 
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
