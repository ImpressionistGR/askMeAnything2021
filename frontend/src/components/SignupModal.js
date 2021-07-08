import {FormControl, Modal, Form, ModalBody, ModalFooter, Button} from "react-bootstrap";
import ModalHeader from "react-bootstrap/ModalHeader";
import logo from "../logo.png";
import React from "react";
import {Link} from "react-router-dom";
import axios from "axios";


function SignupModal ( {myShow, onClose} ){


    function signup(username, email, password){
        axios.post(
            '/signup',  {username, email, password}).then(response =>{
            console.log(response)
            console.log(response.data[0])
            const data = response.data[0]
            if(data == undefined){
                alert('wrong credentials')
                console.log('wrong credentials')
            }
            else{
                console.log('signup successful')

            }

        })
    }

    class SignupForm extends React.Component{
        constructor(props) {
            super(props);
            this.state = { username: '', email: '', password: '', rePassword: '' };

            this.handleChangeUsername = this.handleChangeUsername.bind(this);
            this.handleChangeEmail = this.handleChangeEmail.bind(this);
            this.handleChangePassword = this.handleChangePassword.bind(this);
            this.handleChangeRePassword = this.handleChangeRePassword.bind(this);
            this.handleSubmit = this.handleSubmit.bind(this);
        }
        handleChangeUsername(event) {
            this.setState({username: event.target.value});
        }

        handleChangeEmail(event) {
            this.setState({email: event.target.value});
        }

        handleChangePassword(event) {
            this.setState({password: event.target.value});
        }

        handleChangeRePassword(event) {
            this.setState({rePassword: event.target.value});
        }

        handleSubmit(event){
            if(this.state.username == ' ' || this.state.email == '' || this.state.password == ' ' || this.state.rePassword == ''){
                alert('input fields cannot be empty')
            }
            else if(this.state.password != this.state.rePassword) {
                alert('Passwords do not match')
            }
            else if(this.state.password == this.state.rePassword) {
                signup(this.state.username, this.state.email, this.state.password)
            }


            event.preventDefault();
        }

        render() {
            return (
                <Form onSubmit={this.handleSubmit}>
                <ModalBody style={{backgroundColor: "#d3f5ff"}}>
                    {/*<FormControl placeholder="first name" style={{marginBottom: "20px"}}/>
                    <FormControl placeholder="last name" style={{marginBottom: "20px"}}/> */}

                    <FormControl placeholder="username" value={this.state.username} onChange={this.handleChangeUsername} style={{marginBottom: "20px"}}/>
                    <FormControl placeholder="email address" value={this.state.email} onChange={this.handleChangeEmail} style={{marginBottom: "20px"}}/>
                    <FormControl type="password" placeholder="password" value={this.state.password} onChange={this.handleChangePassword} />
                    <FormControl type="password" placeholder="re enter password" value={this.state.rePassword} onChange={this.handleChangeRePassword} />
                </ModalBody>
                <ModalFooter style={{backgroundColor: "#d3f5ff"}}>
                    <Button type="submit" variant="light" className="border-dark">Sign up</Button>
                    <Button variant="danger" className="border-dark" onClick={onClose}>Close</Button>
                </ModalFooter>
                </Form>

            )
        }
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
            <SignupForm/>

        </Modal>
    );

}

export default SignupModal;