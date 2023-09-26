import { Card } from "react-bootstrap";

const SinglePost = ({ elem }) => {
  return (
    <Card>
      <Card.Img variant="top" src={elem.user.image} />
      <Card.Body>
        <Card.Title>{elem.userName}</Card.Title>
        <Card.Text>{elem.text}</Card.Text>
        <Card.Text>{elem.user.text}</Card.Text>
      </Card.Body>
    </Card>
  );
};
export default SinglePost;
