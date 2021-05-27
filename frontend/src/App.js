import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, {useState} from 'react'
import * as RB from "react-bootstrap";
import logo from "./logo_enlarged.png";


function App() {
    const [showLogin, setShowLogin] = useState(false);
    const [showSignup, setShowSignup] = useState(false);

    const handleCloseLogin = () => setShowLogin(false);
    const handleShowLogin = () => setShowLogin(true);

    const handleCloseSignup = () => setShowSignup(false);
    const handleShowSignup = () => setShowSignup(true);

    return (
        <div className="App">
            <RB.Modal show={showLogin}>
                <RB.Modal.Header style={{backgroundColor:"#abfcff", width:"100%"}} className={"mr-auto"}>
                    <RB.Modal.Title>
                        <img
                            alt=""
                            src={logo}
                            width="50"
                            height="50"
                            className="d-inline-block align-top"
                        />{' '}
                        <span className="font-weight-bold">@ask</span>
                        <span className="font-weight-bold" style={{color: '#e30000'}}>me</span>
                        <span className="font-weight-bold">anything</span>
                        <span className="font-weight-bold" style={{color: '#e30000'}}>2021</span>
                    </RB.Modal.Title>
                </RB.Modal.Header>
                <RB.Modal.Body style={{backgroundColor:"#abfcff"}}>
                    <RB.Form>
                        <RB.Form.Control placeholder={"username"} />
                        <RB.Form.Control placeholder={"password"} />
                    </RB.Form>
                </RB.Modal.Body>
                <RB.Modal.Footer style={{backgroundColor:"#abfcff"}}>
                    <RB.Button variant="danger" onClick={handleCloseLogin}>Close</RB.Button>
                    <RB.Button variant="primary" onClick={handleCloseLogin}>Log in</RB.Button>
                </RB.Modal.Footer>
            </RB.Modal>

            <RB.Modal show={showSignup}>
                <RB.Modal.Header style={{backgroundColor:"#abfcff", width:"100%"}} className={"mr-auto"}>
                    <RB.Modal.Title>
                        <img
                            alt=""
                            src={logo}
                            width="50"
                            height="50"
                            className="d-inline-block align-top"
                        />{' '}
                        <span className="font-weight-bold">@ask</span>
                        <span className="font-weight-bold" style={{color: '#e30000'}}>me</span>
                        <span className="font-weight-bold">anything</span>
                        <span className="font-weight-bold" style={{color: '#e30000'}}>2021</span>
                    </RB.Modal.Title>
                </RB.Modal.Header>
                <RB.Modal.Body style={{backgroundColor:"#abfcff"}}>
                    <RB.Form>
                        <RB.Form.Control placeholder={"username"} />
                        <RB.Form.Control placeholder={"password"} />
                        <RB.Form.Control placeholder={"re-enter password"} />
                    </RB.Form>
                </RB.Modal.Body>
                <RB.Modal.Footer style={{backgroundColor:"#abfcff"}}>
                    <RB.Button variant="danger" onClick={handleCloseSignup}>Close</RB.Button>
                    <RB.Button variant="primary" onClick={handleCloseSignup}>Sign up</RB.Button>
                </RB.Modal.Footer>
            </RB.Modal>

            <RB.Navbar>
                <RB.Navbar.Brand href="#home" className="mr-auto">
                    <img
                        alt=""
                        src={logo}
                        width="50"
                        height="50"
                        className="d-inline-block align-top"
                    />{' '}
                    <span className="font-weight-bold">@ask</span>
                    <span className="font-weight-bold" style={{color: '#e30000'}}>me</span>
                    <span className="font-weight-bold">anything</span>
                    <span className="font-weight-bold" style={{color: '#e30000'}}>2021</span>
                </RB.Navbar.Brand>
                <RB.Button className="mr-sm-2 my-btn" onClick={handleShowLogin}>Log in</RB.Button>
                <RB.Button variant="outline-info my-btn2" onClick={handleShowSignup}>Sign up</RB.Button>
            </RB.Navbar>
            <nav className="navbar navbar-expand-sm navbar-light sticky-top" data-toggle="affix" style={{backgroundColor: '#ff6d6d'}}>
                <div className="mx-auto d-sm-flex d-block flex-sm-nowrap">
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample11" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"> </span>
                    </button>
                    <div className="collapse navbar-collapse text-center" id="navbarsExample11">
                        <ul className="navbar-nav">
                            <RB.Button className="mr-sm-5 my-btn3">Ask a question</RB.Button>
                            <RB.Button className="my-btn3">Answer a question</RB.Button>
                        </ul>
                    </div>
                </div>
            </nav>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="input-group" style={{padding: '15px'}}>
                            <input type="search" className="form-control rounded mr-sm-2" placeholder="Search" aria-label="Search"
                                   aria-describedby="search-addon" />
                            <button type="button" className="btn btn-outline-primary my-btn">search</button>
                        </div>
                        <RB.Nav defaultActiveKey="/home" className="flex-column">
                            <RB.Nav.Link href="/home">Active</RB.Nav.Link>
                            <RB.Nav.Link eventKey="link-1">Link</RB.Nav.Link>
                            <RB.Nav.Link eventKey="link-2">Link</RB.Nav.Link>
                            <RB.Nav.Link href="/home">Active</RB.Nav.Link>
                            <RB.Nav.Link eventKey="link-1">Link</RB.Nav.Link>
                            <RB.Nav.Link eventKey="link-2">Link</RB.Nav.Link>
                        </RB.Nav>
                    </div>
                    <div className="col">
                        <div className="input-group" style={{padding: '15px'}}>
                            <input type="search" className="form-control rounded mr-sm-2" placeholder="Search" aria-label="Search"
                                   aria-describedby="search-addon"/>
                            <button type="button" className="btn btn-outline-primary my-btn">search</button>
                        </div>
                        <RB.Nav defaultActiveKey="/home" className="flex-column">
                            <RB.Nav.Link href="/home">Active</RB.Nav.Link>
                            <RB.Nav.Link eventKey="link-1">Link</RB.Nav.Link>
                            <RB.Nav.Link eventKey="link-2">Link</RB.Nav.Link>
                            <RB.Nav.Link href="/home">Active</RB.Nav.Link>
                            <RB.Nav.Link eventKey="link-1">Link</RB.Nav.Link>
                            <RB.Nav.Link eventKey="link-2">Link</RB.Nav.Link>
                        </RB.Nav>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
