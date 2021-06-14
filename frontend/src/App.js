import React, {Component, useState} from 'react';
import logo from './logo.png';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import {Button, Container, Row, Col, Form, FormControl, InputGroup, Navbar, NavLink} from "react-bootstrap";
import LandingPage from "./components/LandingPage";
import LoginModal from "./components/LoginModal";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import AskQuestion from "./components/AskQuestion";
import MyAskMeAnything from "./components/MyAskMeAnything";


function App () {


    return(
        <Router>
            <Switch>
                <Route exact path="/" component={LandingPage}></Route>
                <Route path="/ask" component={AskQuestion}></Route>
                <Route path="/home" component={MyAskMeAnything}></Route>
            </Switch>

        </Router>

    )
}

export default App;
