import * as yup from 'yup'

export default yup.object().shape({

   
//DropDown Size
size: yup
.string()
.oneOf(['small', 'med', 'large'], "Please select a Pizza Size"), 
//Radio Button Sauce
sauce: yup
.string()
.oneOf(['ogred', 'garlic', 'bbq', 'spinach'], 'Please select a Pizza Sauce'),
//Checkbox Toppings
pepperoni: yup.boolean(),
sausage: yup.boolean(),
caBacon: yup.boolean(),
spicySausage: yup.boolean(),
//Text Input for Special Instructions
instructions: yup
.string(),


})// closing tag for entire yup object