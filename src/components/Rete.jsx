import { Col, Container, Row } from "react-bootstrap";
import ReteFav from "./ReteFav";

const Rete = () => {
  return (
    <Container fluid="lg">
      <Row>
        <Col xs={12} md={4}></Col>
        <Col xs={12} md={8}>
          <ReteFav />
        </Col>
      </Row>
    </Container>
  );
};
export default Rete;
