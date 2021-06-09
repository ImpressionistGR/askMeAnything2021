import {FormControl, Modal, Form, ModalBody, ModalFooter, Button} from "react-bootstrap";
import ModalHeader from "react-bootstrap/ModalHeader";
import logo from "../logo.png";
import React, {Component, useState} from "react";


function SignupModal ( {myShow, onClose} ){

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
            <ModalBody style={{backgroundColor: "#d3f5ff"}}>
                <Form>
                    <FormControl placeholder="username" style={{marginBottom: "20px"}}></FormControl>
                    <FormControl placeholder="password"></FormControl>
                    <FormControl placeholder="re enter password"></FormControl>
                </Form>
            </ModalBody>
            <ModalFooter style={{backgroundColor: "#d3f5ff"}}>
                <Button variant="light" className="border-dark">Sign up</Button>
                <Button variant="danger" className="border-dark" onClick={onClose}>Close</Button>
            </ModalFooter>
        </Modal>
    );

}

export default SignupModal;