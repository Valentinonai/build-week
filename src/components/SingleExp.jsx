import { Card, Col, Row } from "react-bootstrap";
import { Pencil, Trash } from "react-bootstrap-icons";
import { useDispatch, useSelector } from "react-redux";
import { EXPERIENCES_PROPS, experiencesHandleShow, experiencesPropAction, fetchDelete } from "../redux/action";
import { useParams } from "react-router-dom";

const SingleExp = props => {
  const dispatch = useDispatch(props);
  const param = useParams();
  const isLoggedId = useSelector(state => state.currentUser.isLoggedUser);
  return (
    <Card className="p-2">
      <Row>
        <Col xs={4}>
          {props.elem.image ? (
            <div>
              <img
                src={props.elem.image}
                alt="img"
                width="100%"
              />
            </div>
          ) : (
            <div>
              <img
                src="https://atlas-content-cdn.pixelsquid.com/stock-images/white-linkedin-chat-icon-logo-ywLAlaB-600.jpg"
                alt="img"
                width="100%"
              />
            </div>
          )}
        </Col>
        <Col xs={6}>
          <h3>{props.elem.company}</h3>
          <h6>{props.elem.role}</h6>
          <p>{props.elem.description}</p>
        </Col>

        <Col xs={2}>
          <div className="d-flex justify-content-end">
            {(param.id === isLoggedId || param.id === "me") && (
              <>
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
              </>
            )}
          </div>
        </Col>
      </Row>
    </Card>
  );
};
export default SingleExp;
