import { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { PlusLg, PencilFill } from "react-bootstrap-icons";
import { useDispatch, useSelector } from "react-redux";
import { experiencesHandleShow, fetchExperiencies } from "../redux/action";
import { useParams } from "react-router-dom";
import SingleExp from "./SingleExp";
import ExperiencesModal from "./ExperiencesModal";

const Formazione = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const experiences = useSelector(state => state.addExps.data);
  const isLoading = useSelector(state => state.currentUser.isLoading);
  const user = useSelector(state => state.currentUser.userData);
  const [image, setImage] = useState(user.image);
  useEffect(() => {
    user && dispatch(fetchExperiencies(params.id === "me" ? user._id : params.id));
  }, []);
  return (
    !isLoading && (
      <div className="border border-1 rounded mt-2 p-2">
        <Row>
          <Col xs={8}>
            <div>
              <h4>Experiencies</h4>
            </div>
          </Col>
          <Col xs={4}>
            <div className="d-flex justify-content-end align-items-center">
              <PlusLg
                className="me-3"
                onClick={() => experiencesHandleShow(dispatch)}
              />
            </div>
          </Col>
        </Row>
        <Row>
          {experiences &&
            experiences.map((elem, i) => (
              <Col
                xs={12}
                key={i}>
                <SingleExp elem={elem} />
              </Col>
            ))}
        </Row>
        <ExperiencesModal
          image={image}
          setImage={setImage}
        />
      </div>
    )
  );
};
export default Formazione;
