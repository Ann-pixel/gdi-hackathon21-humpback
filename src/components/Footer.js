import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlobe, faLinkedin } from "@fortawesome/free-solid-svg-icons"
import logo from '../images/whale-32.png'
import { Container, Row, Col } from 'react-bootstrap'

const Footer = () => {

    const footerStyle={
        backgroundColor: '#005F73',
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

    const lineItems={
        listStyle: 'none',
        padding: '0',
        margin: '0 auto',
        textAlign: 'left',
    }

    const icons={
        color: '#FFC65C',
    }

    const creators = [
        {
            name: 'Gauri Mhaiskar',
            website: 'http://www.gaurimhaiskar.com/',
            linkedIn: 'https://www.linkedin.com/in/gauri-mhaiskar-08688160/',
            github: 'https://github.com/Ann-pixel',
        },
        {
            name: 'Tracy Tucker',
            linkedIn: 'https://www.linkedin.com/in/tracyreuther/',
            github: 'https://github.com/tracy-tucker',
        },
        {
            name: 'Alison Lee',
            linkedIn: 'http://www.linkedin.com/in/alison-lee-4547b114',
            github: 'https://github.com/alison2686',
        },
        {
            name: 'Heidi Hanschu',
            github: 'https://github.com/hhanschu',
        }
    ]

    return (
        <Container style={footerStyle} fluid>
            <Container>
                <Row>
                    <Col xs={12}><img src={logo} alt="" /></Col>
                    <Col xs={12}>Meet the creaters:</Col>
                </Row>
                <Row style={footerNames}>
                    <Col xs={3}>
                        Gauri Mhaiskar
                        <ul>
                        <li style={lineItems}><a target="_blank" rel="noreferrer" href="http://www.gaurimhaiskar.com/"><FontAwesomeIcon icon={faGlobe} style={icons} /></a></li>
                        <li style={lineItems}><a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/gauri-mhaiskar-08688160/"><FontAwesomeIcon icon={faLinkedin} style={icons} /></a></li>
                        <li style={lineItems}><a target="_blank" rel="noreferrer" href="http://www.gaurimhaiskar.com/"><FontAwesomeIcon icon={faGlobe} style={icons} /></a></li>
                        </ul>
                        </Col>
                    <Col xs={3}>Alison Lee</Col>
                    <Col xs={3}>Tracy Tucker</Col>
                    <Col xs={3}>Heidi Hanschu</Col>
                </Row>
            </Container>
        </Container>
    )
}

export default Footer
