import { useState } from "react";

import { Button, Form, Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { fetchEditUser, handleClose } from "../redux/action";
import Dropzone from "react-dropzone";

const Modale = () => {
  const show = useSelector((state) => state.modal.isShowing);
  const user = useSelector((state) => state.currentUser.userData);
  const [nome, setNome] = useState(user.name);
  const [cognome, setCognome] = useState(user.surname);
  const [area, setArea] = useState(user.area);
  const formImg = new FormData();
  const dispatch = useDispatch();

  return (
    <>
      <Modal show={show} onHide={() => handleClose(dispatch)}>
        <Modal.Header closeButton>
          <Modal.Title>Modifica Presentazione</Modal.Title>
        </Modal.Header>
        <Form
          onSubmit={(e) => {
            e.preventDefault();
            console.log(formImg.get("file"), "leggi quest"); //QUI DISPATCHFILE
            dispatch(
              fetchEditUser({
                name: nome,
                surname: cognome,
                area: user.area,
                image: JSON.stringify(formImg),
              })
            );
          }}
        >
          <Modal.Body>
            <Form.Group className="mb-3">
              <Form.Label>Nome:</Form.Label>
              <Form.Control
                type="text"
                placeholder="Scrivi qui..."
                autoFocus
                required
                value={nome}
                onChange={(e) => {
                  setNome(e.target.value);
                }}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Cognome: </Form.Label>
              <Form.Control
                type="text"
                rows={1}
                placeholder="Scrivi qui..."
                required
                value={cognome}
                onChange={(e) => {
                  setCognome(e.target.value);
                }}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Posizione</Form.Label>
              <Form.Control
                type="text"
                rows={1}
                value={area}
                placeholder="Scrivi qui..."
                onChange={(e) => {
                  setArea(e.target.value);
                }}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Curriculm</Form.Label>
              <Dropzone>
                {({ getRootProps, getInputProps, acceptedFiles }) => (
                  <>
                    {formImg.append("file", acceptedFiles[0])}
                    {console.log(formImg)}
                    <div {...getRootProps()}>
                      <input {...getInputProps()} />
                      <p>Trascina il tuo Curriculm oppure clicca per inserirlo.</p>
                    </div>
                  </>
                )}
              </Dropzone>
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => handleClose(dispatch)}>
              Close
            </Button>
            <Button variant="primary" type="submit" onClick={() => handleClose(dispatch)}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  );
};
export default Modale;
