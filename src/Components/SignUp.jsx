import React from "react";
import { Form, Button } from "react-bootstrap";
import "../Css/SignUp.css";
function SignUp(props) {
  return (
    <Form className="form">
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text> 
      </Form.Group>
      <Button
        onClick={(e) => {
          e.preventDefault();
        }}
        variant="primary"
        type="submit"
      >
      SignUp
      </Button>
    </Form>
  );
}

export default SignUp;
