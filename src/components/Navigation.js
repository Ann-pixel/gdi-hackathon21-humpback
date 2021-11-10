import React from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap'

const Navigation = () => {
    return (
        <Navbar bg='light' variant="light" expand="md">
            <Container>
                <Navbar.Brand>
                    <Nav.Item>
                        <Nav.Link>
                            Home
                        </Nav.Link>
                    </Nav.Item>
                </Navbar.Brand>
            </Container>
        </Navbar>
    )
}

export default Navigation
