import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import NavBar from "./NavBar";
import SignUp from "./SignUp";

function Main() {
  return (
    <div>
      <NavBar />
      <Container>
        <Row className=" mt-5 justify-content-md-center">
          <Col xs={6}>
            <SignUp></SignUp>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Main;
