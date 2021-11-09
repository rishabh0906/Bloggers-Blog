import { Card, Row, Col } from "react-bootstrap";

function Blog(props) {
  return (
    <Row xs={2} md={2} className="g-4">
      {Array.from({ length: 6 }).map((_, idx) => (
        <Col  xs={6} >
          <Card>
            <Card.Img variant="top" src="" />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis
                eos atque odio! Quasi maiores nam consectetur tenetur odio nihil
                voluptatem dicta modi. Voluptatibus fuga repellendus similique
                perspiciatis nemo sed corporis!
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
}

export default Blog;
