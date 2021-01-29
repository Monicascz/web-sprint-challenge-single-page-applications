import React, { useState, useEffect } from "react";
import { Link, Route, Switch } from 'react-router-dom'
import Form from './components/Form'
import HomePage from './components/HomePage'
import Confirmation from './components/Confirmation'
import * as yup from 'yup'
import schema from './validation/formSchema'
import axios from 'axios'

const initFormValues={
  //DropDown Size
  size: '', 
  //Radio Button Sauce
  sauce: '',
  //Checkbox Toppings
  pepperoni: false,
  sausage: false,
  caBacon: false,
  spicySausage: false,
  //Text Input for Special Instructions
  instructions: '',
    }

const initFormErrors = {
    size: '', 
    sauce: '',
    pepperoni: false,
    sausage: false,
    caBacon: false,
    spicySausage: false,
    instructions: '',
}

const initPizzaValue=[];
const initDisabled= true;

const App = () => {
  const [pizza, setPizza]=useState(initPizzaValue)
  const [formValues, setFormValues] = useState(initFormValues)
  const [disabled, setDisabled] = useState(initDisabled)
  const [formErrors, setFormErrors]= useState(initFormErrors)
  

  //posting our newPizza to the API and resetting the formValues to their initial value.
const postNewPizza = (newPizza) =>{
  axios.post('https://reqres.in/api/users', newPizza)
  .then((resp)=>{
    setPizza([resp.data, ...pizza]);
        setFormValues(initFormValues);
  })
  .catch((err)=>{
    console.log(err, "Pizza Error")
  })
}// closing tag for postNewPizza

//checking for errors in the form using yup, and then setting the changes to the form to state. 
const inputChange = (name, value) => {
  yup.reach(schema, name)
  .validate(value)
  //if the form is filled out properly, form Errors are empty
  .then(()=>{
    setFormErrors({...formErrors, [name]:''})
  })
  //if the form is not filled out properly, errors are the respective error msg
  .catch((err)=>{
    setFormErrors({...formErrors, [name]: err.errors[0]})
  })

  setFormValues({...formValues, [name]:value})
};
  
const submitForm = () =>{
  const newPizza={
    size: formValues.size, 
    sauce: formValues.sauce,
    toppings:['pepperoni', 'sausage', 'caBacon', 'spicySausage'].filter(topping => formValues[topping]),
    instructions: formValues.instructions.trim(),
  }
  postNewPizza(newPizza)
  };

  useEffect(()=>{
    schema.isValid(formValues).then(valid =>{
      setDisabled(!valid)
    })
  }, [formValues])
  
  return (
    <>
      <nav className="navBar">
        <h1>Lambda Eats</h1>
        <div className="navLinks"> 
          <Link to="/"> Home </Link>
          <Link to="#"> Help </Link>
        </div> 
      </nav> 
      <Switch>
        <Route path="/pizza/confirmation">
          <Confirmation pizzaOrder={pizza}/>  
        </Route>
        <Route path="/pizza" >
          <Form values={formValues} change={inputChange} submit={submitForm} disabled={disabled} errors={formErrors} pizzaOrder={pizza}/>
        </Route>
        <Route path="/">
          <HomePage />
        </Route>
      </Switch>

    </>
  );
};
export default App;
