import React, {useState} from 'react';
import logo from '../logo.png';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import {Button, Container, Row, Col, FormControl, InputGroup} from "react-bootstrap";
import LoginModal from "./LoginModal";
import SignupModal from "./SignupModal";
import {Link} from "react-router-dom";


function LandingPage () {
    const [loginShow, setLoginShow] = useState(false)
    const [signupShow, setSignupShow] = useState(false)


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

            <div className="red-header table-responsive">
                <Container>
                        <Row className="font-weight-bold" style={{display:"inline-block", backgroundColor:"white", borderRadius:"10px", padding:"7px", marginTop:"8px"}}>
                            Log in or sign up to ask and answer !
                        </Row>
                </Container>
            </div>


            <Container>
                <Row>
                    <Col style={{margin:"20px", borderRight:"1px solid black"}} className="restOfPage">
                        <InputGroup className="w-100">
                            <FormControl/>
                            <Button variant="light" className="border-dark">Search</Button>
                        </InputGroup>
                    </Col>
                    <Col style={{margin:"20px"}} className="restOfPage">
                        <InputGroup className="w-100">
                            <FormControl/>
                            <Button variant="light" className="border-dark">Search</Button>
                        </InputGroup>
                    </Col>
                </Row>
            </Container>

        </div>
    )
}

export default LandingPage;
