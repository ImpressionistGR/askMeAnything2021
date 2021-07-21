import React, {useEffect} from 'react';
import logo from '../logo.png';
import user from '../user.png';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import {Button, Container, Row, Col, Form, FormControl, Dropdown} from "react-bootstrap";
import {Link, useHistory} from "react-router-dom";
import {getCookie} from "../cookies";
import axios from "axios";

function AnswerQuestion () {

    const history = useHistory();

    //const auth = cookies.get('auth')
    if(getCookie('auth') === 'no' || getCookie('auth') === ''){
        history.push('/')
    }

    function logout() {
        console.log('cookie: ' + document.cookie)
        document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
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
                <div>
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
                            <Dropdown variant="light" className="border-dark" >
                                <Dropdown.Toggle variant="light" className="border-dark my-ask-button">
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
                                    <Dropdown.Item>Username: {getCookie('username')}</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </Col>
                    </Row>
                </Container>
            </div>

            <div className="red-header">
                <Container>
                    <Row className="font-weight-bold" style={{justifyContent:"center"}}>
                        <p className="white-banner">Your answers are valuable!</p>
                    </Row>
                </Container>
            </div>


            <Container className="restOfPage" style={{height:"100%"}}>
                <div style={{border:"1px solid black", borderRadius:"10px", margin:"10px"}}>
                    <div className="font-weight-bold" style={{textAlign:"center", marginTop:"40px"}}>Search a question by title and keyword</div>
                <Form style={{display:"inline-block" ,width:"100%"}}>
                    <Row style={{ margin:"10px", marginTop:"25px"}}>
                        <FormControl placeholder="Keywords" />
                    </Row>
                    <Row style={{ margin:"10px"}}>
                        <FormControl placeholder="Question title"/>
                    </Row>
                    <div style={{float:"right"}}>
                    <Row>
                        <Button style={{ margin:"30px", width:"150px"}} type="submit" variant="light" className="border-dark">Search</Button>
                    </Row>
                    </div>

                </Form>
                </div>

                <div>
                    <Questions/>
                <Form>
                    <Row>
                        <FormControl as="textarea" placeholder="Your answer here..." style={{margin:"15px", height:"100px"}}/>
                    </Row>
                    <Row style={{margin:"0px"}}>
                        <Button type="submit" variant="light" className="border-dark">Submit</Button>
                        &nbsp; &nbsp;
                        <Button variant="danger" className="border-dark" onClick={()=>{history.push('/home')}}>Nevermind</Button>
                    </Row>
                </Form>
                </div>
            </Container>

        </div>
    )
}

export default AnswerQuestion;
