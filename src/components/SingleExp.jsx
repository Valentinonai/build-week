import { Card, Col, Row } from "react-bootstrap";
import { Pencil, Trash } from "react-bootstrap-icons";
import { useDispatch } from "react-redux";
import { EXPERIENCES_PROPS, experiencesHandleShow, experiencesPropAction, fetchDelete } from "../redux/action";

const SingleExp = props => {
  const dispatch = useDispatch(props);
  return (
    <Card className="p-2">
      <Row>
        <Col xs={4}>
          <div>
            <img
              src={props.elem.image}
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

        <Col xs={2}>
          <div className="d-flex justify-content-end">
            <Pencil
              onClick={() => {
                dispatch(experiencesPropAction(props.elem));
                experiencesHandleShow(dispatch);
              }}
              className="mx-2"
            />
            <Trash
              className="mx-2"
              onClick={() => {
                dispatch(fetchDelete(props.elem.user, props.elem._id));
              }}
            />
          </div>
        </Col>
      </Row>
    </Card>
  );
};
export default SingleExp;
