import React from 'react';
import logo from '../logo.png';
import 'jaaulde-cookies'
import user from '../user.png';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import {Button, Container, Row, Col, FormControl, InputGroup, DropdownButton, Dropdown} from "react-bootstrap";
import {Link, useHistory} from "react-router-dom";
import {getCookie} from "../cookies";



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
                            <Button style={{float:"right", margin:"10px", marginTop:"30px"}} variant="danger" className="border-dark" onClick={logout}>Log out</Button>
                            </Link>
                            <Dropdown  style={{float:"right", margin:"10px", marginTop:"30px"}} variant="light" className="border-dark" >
                                <Dropdown.Toggle variant="light" className="border-dark" bsPrefix="p-2">
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
                                <Button type="submit" variant="primary" className="border-dark" style={{margin:"10px", float:"center"}}>Ask a question</Button>
                            </Link>
                        </Col>

                        <Col>
                            <Link to="/answer">
                            <Button type="submit" variant="primary" className="border-dark" style={{margin:"10px", float:"center"}}>Answer a question</Button>
                            </Link>
                        </Col>
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

export default MyAskMeAnything;
