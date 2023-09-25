import { Button, Col, Row } from "react-bootstrap";
import { PencilFill, ArrowRightShort } from "react-bootstrap-icons";
import { Link } from "react-router-dom";

const Resources = () => {
  return (
    <div className="border border-1 rounded mt-2">
      <Row className="p-2">
        <Col xs={8}>
          <h4 className="mb-0">Attività</h4>
          <Link
            to={"/"}
            style={{
              fontSize: "12px",
              textDecoration: "none",
            }}
          >
            0 follower
          </Link>
          <h6 className="mb-0 mt-5">Non hai ancora pubblicato nulla</h6>
          <p className="mb-0" style={{ fontWeight: "300", fontSize: "12px" }}>
            I post che condividi appariranno qui
          </p>
        </Col>
        <Col xs={4}>
          <div className="d-flex justify-content-end align-items-center">
            <Button variant="outline-primary" style={{ borderRadius: "20px" }} className="me-2 py-1">
              Crea un post
            </Button>
            <PencilFill />
          </div>
        </Col>
      </Row>
      <div
        className=" bg-light border-top border-1px w-100 text-center"
        style={{
          height: "30px",
        }}
      >
        <Link
          to={"/"}
          style={{
            textDecoration: "none",
            color: "grey",
            fontSize: "12px",
          }}
        >
          Mostra tutte le attività
          <ArrowRightShort />
        </Link>
      </div>
    </div>
  );
};

export default Resources;
