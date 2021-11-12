import React from "react";
import whale from "../images/InstructorWhale-Small.png";
import { Container, Row, Col } from "react-bootstrap";

const Header = () => {
  const headerStyle = {
    margin: "0 auto",
    paddingTop: "20px",
    textAlign: "center",
    fontFamily: "'Chewy', cursive",
    fontSize: "45px",
  };

  const hardLine = {
    borderTop: "3px double #8c8b8b",
    width: "75%",
    margin: "0 auto",
    textAlign: "center",
  };

  const span = {
    lineHeight: "50px",
    color: "#9B2226",
    fontSize: "30px",
  };

  return (
    <Container style={headerStyle}>
      <Row>
        <Col>
          <img src={whale} alt="" />
          <h1 style={{ fontSize: "50px" }}>Welcome to the Simon Game</h1>
        </Col>
      </Row>
      <Row>
        <Col>
          <h4>
            Brought to you by:
            <br />
            <span style={span}>The HUMPBACK WHALE Group</span>
          </h4>
        </Col>
      </Row>
      <Row>
        <Col>
          <hr style={hardLine} />
        </Col>
      </Row>
    </Container>
  );
};

export default Header;
