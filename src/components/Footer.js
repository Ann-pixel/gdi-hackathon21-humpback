import React from 'react'
import logo from '../images/whale-32.png'
import { Container, Grid, Row, Col } from 'react-bootstrap'

const Footer = () => {

    const footerStyle={
        backgroundColor: '#000',
        color: 'white',
        paddingTop: '20px',
        paddingBottom: '20px',
        paddingLeft: '10px',
    };

    return (
        <Container style={footerStyle}>
            <Row>
                <Col xs={12}><img src={logo} alt="" /></Col>
            </Row>
            <Row>
                <Col xs={6}>testing</Col>
                <Col xs={6}>testing 2</Col>
            </Row>
            
        </Container>
    )
}

export default Footer
