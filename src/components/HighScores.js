import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const HighScores = () => {
  const scoreContainer = {
    marginBottom: "20px",
  };
  const scoreBox = {
    margin: "0 auto",
    padding: "10px",
    border: "1px dashed #0A9396",
  };

  const scoreHeader = {
    backgroundColor: "#B0B356",
    color: "white",
    paddingTop: "20px",
    paddingBottom: "20px",
    margin: "0 auto",
    textAlign: "center",
    fontFamily: "'Chewy', cursive",
  };

  const scoreList = {
    margin: "0 auto",
    textAlign: "center",
    padding: "10px",
    fontSize: "1.5rem",
  };

  const highScores = [
    {
      id: 1,
      name: "Heidi",
      score: 95,
    },
    {
      id: 2,
      name: "Alison",
      score: 82,
    },
    {
      id: 3,
      name: "Gauri",
      score: 75,
    },
    {
      id: 4,
      name: "Tracy",
      score: 60,
    },
  ];

  const scores = highScores.sort(
    (a, b) => parseFloat(b.score) - parseFloat(a.score)
  );

  return (
    <Container style={scoreContainer}>
      <Container style={scoreBox}>
        <Row style={scoreHeader}>
          <Col>
            <h2>HIGH SCORES</h2>
          </Col>
        </Row>
        {scores.map((score) => (
          <Row style={scoreList} key={score.id}>
            <Col xs={6}>{score.name}</Col>
            <Col xs={6}>{score.score}</Col>
          </Row>
        ))}
      </Container>
    </Container>
  );
};

export default HighScores;
