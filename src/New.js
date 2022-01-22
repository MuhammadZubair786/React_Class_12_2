import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import { Row, Button, Col } from 'react-bootstrap'
import {RiHome4Fill } from "react-icons/ri";

class App extends React.Component {
    constructor(){
        super()
    }



    render() {
        console.log(this.state)
        return (

            <div>
                <Row className="mx-0">
                    <Button as={Col} variant="primary">Button #1</Button>
                    <Button as={Col} variant="secondary" className="mx-2">Button #2</Button>
                    <Button as={Col} variant="success">Button #3</Button>
                </Row>
                <RiHome4Fill size={100} color='red'/>
            </div>
        )
    }
}
export default App;

