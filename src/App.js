import React, { useState } from 'react';
import ReactDOM from "react-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
// import { BrowserRouter as Router, Route, Routes, Link, Switch} from 'react-router-dom';
import { BrowserRouter, BrowserRouter as Router } from "react-router-dom";
import { Switch, Route, Routes, Link } from "react-router-dom";
import ListEmployeeComponent from './component/ListEmployeeComponent';
import HeaderComponent from './component/HeaderComponent';
import UpdateEmployeeComponent from './component/UpdateEmployeeComponent';
import CreateEmployeeComponent from './component/CreateEmployeeComponent';
import FooterComponent from './component/FooterComponent';
import ViewEmployeeComponent from './component/ViewEmployeeComponent';
import './App.css';

function App() {
        return (
                <div class="bgv">

                      <HeaderComponent /> 
                        <nav class="navbar navbar-expand-sm bg-light navbar-light" >
                                <ul class="navbar-nav">
                                <li class="nav-item active">
                                <a class="nav-link" href="/add-employee/:id">Add</a>
                                </li>
                                <li class="nav-item">
                                <a class="nav-link" href="/update-employee/:id">Update</a>
                                </li>
                                <li class="nav-item">
                                <a class="nav-link" href="/employees">View</a>
                                </li>
                                <li class="nav-item">
                                <a class="nav-link disabled" href="#">Disabled</a>
                                </li>
                                </ul>
                                </nav>

                        <Router >
                                {/* <Routes> */}
                                        
                                       
                                        {/* <div className="container"> */}
                                                <Switch> 
                                                <Route exact path="/" component={ListEmployeeComponent}></Route>
                                                <Route  path="/employees" component={ListEmployeeComponent} />
                                                <Route path="/add-employee/:id" component={CreateEmployeeComponent}></Route>
                                                {/* <Route path = "/view-employee/:id" component = {ViewEmployeeComponent}></Route> */}
                                                <Route path = "/update-employee/:id" component = {UpdateEmployeeComponent}></Route>
                                                <Route path = "/view-employee/:id" component = {ViewEmployeeComponent}></Route>
                                                </Switch>
                                        {/* </div> */}
                                        <FooterComponent />
                                        
                                {/* </Routes> */}
                        </Router>
                </div>
               

        );
}
export default App;
