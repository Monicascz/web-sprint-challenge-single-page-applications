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

const App = () => {
  const [formValues, setFormValues] = useState(initFormValues)

  const inputChange = (name, value) => {
    setFormValues({...formValues, [name]:value})
  }
  
  
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
          <Form values={formValues} change={inputChange}/>
        </Route>
        <Route path="/">
          <HomePage/>
        </Route>
      </Switch>

    </>
  );
};
export default App;
