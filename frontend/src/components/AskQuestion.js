import React, {useState} from 'react';
import logo from '../logo.png';
import user from '../user.png';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import {Button, Container, Row, Col, Form, FormControl, Dropdown, Modal, ModalFooter} from "react-bootstrap";
import {Link, useHistory} from "react-router-dom";
import {getCookie} from "../cookies";
import ModalHeader from "react-bootstrap/ModalHeader";
import axios from "axios";


function AskQuestion () {

    const history = useHistory();

    /*
    const [nevermindShow, setNevermindShow] = useState(false)
    const handleClose = () => setNevermindShow(false);
    const handleShow = () => setNevermindShow(true);

    function NevermindModal () {

        return (
            <Modal show={nevermindShow} onHide={handleClose}>
                <ModalHeader style={{display: "inline-block", textAlign: "center", backgroundColor: "#d3f5ff"}}>
                    Your progress will be lost.
                    Are you sure?
                </ModalHeader>
                <ModalFooter>
                    <Button variant="danger" className="border-dark">Yes</Button>
                    <Button variant="light" className="border-dark">No</Button>
                </ModalFooter>
            </Modal>
        )

    }
    */


    if(getCookie('auth') === 'no' || getCookie('auth') === ''){
        history.push('/')
    }

    function logout() {
        console.log('cookie: ' + document.cookie)
        document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    }


    function ask(title, text, keywords, iduser) {
        axios.post(
            '/askQuestion', {title, text, keywords, iduser}).then(response =>{
            console.log(response)
            const checkTitle = response.data
            if(checkTitle === 'question title already exists') alert(checkTitle)
            //console.log(response.data[0])
        })
    }

    class AskForm extends React.Component{
        constructor(props) {
            super(props);

            this.state = { title: '', text: '', keywords: ''}

            this.handleChangeTitle = this.handleChangeTitle.bind(this)
            this.handleChangeText = this.handleChangeText.bind(this)
            this.handleChangeKeywords = this.handleChangeKeywords.bind(this)

            this.handleSubmit = this.handleSubmit.bind(this)
        }

        handleChangeTitle(event){
            this.setState({title: event.target.value})

        }

        handleChangeText(event){
            this.setState({text: event.target.value})
        }

        handleChangeKeywords(event){
            this.setState({keywords: event.target.value})

        }

        handleSubmit(event){
            if(this.state.title === '' || this.state.text === '' || this.state.keywords === ''){
                alert('input fields cannot be empty')
            }
            else{
                const iduser = getCookie('iduser')
                ask(this.state.title, this.state.text, this.state.keywords, iduser)
            }
            event.preventDefault();
        }


        render() {
            return (
                <Form onSubmit={this.handleSubmit}>
                    <Row>
                        <FormControl as="textarea" placeholder="Question title" value={this.state.title} onChange={this.handleChangeTitle} style={{height:"50px", margin:"15px", marginTop:"25px"}}/>
                    </Row>
                    <Row>
                        <FormControl as="textarea" placeholder="Question text" value={this.state.text} onChange={this.handleChangeText} style={{height:"150px", margin:"15px"}}/>
                    </Row>
                    <Row>
                        <FormControl as="textarea" placeholder="Keywords" value={this.state.keywords} onChange={this.handleChangeKeywords} style={{height:"50px", margin:"15px"}}/>
                    </Row>
                    <Row style={{margin:"0px"}}>
                        <Button variant="light" type="submit" className="border-dark" >Submit</Button>
                        &nbsp; &nbsp;
                        <Button variant="danger" type="button" className="border-dark" onClick={() => {history.push('/home')}}>Nevermind</Button>
                    </Row>
                </Form>
            )
        }
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
                                    <Dropdown.Item>Username: {getCookie('username')}</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </Col>
                    </Row>
                </Container>
            </div>

            <div className="red-header table-responsive">
                <Container>
                    <Row className="font-weight-bold" style={{display:"inline-block", backgroundColor:"white", borderRadius:"10px", padding:"7px", marginTop:"8px"}}>
                        Your questions help our community !
                    </Row>
                </Container>
            </div>


            <Container className="restOfPage">
                <AskForm/>
            </Container>

        </div>
    )
}

export default AskQuestion;
