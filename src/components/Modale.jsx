import { useState } from "react";

import { Button, Form, Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { handleClose, handleShow } from "../redux/action";

const Modale = () => {
  const show = useSelector(state => state.modal.isShowing);

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
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Nome:</Form.Label>
              <Form.Control
                type="text"
                placeholder="Scrivi qui"
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Cognome: </Form.Label>
              <Form.Control
                type="text"
                rows={1}
                placeholder="Scrivi qui"
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
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="secondary"
            type="submit"
            onClick={() => handleClose(dispatch)}>
            Close
          </Button>
          <Button
            variant="primary"
            onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
export default Modale;
