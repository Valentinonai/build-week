import { Col, Container, Row } from "react-bootstrap";
import MainProfile from "./MainProfile";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProfileData } from "../redux/action";

const ProfilePage = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.currentUser.userData);
  useEffect(() => {
    dispatch(fetchProfileData());
  }, []);
  return (
    currentUser && (
      <Container fluid="lg">
        <Row>
          <Col xs={12} md={9}>
            <MainProfile />
          </Col>
          <Col xs={12} md={3}>
            <h1>Titolo</h1>
          </Col>
        </Row>
      </Container>
    )
  );
};

export default ProfilePage;
