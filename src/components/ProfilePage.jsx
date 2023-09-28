import { Col, Container, Row, Spinner } from "react-bootstrap";
import MainProfile from "./MainProfile";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProfileData } from "../redux/action";
import { useParams } from "react-router-dom";
import Sidebar from "../SideBar/Sidebar";
import "../SideBar/Sidebar.css";

const ProfilePage = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.currentUser.userData);
  const isLoading = useSelector((state) => state.currentUser.isLoading);
  const params = useParams();
  useEffect(() => {
    dispatch(fetchProfileData(params.id));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params.id]);
  // aggiunta dipendenza in modo che venga ripètuta la fetch in base al cambio del id nel url.
  return isLoading ? (
    <div className="mt-5 d-flex justify-content-center">
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    </div>
  ) : (
    currentUser && (
      <Container fluid="lg">
        <Row>
          <Col xs={12} xl={9}>
            <MainProfile />
          </Col>
          <Col xs={12} xl={3} id="sidebar">
            <Sidebar />
          </Col>
        </Row>
      </Container>
    )
  );
};

export default ProfilePage;
