import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const HighScores = () => {

    const scoreBox={
        margin: '30px',
    }

    const scoreHeader={
        backgroundColor: 'green',
        color: 'white',
        paddingTop: '20px',
        paddingBottom: '20px',
        margin: '0 auto',
        textAlign: 'center',
        // paddingLeft: '10px',
    };

    const scoreList={
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    }

    const highScores = [
        {
            id: 1,
            name: 'Heidi',
            score: 95
        },
        {
            id: 2,
            name: 'Alison',
            score: 82
        },
        {
            id: 3,
            name: 'Gauri',
            score: 75
        },
        {
            id: 4,
            name: 'Tracy',
            score: 60
        }
    ]
    
    return (
        <Container style={scoreBox}>
            <Row style={scoreHeader}>
                <Col><h2>HIGH SCORES</h2></Col>
            </Row>
            {highScores.map(score => (
            <Row style={scoreList} key={score.id}>
                <Col xs={6}>{score.name}</Col>
                <Col xs={6}>{score.score}</Col>
            </Row>
            ))}
        </Container>
    )
}

export default HighScores
