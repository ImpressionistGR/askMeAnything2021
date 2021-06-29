import React, {useState} from 'react';
import logo from '../logo.png';
import user from '../user.png';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import {Button, Container, Row, Col, FormControl, InputGroup} from "react-bootstrap";
import {Link, useHistory} from "react-router-dom";


function LandingPage () {
    const [loginShow, setLoginShow] = useState(false)
    const [signupShow, setSignupShow] = useState(false)

    const history = useHistory();

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
                            <Link to="/">
                            <Button style={{float:"right", margin:"10px", marginTop:"30px"}} variant="danger" className="border-dark" >Log out</Button>
                            </Link>
                            <Button style={{float:"right", margin:"10px", marginTop:"30px"}} variant="light" className="border-dark" >
                                <img
                                    alt=""
                                    src={user}
                                    width="20"
                                    height="20"
                                />
                                <span  style={{marginLeft:"5px"}} className="font-weight-bold">@myask</span>
                                <span className="font-weight-bold" style={{color:"#e30000"}}>me</span>
                                <span className="font-weight-bold">anything</span>
                                <span className="font-weight-bold" style={{color:"#e30000"}}>2021</span>
                            </Button>
                        </Col>
                    </Row>
                </Container>
            </div>

            <div className="red-header table-responsive">
                <Container>
                    <Row>
                        <Col>
                            <Link to="/ask">
                                <Button type="submit" variant="light" className="border-dark" style={{margin:"10px", float:"center"}}>Ask a question</Button>
                            </Link>
                        </Col>

                        <Col>
                            <Link to="/answer">
                            <Button type="submit" variant="light" className="border-dark" style={{margin:"10px", float:"center"}}>Answer a question</Button>
                            </Link>
                        </Col>
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
