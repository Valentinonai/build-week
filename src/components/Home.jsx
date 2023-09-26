import { useEffect } from "react";
import { Col, Container, Row, Spinner } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { fetchPost } from "../redux/action";
import SinglePost from "./SinglePost";

const Home = () => {
  const posts = useSelector((state) => state.post.data);
  const isLoading = useSelector((state) => state.currentUser.isLoading);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPost());
  }, []);
  return isLoading ? (
    <Spinner animation="border" role="status">
      <span className="visually-hidden">Loading...</span>
    </Spinner>
  ) : (
    <Container fluid="lg">
      <Row>
        <Col xs={2}></Col>
        <Col xs={8}>{posts.map((elem, i) => i < 5 && <SinglePost elem={elem} key={`post${i}`} />)}</Col>
        <Col xs={2}></Col>
      </Row>
    </Container>
  );
};

export default Home;
