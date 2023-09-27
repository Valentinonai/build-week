import { Card, Col, Image, Row } from "react-bootstrap";
import { PlusLg, Trash } from "react-bootstrap-icons";
import { useSelector } from "react-redux";

const SinglePost = ({ elem, cancella, profile }) => {
  return (
    elem &&
    profile && (
      <div className="border border-1 rounded-3 shadow my-3 p-3">
        <Row className=" justify-content-between mb-2">
          <Col xs="auto">
            <Image
              src={elem ? elem.user.image : "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png"}
              alt="profileImg"
              width="60px"
              height="60px"
              roundedCircle
            />
          </Col>
          <Col sm={5} lg={7} className=" order-5 order-sm-0">
            <div className="d-flex flex-column">
              <h6>
                {elem.user.name} {elem.user.surname}
              </h6>
              <p
                className="w-100"
                style={{ whiteSpace: "nowrap", textOverflow: "ellipsis", overflow: "hidden", fontSize: "14px" }}
              >
                {elem.user.bio}
              </p>
            </div>
          </Col>
          <Col xs={12} sm={3} className="text-primary text-end ">
            {profile._id !== elem.user._id && (
              <>
                <PlusLg className="me-2" />
                <span className="d-none d-sm-inline-block">SEGUI</span>
              </>
            )}
            {profile._id === elem.user._id && (
              <Trash
                className="text-danger ms-2"
                onClick={() => {
                  cancella(elem._id);
                }}
              />
            )}
          </Col>
        </Row>
        <p className="">{elem.text}</p>
      </div>
    )
  );
};
export default SinglePost;
