import {FormControl, Modal, Form, ModalBody, ModalFooter, Button} from "react-bootstrap";
import ModalHeader from "react-bootstrap/ModalHeader";
import logo from "../logo.png";
import React from "react";
import {Link} from "react-router-dom";
import axios from "axios";


function LoginModal ( {myShow, onClose} ){


    class LoginForm extends React.Component{
        constructor(props) {
            super(props);
            this.state = { username: '', password: '' };

            this.handleChangeUsername = this.handleChangeUsername.bind(this);
            this.handleChangePassword = this.handleChangePassword.bind(this);
            this.handleSubmit = this.handleSubmit.bind(this);
        }
        handleChangeUsername(event) {
            this.setState({username: event.target.value});
        }

        handleChangePassword(event) {
            this.setState({password: event.target.value});
        }

        handleSubmit(event) {
            login(this.state.username, this.state.password)
            //alert('Credentials were submitted: (' + this.state.username + ', ' + this.state.password + ')');
            console.log(this.state.username)
            console.log(this.state.password)
            event.preventDefault();
        }


        render() {
            return (
                <Form onSubmit={this.handleSubmit}>
                    <ModalBody style={{backgroundColor: "#d3f5ff"}}>
                        <FormControl placeholder="username" value={this.state.username} onChange={this.handleChangeUsername} style={{marginBottom: "10px"}}/>
                        <FormControl type="password" value={this.state.password} onChange={this.handleChangePassword} placeholder="password"/>
                    </ModalBody>
                    <ModalFooter style={{backgroundColor: "#d3f5ff"}}>
                        <Button variant="light" type="submit" className="border-dark">Log in</Button>
                        <Button variant="danger" className="border-dark" onClick={onClose}>Close</Button>
                    </ModalFooter>
                </Form>
            );
        }
    }


    function login(username, password){
        axios.get('/login?' + username + '&' + password).then(response =>{
            console.log(response)
        })
    }

    return (
        <Modal show={myShow} onEscapeKeyDown={onClose} style={{fontSize: "20px", fontFamily: "Ubuntu"}} >
            <ModalHeader style={{display: "inline-block", textAlign: "center", backgroundColor: "#d3f5ff"}}>
                <img
                    alt=""
                    src={logo}
                    width="45"
                    height="45"
                />
                <span style={{marginLeft: "5px"}} className="font-weight-bold">@ask</span>
                <span className="font-weight-bold" style={{color: "#e30000"}}>me</span>
                <span className="font-weight-bold">anything</span>
                <span className="font-weight-bold" style={{color: "#e30000"}}>2021</span>
            </ModalHeader>
            <LoginForm/>
        </Modal>
    );

}

export default LoginModal;