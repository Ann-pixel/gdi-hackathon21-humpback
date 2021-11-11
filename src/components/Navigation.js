import React from 'react'
import logo from '../images/whale-32.png'
import { Navbar, Container, Nav } from 'react-bootstrap'

const Navigation = () => {
    const navStyle={
        backgroundColor: '#005F73',
        color: 'white',
        paddingTop: '20px',
        paddingBottom: '20px',
        paddingLeft: '10px',
    };
    return (
        <Navbar expand="md" style={navStyle}>
            <Container>
                <Navbar.Brand>
                    <img src={logo} alt="" />
                </Navbar.Brand>
                {/* <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto Navbar">
                        future navigation would go here
                    </Nav>
                </Navbar.Collapse> */}
            </Container>
        </Navbar>
    )
}

export default Navigation
