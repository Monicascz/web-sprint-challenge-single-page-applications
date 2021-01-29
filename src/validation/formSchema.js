import * as yup from 'yup'

export default yup.object().shape({
ordername: yup
.string()
.required('Your name is required to order')
.min(3, 'Please enter at least 3 characters for your name'),
   
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