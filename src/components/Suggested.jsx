import { Button, Card, Carousel, Col } from "react-bootstrap";
import { EyeFill } from "react-bootstrap-icons";
import toolkit from "../assets/toolkit.svg";
import sector from "../assets/sector.svg";
import camera from "../assets/camera.svg";
import rulerPencil from "../assets/ruler-pencil.svg";
import profile from "../assets/profile.svg";

const Suggested = () => {
  return (
    <Col xs={12}>
      <h4>Consigliato per te</h4>
      <p>
        <EyeFill /> Solo per te
      </p>
      <h6>Principiante</h6>
      <div className="Fillbar-full">
        <div className="Fillbar-fill"></div>
      </div>
      <p>2/7</p>
      <p>
        Completa 2 passaggi per raggiungere il livello <span>Intermedio</span>
      </p>
      <Carousel>
        <Carousel.Item>
          <Card>
            <Card.Body>
              <Card.Img variant="top" src={toolkit} />
              <Card.Title>Dove lavori attualmente</Card.Title>
              <Card.Text>
                Gli utenti che includono almeno una posizione lavorativa ricevono fino a 3,5 volte piu' visualizzazioni
                del profilo.
              </Card.Text>
              <Button variant="primary">Aggiungi posizione</Button>
            </Card.Body>
          </Card>
          <Card>
            <Card.Body>
              <Card.Img variant="top" src={sector} />
              <Card.Title>In quale settore lavori?</Card.Title>
              <Card.Text>
                Gli utenti che aggiungono un settore ricevono fino a 2,5 volte piu' visualizzazioni del profilo.
              </Card.Text>
              <Button variant="primary">Aggingi settore</Button>
            </Card.Body>
          </Card>
        </Carousel.Item>
        <Carousel.Item>
          <Card>
            <Card.Body>
              <Card.Img variant="top" src={camera} />
              <Card.Title>Aggiungi una foto al tuo profilo per aiutare gli altri a riconoscerti</Card.Title>
              <Card.Text>
                Gli utenti con una foto del profilo ricevono fino a 2,3 volte piu' visualizzazioni del profilo.
              </Card.Text>
              <Button variant="primary">Aggiungi foto</Button>
            </Card.Body>
          </Card>
          <Card>
            <Card.Body>
              <Card.Img variant="top" src={rulerPencil} />
              <Card.Title>Aggiungi competenze per sbloccare nuove opportunita'</Card.Title>
              <Card.Text>
                Oltre il 50% delle aziende su Linkedin ora usa i dati sulle competenze per coprire le posizioni aperte.
              </Card.Text>
              <Button variant="primary">Aggingi una competenza</Button>
            </Card.Body>
          </Card>
        </Carousel.Item>
        <Carousel.Item>
          <Card>
            <Card.Body>
              <Card.Img variant="top" src={profile} />
              <Card.Title>
                Scrivi un riepilogo per mettere in evidenza la tua personalita'o la tua esperienza lavorativa
              </Card.Title>
              <Card.Text>
                Gli utenti che includono un riepilogo ricevono fino a 3,9 volte piu' visualizzazioni del profilo.
              </Card.Text>
              <Button variant="primary">Aggiungi un riepilogo</Button>
            </Card.Body>
          </Card>
          <Card>
            <Card.Body>
              <Card.Img variant="top" />
              <Card.Title></Card.Title>
              <Card.Text></Card.Text>
              <Button variant="primary"></Button>
            </Card.Body>
          </Card>
        </Carousel.Item>
      </Carousel>
    </Col>
  );
};

export default Suggested;
