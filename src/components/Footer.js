import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlobe } from "@fortawesome/free-solid-svg-icons"
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons"
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
        textAlign: 'center',
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
                            <li style={lineItems}><a target="_blank" rel="noreferrer" href="https://github.com/Ann-pixel"><FontAwesomeIcon icon={faGithub} style={icons} /></a></li>
                        </ul>
                        </Col>
                    <Col xs={3}>
                        Alison Lee
                        <ul>
                            <li style={lineItems}><a target="_blank" rel="noreferrer" href="http://www.linkedin.com/in/alison-lee-4547b114"><FontAwesomeIcon icon={faLinkedin} style={icons} /></a></li>
                            <li style={lineItems}><a target="_blank" rel="noreferrer" href="https://github.com/alison2686"><FontAwesomeIcon icon={faGithub} style={icons} /></a></li>
                        </ul>
                    </Col>
                    <Col xs={3}>
                        Tracy Tucker
                        <ul>
                            <li style={lineItems}><a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/tracyreuther/"><FontAwesomeIcon icon={faLinkedin} style={icons} /></a></li>
                            <li style={lineItems}><a target="_blank" rel="noreferrer" href="https://github.com/tracy-tucker"><FontAwesomeIcon icon={faGithub} style={icons} /></a></li>
                        </ul>
                    </Col>
                    <Col xs={3}>
                        Heidi Hanschu
                        <ul>
                            <li style={lineItems}><a target="_blank" rel="noreferrer" href="https://github.com/hhanschu"><FontAwesomeIcon icon={faGithub} style={icons} /></a></li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </Container>
    )
}

export default Footer
