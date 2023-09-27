import { Modal } from "react-bootstrap";
import { usersListHandleClose } from "../redux/action";
import { useDispatch, useSelector } from "react-redux";
import UserCards from "./UserCards";

const UsersListModale = () => {
  const show = useSelector((state) => state.modal.usersListIsShowing);
  const dispatch = useDispatch();
  return (
    <Modal show={show} onHide={() => usersListHandleClose(dispatch)}>
      <Modal.Header closeButton>
        <Modal.Title>Persone che potresti conoscere</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <UserCards userMax={30} />
      </Modal.Body>
    </Modal>
  );
};

export default UsersListModale;
