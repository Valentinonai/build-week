import { useState } from "react";

import { Button, Form, Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { fetchEditUser, handleClose, handleShow } from "../redux/action";

const Modale = () => {
  const show = useSelector(state => state.modal.isShowing);
  const user = useSelector(state => state.currentUser.userData);
  const [nome, setNome] = useState(user.name);
  const [cognome, setCognome] = useState(user.surname);

  const dispatch = useDispatch();

  return (
    <>
      {console.log(show)}
      <Modal
        show={show}
        onHide={() => handleClose(dispatch)}>
        <Modal.Header closeButton>
          <Modal.Title>Modifica Presentazione</Modal.Title>
        </Modal.Header>
        <Form
          onSubmit={e => {
            e.preventDefault();
            dispatch(fetchEditUser({ name: nome, surname: cognome }));
          }}>
          <Modal.Body>
            <Form.Group className="mb-3">
              <Form.Label>Nome:</Form.Label>
              <Form.Control
                type="text"
                placeholder="Scrivi qui"
                autoFocus
                required
                value={nome}
                onChange={e => {
                  setNome(e.target.value);
                }}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Cognome: </Form.Label>
              <Form.Control
                type="text"
                rows={1}
                placeholder="Scrivi qui"
                required
                value={cognome}
                onChange={e => {
                  setCognome(e.target.value);
                }}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Immagine profilo DRAG And DROP </Form.Label>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Posizione</Form.Label>
              <Form.Control
                type="text"
                rows={1}
                placeholder="Scrivi qui"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Esperienze</Form.Label>
              <Form.Control
                type="text"
                rows={1}
                placeholder="Scrivi qui"
              />
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button
              variant="secondary"
              onClick={() => handleClose(dispatch)}>
              Close
            </Button>
            <Button
              variant="primary"
              type="submit"
              onClick={() => handleClose(dispatch)}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  );
};
export default Modale;
