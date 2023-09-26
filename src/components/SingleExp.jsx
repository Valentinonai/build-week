import { Card, Col, Row } from "react-bootstrap";
import { Pencil, Trash } from "react-bootstrap-icons";

const SingleExp = props => {
  return (
    <Card className="p-2">
      <Row>
        <Col xs={4}>
          <div>
            <img
              src="https://www.venetoformazione.it/wp-content/uploads/2022/02/ottimizzare-immagini-display-retina.jpg"
              alt="img"
              width="100%"
            />
          </div>
        </Col>
        <Col xs={6}>
          <h3>{props.elem.company}</h3>
          <h6>{props.elem.role}</h6>
          <p>{props.elem.description}</p>
        </Col>
        {console.log(props.elem, "GUARDAME")}
        <Col xs={2}>
          <div className="d-flex justify-content-end">
            <Pencil className="mx-2" />
            <Trash className="mx-2" />
          </div>
        </Col>
      </Row>
    </Card>
  );
};
export default SingleExp;
