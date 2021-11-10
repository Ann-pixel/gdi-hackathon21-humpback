import React from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap'

const Navigation = () => {
    const navStyle={
        backgroundColor: '#005b7b',
        color: 'white',
        paddingTop: '20px',
        paddingBottom: '20px',
    };
    return (
        <Navbar bg="light" variant="light" expand="md" style={navStyle}>
            <Container>
                <Navbar.Brand>
                    whale goes here
                </Navbar.Brand>
                {/* <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto Navbar">
                        future navigation goes here 
                    </Nav>
                </Navbar.Collapse> */}
            </Container>
        </Navbar>
    )
}

export default Navigation
