import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const Header = () => {

    const headerStyle={
        margin: '0 auto',
        paddingTop: '20px',
        textAlign: 'center',
    };

    const hardLine={
        borderTop: '3px double #8c8b8b',
        width: '75%',
    }

    return (
        <Container style={headerStyle}>
            <Row>
                <Col><h1>Welcome to the Simon Game</h1></Col>
            </Row><Row>
                <Col><hr style={hardLine}/></Col>
            </Row>
        </Container>
    )
}

export default Header
