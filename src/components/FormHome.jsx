import { Button, Col, Container, Image, Row } from "react-bootstrap";
import { ImageFill, Calendar3, BlockquoteLeft } from "react-bootstrap-icons";
import ModaleAddPost from "./ModaleAddPost";

const FormHome = ({ profile, handleShow, handleClose, show, setPostText, postText, modifica, setModifica, idPost }) => {
  return (
    <>
      <Container fluid="lg">
        <Row className="border rounded-3 border-1 shadow my-3  gy-3">
          <Col className="">
            <Row>
              <Col xs="auto">
                <Image
                  src={
                    profile
                      ? profile.image
                      : "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png"
                  }
                  alt="profileImg"
                  width="60px"
                  height="60px"
                  roundedCircle
                />
              </Col>
              <Col>
                <Button
                  variant="outline-secondary"
                  style={{ width: "100%", height: "60px ", borderRadius: "30px", textAlign: "left" }}
                  className="ps-2 ps-lg-4 "
                  onClick={() => {
                    setModifica(false);
                    handleShow();
                  }}
                >
                  Avvia un post
                </Button>
              </Col>
            </Row>
          </Col>
          <Col xs={12} className="">
            <Row>
              <Col xs={12} md={5}>
                <p>
                  <span className="text-primary me-2 ms-lg-3">
                    <ImageFill />
                  </span>
                  <span style={{ color: "grey", fontSize: "14px" }}>Contenuti multimediali</span>
                </p>
              </Col>
              <Col xs={12} md={3}>
                <p>
                  <span style={{ color: "orange" }} className="me-2">
                    <Calendar3 />
                  </span>
                  <span style={{ color: "grey", fontSize: "14px" }}>Evento</span>
                </p>
              </Col>
              <Col xs={12} md={4}>
                <p>
                  <span className="me-2 text-danger">
                    <BlockquoteLeft />
                  </span>
                  <span style={{ color: "grey", fontSize: "14px" }}>Scrivi un articolo</span>
                </p>
              </Col>
            </Row>
          </Col>
        </Row>
        <hr />

        <ModaleAddPost
          handleClose={handleClose}
          show={show}
          profile={profile}
          setPostText={setPostText}
          postText={postText}
          modifica={modifica}
          idPost={idPost}
        />
      </Container>
    </>
  );
};
export default FormHome;
