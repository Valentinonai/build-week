import { useEffect, useState } from "react";
import { Col, Container, Row, Spinner } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {
  addErrorMessageAction,
  fetchPost,
  hasErrorTrueAction,
  isLoadingFalseAction,
  isLoadingTrueAction,
} from "../redux/action";
import SinglePost from "./SinglePost";
import Sidebar from "./Sidebar";

const Home = () => {
  const posts = useSelector((state) => state.post.data);
  const isLoading = useSelector((state) => state.currentUser.isLoading);
  const dispatch = useDispatch();
  const [profile, setProfile] = useState("");

  const fetchUser = async () => {
    try {
      dispatch(isLoadingTrueAction());
      const resp = await fetch("https://striveschool-api.herokuapp.com/api/profile/me", {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTExMzRiOTM3NTJhODAwMTQ1Njg3NWYiLCJpYXQiOjE2OTU2MjY0MjYsImV4cCI6MTY5NjgzNjAyNn0.NFk7YtejuOSYg3g46D2yj7_4nB-6W8xjVATN2MutM4o",
        },
      });
      if (resp.ok) {
        const data = await resp.json();
        setProfile(data);
        // console.log(profile);
      } else {
        dispatch(hasErrorTrueAction());
        throw new Error(resp.status);
      }
    } catch (error) {
      dispatch(addErrorMessageAction(error.message));
      console.log("si e' verificato un errore", error.message);
    } finally {
      dispatch(isLoadingFalseAction());
    }
  };
  useEffect(() => {
    dispatch(fetchPost());
    fetchUser();
  }, []);
  return isLoading ? (
    <Spinner animation="border" role="status">
      <span className="visually-hidden">Loading...</span>
    </Spinner>
  ) : (
    <Container fluid="lg">
      <Row>
        <Col xs={2}>
          <Sidebar profile={profile} />
        </Col>
        <Col xs={8}>{posts.map((elem, i) => i < 5 && <SinglePost elem={elem} key={`post${i}`} />)}</Col>
        <Col xs={2}></Col>
      </Row>
    </Container>
  );
};

export default Home;
