import React, { useState } from "react";
import { Link, Route, Switch } from 'react-router-dom'
import Form from './components/Form'
import HomePage from './components/HomePage'
import Confirmation from './components/Confirmation'

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
const initPizzaValue=[];
const initDisabled= true;

const App = () => {
  const [pizza, setPizza]=(initPizzaValue)
  const [formValues, setFormValues] = useState(initFormValues)
  const [disabled, setDisabled] = useState(initDisabled)
  const inputChange = (name, value) => {
    setFormValues({...formValues, [name]:value})
  }
  
  const handleSubmit = () =>{

  };
  
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
          <Confirmation/>  
        </Route>
        <Route path="/pizza" >
          <Form values={formValues} change={inputChange} submit={handleSubmit} disabled={disabled}/>
        </Route>
        <Route path="/">
          <HomePage/>
        </Route>
      </Switch>

    </>
  );
};
export default App;
