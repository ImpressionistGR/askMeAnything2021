import React from 'react';
import logo from '../logo.png';
import user from '../user.png';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import {Button, Container, Row, Col, Form, FormControl} from "react-bootstrap";
import {Link} from "react-router-dom";


function LandingPage () {

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
                    <Row className="font-weight-bold" style={{display:"inline-block", backgroundColor:"white", borderRadius:"10px", padding:"7px", marginTop:"8px"}}>
                        Your answers are valuable!
                    </Row>
                </Container>
            </div>


            <Container className="restOfPage">
                <Form>
                    <Row style={{ marginTop:"25px"}}>
                        <Col>
                            <FormControl placeholder="Keywords" />
                        </Col>
                        <Col>
                            <FormControl placeholder="Question title"/>
                        </Col>
                        <Col>
                            <Button type="submit" variant="light" className="border-dark">Search</Button>
                        </Col>
                    </Row>
                </Form>



                <Form>
                    <Row>
                        <FormControl as="textarea" placeholder="Your answer here..." style={{margin:"15px", height:"100px"}}/>
                    </Row>
                    <Row style={{margin:"0px"}}>
                        <Button type="submit" variant="light" className="border-dark">Submit</Button>
                        &nbsp; &nbsp;
                        <Button variant="danger" className="border-dark">Nevermind</Button>
                    </Row>
                </Form>
            </Container>

        </div>
    )
}

export default LandingPage;
