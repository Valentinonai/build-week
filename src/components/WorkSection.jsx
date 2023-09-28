import { Col, Container, Row } from "react-bootstrap";
import CenterSection from "./CenterSection";
import { WorksList } from "./WorksList";

export const WorkSection = () => {
  return (
    <Container className="d-flex justify-content-center">
      <Row className="w-100">
        <Col className="col-6">
          <CenterSection />
          <WorksList />
        </Col>
      </Row>
    </Container>
  );
};
