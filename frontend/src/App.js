import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import LandingPage from "./components/LandingPage";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import AskQuestion from "./components/AskQuestion";
import AnswerQuestion from "./components/AnswerQuestion";
import MyAskMeAnything from "./components/MyAskMeAnything";


function App () {


    return(
        <Router>
            <Switch>
                <Route exact path="/" component={LandingPage}/>
                <Route path="/ask" component={AskQuestion}/>
                <Route path="/home" component={MyAskMeAnything}/>
                <Route path="/answer" component={AnswerQuestion}/>
            </Switch>

        </Router>

    )
}

export default App;
