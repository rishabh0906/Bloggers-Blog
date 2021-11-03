import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import NavBar from "./NavBar";
import SignUp from "./SignUp";
import BlogsPage from "./BlogsPage";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function Main() {
  return (
    <div>
      <Router>
        <NavBar />
        <Switch>
          <Route path="/joinus"></Route>
          <Route path="/aboutus"></Route>
          <Route path="/blogs">
            {" "}
            <BlogsPage></BlogsPage>{" "}
          </Route>
          <Route path="/">
            <Container>
              <Row className=" mt-5 justify-content-md-center">
                <Col xs={6}>
                  <SignUp></SignUp>
                </Col>
              </Row>
            </Container>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default Main;
