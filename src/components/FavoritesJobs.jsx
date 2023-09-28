import { Button, Col, Container, Row } from "react-bootstrap";
import { BsFillBookmarkFill } from "react-icons/bs";

const FavoritesJobs = () => {
  <Container>
    <Row>
      <Col xs={12} lg={2}>
        <BsFillBookmarkFill /> <h2>I miei elementi</h2>
        <div className='card d-flex justify-content-between align-items-center'>
          <p>Le mie offerte di lavoro</p>
          <p>3</p>
        </div>
      </Col>
      <Col xs={12} lg={7}>
        <div className='card '>
          <h2>Le mio offerte di lavoro</h2>
          <div>
            <Button variant='danger'>Candidature inoltrate</Button>
            <Button variant='outline-secondary'>Archiviate</Button>
          </div>
        </div>
      </Col>
      <Col lg={3}></Col>
    </Row>
  </Container>;
};

export default FavoritesJobs;
