import React from 'react';
import logo from '../logo.png';
import 'jaaulde-cookies'
import user from '../user.png';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import {Button, Container, Row, Col, FormControl, InputGroup, DropdownButton, Dropdown} from "react-bootstrap";
import {Link, useHistory} from "react-router-dom";
import {getCookie} from "../cookies";
import axios from "axios";



function MyAskMeAnything () {
    const history = useHistory();

    function logout() {
        console.log('cookie: ' + document.cookie)
        document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    }


    //const auth = cookies.get('auth')
    if(getCookie('auth') === 'no' || getCookie('auth') === ''){
        history.push('/')
    }

    class Questions extends React.Component {
        constructor(props) {
            super(props);

            this.state = {questions: []}
        }



        componentDidMount() {
            axios.post('/getQuestions').then(response => {
                //console.log(response.data)
                this.setState({questions: response.data})

                //console.log("questions after change")
                console.log(this.state.questions)

            })
        }





        render() {
            return(
                <div style={{textAlign:"left"}}>
                    <p className="red-header" style={{borderRadius:"10px"}}><p className="white-banner font-weight-bold">Questions Overview</p></p>
                    {this.state.questions.map(question => <p className="questions text-dark">
                        <p className="font-weight-bold" style={{fontSize:"20px"}}>
                            {question.title}
                        </p>

                        <p className="question-text">{question.text}</p>
                        <br/>
                        <p className="question-author">Author: {question.username} &nbsp; &nbsp; &nbsp; Email: {question.email}</p>
                        <p className="question-author" style={{float:"right"}}>Date: {question.timestamp.substring(0, 10) }</p>
                    </p>)}
                </div>
            )
        }
    }


    return (
        <div className="App">
            <div className="App-header">
                <Container>
                    <Row>
                        <Col>
                            <Link className="nav-link text-dark text-decoration-none" to="/home" style={{marginTop:"5px"}}>
                                <img
                                    alt=""
                                    src={logo}
                                    className="App-logo"
                                />
                                <span  style={{marginLeft:"5px"}} className="font-weight-bold">@ask</span>
                                <span className="font-weight-bold" style={{color:"#e30000"}}>me</span>
                                <span className="font-weight-bold">anything</span>
                                <span className="font-weight-bold" style={{color:"#e30000"}}>2021</span>
                            </Link>
                        </Col>
                        <Col>
                            <Link to="/">
                                <Button variant="danger" className="border-dark login-signup-buttons" onClick={logout}>Log out</Button>
                            </Link>
                            <Dropdown  variant="light" className="border-dark">
                                <Dropdown.Toggle $enable variant="light" className="border-dark my-ask-button" >
                                <img
                                    alt=""
                                    src={user}
                                    width="20"
                                    height="20"
                                />
                                <span  style={{marginLeft:"5px"}} className="font-weight-bold my-ask-text">@myask</span>
                                <span className="font-weight-bold my-ask-text" style={{color:"#e30000"}}>me</span>
                                <span className="font-weight-bold my-ask-text">anything</span>
                                <span className="font-weight-bold my-ask-text" style={{color:"#e30000"}}>2021</span>
                                </Dropdown.Toggle>
                                <Dropdown.Menu className="border-dark">
                                    <Dropdown.Item>Hello {getCookie('username')} !</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </Col>
                    </Row>
                </Container>
            </div>

            <div className="red-header table-responsive">
                <Container>
                    <Row>
                        <Col>
                            <Link to="/ask">
                                <Button type="submit" variant="primary" className="border-dark ask-answer-buttons">Ask a question</Button>
                            </Link>
                        </Col>

                        <Col>
                            <Link to="/answer">
                            <Button type="submit" variant="primary" className="border-dark ask-answer-buttons" >Answer a question</Button>
                            </Link>
                        </Col>
                    </Row>
                </Container>
            </div>


            <Container style={{marginTop:"20px", height:"300vh"}}>
                <Row>
                    <Col sm={4}>
                        <div className="red-header" style={{borderRadius:"10px"}}>
                            <p className="white-banner font-weight-bold">Charts</p>
                        </div>
                    </Col>
                    <Col sm={8}>
                        <div className="red-header" style={{borderRadius:"10px"}}>
                            <Questions/>
                        </div>
                    </Col>
                </Row>
            </Container>

        </div>
    )
}

export default MyAskMeAnything;
