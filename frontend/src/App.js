import './App.css';
import * as RB from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './logo_enlarged.png'
import {Container} from "react-bootstrap";

function App() {
  return (
    <div className="App" style={{backgroundColor: '#9CE7EC'}}>
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
        <RB.Button className="mr-sm-2 my-btn">Log in</RB.Button>
        <RB.Button variant="outline-info my-btn2">Sign up</RB.Button>
      </RB.Navbar>
        <nav className="navbar navbar-expand-sm navbar-light sticky-top" data-toggle="affix" style={{backgroundColor: '#ff6d6d'}}>
            <div className="mx-auto d-sm-flex d-block flex-sm-nowrap">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample11"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse text-center" id="navbarsExample11">
                    <ul className="navbar-nav">
                        <RB.Button className="mr-sm-5 my-btn3">Ask a question</RB.Button>
                        <RB.Button className="my-btn3">Answer a question</RB.Button>
                    </ul>
                </div>
            </div>
        </nav>
        <RB.Nav defaultActiveKey="/home" className="flex-column">
            <RB.Nav.Link href="/home">Active</RB.Nav.Link>
            <RB.Nav.Link eventKey="link-1">Link</RB.Nav.Link>
            <RB.Nav.Link eventKey="link-2">Link</RB.Nav.Link>
            <RB.Nav.Link href="/home">Active</RB.Nav.Link>
            <RB.Nav.Link eventKey="link-1">Link</RB.Nav.Link>
            <RB.Nav.Link eventKey="link-2">Link</RB.Nav.Link>
            <RB.Nav.Link href="/home">Active</RB.Nav.Link>
            <RB.Nav.Link eventKey="link-1">Link</RB.Nav.Link>
            <RB.Nav.Link eventKey="link-2">Link</RB.Nav.Link>
            <RB.Nav.Link href="/home">Active</RB.Nav.Link>
            <RB.Nav.Link eventKey="link-1">Link</RB.Nav.Link>
            <RB.Nav.Link eventKey="link-2">Link</RB.Nav.Link>
            <RB.Nav.Link href="/home">Active</RB.Nav.Link>
            <RB.Nav.Link eventKey="link-1">Link</RB.Nav.Link>
            <RB.Nav.Link eventKey="link-2">Link</RB.Nav.Link>
            <RB.Nav.Link href="/home">Active</RB.Nav.Link>
            <RB.Nav.Link eventKey="link-1">Link</RB.Nav.Link>
            <RB.Nav.Link eventKey="link-2">Link</RB.Nav.Link>
            <RB.Nav.Link href="/home">Active</RB.Nav.Link>
            <RB.Nav.Link eventKey="link-1">Link</RB.Nav.Link>
            <RB.Nav.Link eventKey="link-2">Link</RB.Nav.Link>
            <RB.Nav.Link href="/home">Active</RB.Nav.Link>
            <RB.Nav.Link eventKey="link-1">Link</RB.Nav.Link>
            <RB.Nav.Link eventKey="link-2">Link</RB.Nav.Link>
            <RB.Nav.Link href="/home">Active</RB.Nav.Link>
            <RB.Nav.Link eventKey="link-1">Link</RB.Nav.Link>
            <RB.Nav.Link eventKey="link-2">Link</RB.Nav.Link>
            <RB.Nav.Link href="/home">Active</RB.Nav.Link>
            <RB.Nav.Link eventKey="link-1">Link</RB.Nav.Link>
            <RB.Nav.Link eventKey="link-2">Link</RB.Nav.Link>
        </RB.Nav>
    </div>
  );
}

export default App;
