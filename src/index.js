import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

//1 I know that I will be using react-router, so importing it here (also install is needed because its not in package.json)
import { BrowserRouter as Router } from 'react-router-dom'

ReactDOM.render(
    <Router>
        <App />
    </Router>
, document.getElementById("root"));
