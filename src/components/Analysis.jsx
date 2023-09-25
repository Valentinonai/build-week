import { Col } from "react-bootstrap";
import { EyeFill, PeopleFill } from "react-bootstrap-icons";

const Analysis = () => {
  return (
    <Col xs={12}>
      <h4>Analisi</h4>
      <p>
        <EyeFill /> Solo per te
      </p>
      <p>
        <PeopleFill /> 0 visualizzazioni del profilo
      </p>
      <p>Aggiorna il tuo profilo per attrarre visitatori.</p>
    </Col>
  );
};

export default Analysis;
