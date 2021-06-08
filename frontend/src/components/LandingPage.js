import React, {Component, useState} from 'react';
import logo from '../logo.png';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import {Button, Container, Row, Col, Form, FormControl, InputGroup, Navbar, NavLink} from "react-bootstrap";
import LoginModal from "./LoginModal";
import SignupModal from "./SignupModal";


function LandingPage () {
    const [loginShow, setLoginShow] = useState(false)

    return (
        <div className="App">
            <div className="App-header">
                <Container>
                    <Row>
                        <Col>
                            <Navbar>
                                <NavLink className="text-dark">
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
                                </NavLink>
                            </Navbar>
                        </Col>
                        <Col>
                            <Button style={{float:"right", margin:"10px", marginTop:"30px"}} variant="danger" className="border-dark">Sign up</Button>
                            <Button style={{float:"right", margin:"10px", marginTop:"30px"}} variant="light" className="border-dark">Log in</Button>
                        </Col>
                    </Row>
                </Container>
            </div>

            <div className="red-header table-responsive">
                <Container>
                    <Row>
                        <Col>
                            <Button variant="light" className="border-dark" style={{margin:"10px", float:"center"}}>Ask a question</Button>
                        </Col>
                        <Col>
                            <Button variant="light" className="border-dark" style={{margin:"10px", float:"center"}}>Answer a question</Button>
                        </Col>
                    </Row>
                </Container>
            </div>


            <Container>
                <Row>
                    <Col style={{margin:"20px", borderRight:"1px solid black"}} className="restOfPage">
                        <InputGroup className="w-100">
                            <FormControl></FormControl>
                            <Button variant="light" className="border-dark">Search</Button>
                        </InputGroup>
                    </Col>
                    <Col style={{margin:"20px"}} className="restOfPage">
                        <InputGroup className="w-100">
                            <FormControl></FormControl>
                            <Button variant="light" className="border-dark">Search</Button>
                        </InputGroup>
                    </Col>
                </Row>
            </Container>

        </div>
    )
}

export default LandingPage;
