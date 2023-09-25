import { Col, Row } from "react-bootstrap";
import { PlusLg, PencilFill } from "react-bootstrap-icons";

const Formazione = () => {
  return (
    <div className="border border-1 rounded mt-3 p-2">
      <Row className="mt-3">
        <Col xs={8}>
          <div>
            <h4>Formazione</h4>
            <p>Nessun dato disponibile al momento</p>
          </div>
        </Col>
        <Col xs={4}>
          <div className="d-flex justify-content-end align-items-center">
            <PlusLg className="me-3" />
            <PencilFill />
          </div>
        </Col>
      </Row>
    </div>
  );
};
export default Formazione;
