import { useEffect, useState } from "react";

import { Button, Form, Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { editExperience, experiencesHandleClose, experiencesResetPropAction, fetchAddExp } from "../redux/action";
import { Plus } from "react-bootstrap-icons";

const ExperiencesModal = () => {
  const experiencesShow = useSelector(state => state.modal.experiencesIsShowing);
  const propExp = useSelector(state => state.modal.propelem);
  const [Title, setTitle] = useState("");
  const [Employment, setEmployment] = useState("");

  const [CompanyName, setCompanyName] = useState("");

  const [Location, setLocation] = useState("");
  const [LocationType, setLocationType] = useState("");
  const [Currentlyworking, setCurrentlyWorking] = useState(false);
  const [StartDate, setStartDate] = useState(Date);
  const [EndDate, setEndDate] = useState(Date);
  const [Industry, setIndustry] = useState("");
  const [Description, setDescription] = useState("");

  const dispatch = useDispatch();
  const userId = useSelector(state => state.currentUser.userData._id);
  const experiences = useSelector(state => state.addExps.data);

  const handleObj = e => {
    dispatch(
      editExperience(
        {
          role: Employment,
          company: CompanyName,
          startDate: StartDate,
          endDate: EndDate,
          description: Description,
          area: Location,
        },
        userId,
        propExp._id,
        reRender
      )
    );
  };

  const reRender = data => {
    setEmployment(data.role);
    setCompanyName(data.company);
    setStartDate(data.startDate);
    setEndDate(data.endDate);
    setDescription(data.description);
    setLocation(data.area);
  };

  return (
    <>
      <Modal
        show={experiencesShow}
        onHide={() => {
          dispatch(experiencesResetPropAction());
          experiencesHandleClose(dispatch);
        }}
      >
        <Modal.Header closeButton>
          <Modal.Title>Aggiungi Esperienza</Modal.Title>
        </Modal.Header>
        <Form
          onSubmit={e => {
            e.preventDefault();
            if (propExp) {
              console.log(e);

              handleObj(e);
            } else {
              dispatch(
                fetchAddExp(
                  {
                    role: Employment,
                    company: CompanyName,
                    startDate: StartDate,
                    endDate: EndDate, // could be null
                    description: Description,
                    area: Location,
                  },
                  userId
                )
              );
            }
            dispatch(experiencesResetPropAction());
          }}
        >
          <Modal.Body>
            <Form.Group className="mb-3">
              <Form.Label>Titolo</Form.Label>
              <Form.Control
                type="text"
                placeholder="Titolo dell' esperienza"
                required
                defaultValue={propExp ? propExp.role : ""}
                onChange={e => {
                  setEmployment(e.target.value);
                }}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Tipo di Esperienza </Form.Label>
              <Form.Control
                type="text"
                placeholder="es. full-time"
                onChange={e => {
                  setDescription(e.target.value);
                }}
              />
              <Form.Text className="text-muted">
                Apprendi di piu' sui <span variant="primary">tipi di lavoro</span>
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Nome dell' azienda</Form.Label>
              <Form.Control
                type="text"
                placeholder="es. EPICODE"
                defaultValue={propExp ? propExp.company : ""}
                onChange={e => {
                  setCompanyName(e.target.value);
                }}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Posizione</Form.Label>
              <Form.Control
                type="text"
                placeholder="es. Milano"
                defaultValue={propExp ? propExp.area : ""}
                onChange={e => {
                  setLocation(e.target.value);
                }}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Tipo di Lavoro</Form.Label>
              <Form.Control
                type="text"
                placeholder="es. remoto, in ufficio"
                onChange={e => {
                  setLocationType(e.target.value);
                }}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Check
                type="checkbox"
                label={`in questo momento e' il mio impiego`}
                onChange={() => {
                  if (Currentlyworking === true) setCurrentlyWorking(false);
                  else {
                    setCurrentlyWorking(true);
                  }
                }}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Data di inizio</Form.Label>
              <Form.Control
                type="date"
                onChange={e => {
                  setStartDate(e.target.value);
                }}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Data di termine</Form.Label>
              <Form.Control
                type="date"
                onChange={e => {
                  setEndDate(e.target.value);
                }}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Check type="checkbox" label={`termina l'impiego corrente`} />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Check type="checkbox" label={`termina la posizione corrente`} />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Settore</Form.Label>
              <Form.Control
                type="text"
                placeholder="es. Software Development"
                onChange={e => {
                  setIndustry(e.target.value);
                }}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Descrizione</Form.Label>
              <Form.Control
                type="text"
                placeholder="..."
                defaultValue={propExp ? propExp.description : ""}
                onChange={e => {
                  setDescription(e.target.value);
                }}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Headlines del profilo</Form.Label>
              <Form.Control placeholder="qui appariranno le tue headline" disabled />
              <Form.Text className="text-muted">Appariranno sotto il tuo nome in cima al tuo profilo</Form.Text>
            </Form.Group>
            <h4 className="fw-bold">Skills</h4>
            <p>Ti consigliamo di aggiungere le tue 5 skill principali qui, appariranno nella skills section</p>
            <Button className="btn btn-light text-primary border-3 border-primary fw-bold rounded-pill fs-5">
              <Plus /> Add skill
            </Button>
            <h4 className="fw-bold mt-3">Media</h4>
            <p>
              Aggiungi media come immagini, documenti, siti o presentazioni, apprendi di piu' in merito ai{" "}
              <span variant="primary">media supportati</span>
            </p>
            <Button className="btn btn-light text-primary border-3 border-primary fw-bold rounded-pill fs-5">
              <Plus /> Add media
            </Button>
          </Modal.Body>
          <Modal.Footer>
            <Button
              variant="secondary"
              onClick={() => {
                dispatch(experiencesResetPropAction());
                experiencesHandleClose(dispatch);
              }}
            >
              Close
            </Button>
            <Button
              variant="primary"
              type="submit"
              onClick={() => {
                experiencesHandleClose(dispatch);
              }}
            >
              {propExp ? "Save Changes" : "Add Experience"}
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  );
};
export default ExperiencesModal;
