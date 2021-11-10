import React from 'react'
import logo from '../images/whale-32.png'
import { Container, Grid, Row, Col } from 'react-bootstrap'

const Footer = () => {

    const footerStyle={
        backgroundColor: '#000',
        color: 'white',
        paddingTop: '20px',
        paddingBottom: '20px',
        margin: '0 auto',
        textAlign: 'center',
        // paddingLeft: '10px',
    };

    const footerNames={
        paddingTop: '10px',
        fontSize: '12px',
    }

    return (
        <Container style={footerStyle} fluid>
            <Container>
                <Row>
                    <Col xs={12}><img src={logo} alt="" /></Col>
                    <Col xs={12}>Meet the creaters:</Col>
                </Row>
                <Row style={footerNames}>
                    <Col xs={3}>Gauri Mhaiskar</Col>
                    <Col xs={3}>Alison Lee</Col>
                    <Col xs={3}>Tracy Tucker</Col>
                    <Col xs={3}>Heidi Hanschu</Col>
                </Row>
            </Container>
        </Container>
    )
}

export default Footer
