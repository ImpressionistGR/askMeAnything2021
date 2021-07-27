import React, {useState} from 'react';
import logo from '../logo.png';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import {Button, Container, Row, Col, FormControl, Dropdown, Form} from "react-bootstrap";
import LoginModal from "./LoginModal";
import SignupModal from "./SignupModal";
import {Link, useHistory} from "react-router-dom";
import {getCookie} from "../cookies";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import axios from "axios";
import {forEach} from "react-bootstrap/ElementChildren";




function LandingPage () {
    const [loginShow, setLoginShow] = useState(false)
    const [signupShow, setSignupShow] = useState(false)



    const history = useHistory()

    let questionId = 0  //variable for sumbitting on the right question Id

    if(getCookie('username') !== '' && getCookie('auth') === 'yes') history.push('/home')
    else document.cookie = 'auth=no'


    function answer() {
        console.log('function answer says hi')
        console.log(questionId)
    }

    class AnswerForm extends React.Component{
        constructor(props) {
            super(props);

            this.state = { text: ''}

            this.handleChangeText = this.handleChangeText.bind(this)

            this.handleSubmit = this.handleSubmit.bind(this)
        }


        handleChangeText(event){
            this.setState({text: event.target.value})
        }


        handleSubmit(event){
            if(!this.state.text.trim()){
                alert('empty answers are not any helpful')
            }
            else{
                answer()
            }
            event.preventDefault();
        }


        render() {
            return (
                <Form onSubmit={this.handleSubmit}>
                    <Row>
                        <FormControl as="textarea" value={this.state.text} onChange={this.handleChangeText} placeholder="Your answer here..." style={{margin:"15px", height:"100px"}}/>
                    </Row>
                    <Row style={{margin:"0px"}}>
                        <Button type="submit" variant="light" className="border-dark">Submit</Button>
                        &nbsp; &nbsp;
                    </Row>
                </Form>
            )
        }
    }


    class Questions extends React.Component {
        constructor(props) {
            super(props);

            this.state = {questions: []}
            this.showAnswers = this.showAnswers.bind(this)
        }



        componentDidMount() {
            axios.post('/getQuestions').then(response => {
                //console.log(response.data)
                response.data.forEach(question =>{
                    question.answer = false
                    question.answersList = []
                })
                this.setState({questions: response.data})

                //console.log("questions after change")
                console.log(this.state.questions)

            })

            axios.post('/getAnswers').then(response => {
                console.log(response.data)

                response.data.forEach(answer => {
                    for(let i in this.state.questions){
                        if(this.state.questions[i].idquestion === answer.question_idquestion){
                            this.state.questions[i].answersList.push(answer)
                        }
                    }
                })

            })

            //this.state.question.answersList = []
            //console.log(this.state.questions)
        }


        showAnswers(id) {
            console.log(id)
            for(let i in this.state.questions){
                if(this.state.questions[i].idquestion === id){
                    if(this.state.questions[i].answer === true){
                        this.state.questions[i].answer = false
                        this.forceUpdate()
                    }
                    else if(this.state.questions[i].answer === false){
                        this.state.questions[i].answer = true
                        this.forceUpdate()
                    }
                }
            }
        }


        render() {
            return(
                <div style={{textAlign:"left"}}>
                    <p className="red-header" style={{borderRadius:"10px"}}><p className="white-banner font-weight-bold">Questions Overview</p></p>
                    {this.state.questions.map(question => <p onClick={() => {
                        const id = question.idquestion
                        this.showAnswers(id)}
                    } className="questions text-dark">
                        <p className="font-weight-bold" style={{fontSize:"20px"}}>
                            {question.title}
                        </p>

                        <p className="question-text">{question.text}</p>
                        <br/>
                        <p className="question-author">Author: {question.username} &nbsp; &nbsp; &nbsp; Email: {question.email}</p>
                        <p className="question-author" style={{float:"right"}}>Date: {question.timestamp.substring(0, 10) }</p>

                        <div style={{cursor:"auto"}} onClick={() => {
                            const id = question.idquestion
                            this.showAnswers(id)}}>

                            {question.answer &&
                            <br/>
                            }
                            {question.answer &&
                            <p className="font-weight-bold">Answers:</p>
                            }
                            {question.answer &&
                            <Container>{question.answersList.map(answer => <Row><div style={{margin:"10px"}} className="question-text">
                                    {answer.text}
                                    <br/>
                                    <br/>
                                    <p className="question-author">Author: {answer.username} &nbsp; &nbsp; &nbsp; Email: {answer.email}</p>
                                    <p className="question-author" style={{float:"right"}}>&nbsp; &nbsp; &nbsp;Date: {question.timestamp.substring(0, 10) }</p>
                                </div>
                                </Row>
                            )}</Container>
                            }
                            {question.answer &&
                            <br/>
                            }
                            {question.answer &&
                            <Button variant="danger" className="border-dark" onClick={() => {
                                const id = question.idquestion
                                this.showAnswers(id)}}>Close</Button>
                            }
                        </div>

                    </p>
                    )}
                </div>
            )
        }
    }

    return (
        <div className="App">
            <LoginModal myShow={loginShow} onClose={() => {setLoginShow(false)}}/>
            <SignupModal myShow={signupShow} onClose={() => {setSignupShow(false)}}/>
            <div className="App-header">
                <Container>
                    <Row>
                        <Col sm={3.5}>
                            <Link className="nav-link text-dark text-decoration-none" to="/" style={{marginTop:"5px"}}>
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
                            <Button variant="danger" className="border-dark login-signup-buttons" onClick={() => {setSignupShow(true)}}>Sign up</Button>
                            <Button variant="light" className="border-dark login-signup-buttons" onClick={() => {setLoginShow(true)}}>Log in</Button>
                        </Col>
                    </Row>
                </Container>
            </div>

            <div className="red-header">
                <Container>
                        <Row className="font-weight-bold" style={{justifyContent:"center"}}>
                            <p className="white-banner">Log in or sign up to ask and answer !</p>
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

export default LandingPage;
