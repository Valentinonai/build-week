import { Card, Col, Row } from "react-bootstrap";

const SinglePost = ({ elem }) => {
  return (
    <Row>
      <Col xs={12}>
        <Card>
          <Card.Img variant="top" src={elem.user.image} />
          <Card.Body>
            <Card.Title>{elem.userName}</Card.Title>
            <Card.Text>{elem.text}</Card.Text>
            <Card.Text>{elem.user.text}</Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};
export default SinglePost;
