import React, {useState} from 'react';
import logo from '../logo.png';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import {Button, Container, Row, Col, FormControl} from "react-bootstrap";
import LoginModal from "./LoginModal";
import SignupModal from "./SignupModal";
import {Link, useHistory} from "react-router-dom";
import {getCookie} from "../cookies";


function LandingPage () {
    const [loginShow, setLoginShow] = useState(false)
    const [signupShow, setSignupShow] = useState(false)

    const history = useHistory()

    if(getCookie('username') !== '' && getCookie('auth') === 'yes') history.push('/home')
    else document.cookie = 'auth=no'


    return (
        <div className="App">
            <LoginModal myShow={loginShow} onClose={() => {setLoginShow(false)}}/>
            <SignupModal myShow={signupShow} onClose={() => {setSignupShow(false)}}/>
            <div className="App-header">
                <Container>
                    <Row>
                        <Col>
                            <Link className="nav-link text-dark text-decoration-none" to="/" style={{marginTop:"5px"}}>
                                <img
                                    alt=""
                                    src={logo}
                                    width="65"
                                    height="65"
                                />
                                <span  style={{marginLeft:"5px"}} className="font-weight-bold">@ask</span>
                                <span className="font-weight-bold" style={{color:"#e30000"}}>me</span>
                                <span className="font-weight-bold">anything</span>
                                <span className="font-weight-bold" style={{color:"#e30000"}}>2021</span>
                            </Link>
                        </Col>
                        <Col>
                            <Button style={{float:"right", margin:"10px", marginTop:"30px"}} variant="danger" className="border-dark" onClick={() => {setSignupShow(true)}}>Sign up</Button>
                            <Button style={{float:"right", margin:"10px", marginTop:"30px"}} variant="light" className="border-dark" onClick={() => {setLoginShow(true)}}>Log in</Button>
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


            <div>
            <Container>
                <Row>
                    <Col style={{margin:"20px", marginRight:"15px", borderRight:"1px solid black"}} className="restOfPage">
                        <div style={{display:"inline-block", borderBottom:"1px solid black", padding:"25px"}}>
                            <Row>
                                <p className="font-weight-bold" style={{fontSize:"18px"}}>Questions per keyword</p>
                            </Row>
                            <Row>
                                <FormControl style={{width:"30vw"}}/>
                                <Button style={{marginLeft:"10px"}} variant="light" className="border-dark">Search</Button>
                            </Row>
                        </div>
                    </Col>
                    <Col style={{margin:"20px", marginLeft:"0px"}} className="restOfPage">
                        <div style={{display:"inline-block", borderBottom:"1px solid black", padding:"25px"}}>
                        <Row>
                            <p className="font-weight-bold" style={{fontSize:"18px"}}>Questions per day</p>
                        </Row>
                        <Row>
                            <FormControl style={{width:"30vw"}}/>
                            <Button style={{marginLeft:"10px"}} variant="light" className="border-dark">Search</Button>
                        </Row>
                        </div>
                    </Col>
                </Row>
            </Container>
            </div>

        </div>
    )
}

export default LandingPage;
