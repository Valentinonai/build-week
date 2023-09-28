import { Button, Card, Col, Image, Row } from "react-bootstrap";
import { DashLg, PlusLg } from "react-bootstrap-icons";
import { useDispatch, useSelector } from "react-redux";
import { addFriendAction, deleteFriendAction } from "../redux/action/listFriendsAction";
import { BsPersonAdd } from "react-icons/bs";

const ReteFav = () => {
  const fav = useSelector((state) => state.listFriends.list);
  const dispatch = useDispatch();
  return (
    <div className="border border-1 rounded-4 shadow p-3">
      {console.log("im here")}
      <h3>Persone che segui</h3>
      <Row className="row-cols-3">
        {fav.map((elem, i) => (
          <Col key={elem._id}>
            <Card>
              <div style={{ position: "relative" }}>
                <Card.Img
                  variant="top"
                  src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png"
                  style={{ position: "relative" }}
                />
                <Image
                  src={elem.image}
                  roundedCircle
                  style={{
                    position: "absolute",
                    width: "80px",
                    height: "80px",
                    bottom: "-40px",
                    left: "50%",
                    marginLeft: "-40px",
                  }}
                  className="shadow"
                />
              </div>
              <Card.Body className="text-center mt-5">
                <Card.Title>
                  {elem.name} {elem.surname}
                </Card.Title>
                <Card.Text>{elem.title}</Card.Text>
              </Card.Body>
              <Card.Footer className="text-center">
                <Button
                  variant="primary"
                  className="rounded-4 py-1 mt-2"
                  onClick={() => {
                    dispatch(deleteFriendAction(elem._id));
                  }}
                >
                  <BsPersonAdd /> Segui gia
                </Button>
              </Card.Footer>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};
export default ReteFav;
