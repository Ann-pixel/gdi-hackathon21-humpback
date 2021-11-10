import React from 'react'
import logo from '../images/whale-32.png'
import styled from 'styled-components'
// import { Container } from 'react-bootstrap'

const Container = styled.div`
    background-color: #005B7B;
    padding: 20px 10px;
    color: white;
`
const Footer = () => {
    return (
        <Container>
            <img src={logo} alt="" />
        </Container>
    )
}

export default Footer
