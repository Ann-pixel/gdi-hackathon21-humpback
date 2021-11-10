import React from 'react'
import logo from '../images/whale-32.png'
import { Container, Row } from 'react-bootstrap'

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
                <img src={logo} alt="" />
            </Row>
            
        </Container>
    )
}

export default Footer
