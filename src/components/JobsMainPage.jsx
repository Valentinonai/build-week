import JobsSideBar from "./JobsSideBar";
import SidebarFooter from "../SideBar/SidebarFooter";
import { ArrowRight, Search } from "react-bootstrap-icons";
import { WorkSection } from "./WorkSection";

const { Row, Col, Card, Button, Container } = require("react-bootstrap");

const JobsMainPage = () => {
  return (
    <Container fluid="lg">
      <Row className="pt-3">
        <Col xs={2}>
          <JobsSideBar />
        </Col>
        <Col xs={7}>
          <Card className="p-3">
            <h5 className="pb-2">Ricerche di offerte di lavoro suggerite</h5>
            <Row className="gy-2 gx-2">
              <Col xs="auto">
                <Button size="sm" variant="outline-primary" className="text-nowrap rounded-pill fw-bold">
                  <Search className="me-2" />
                  Marketing manager
                </Button>
              </Col>
              <Col xs="auto">
                <Button size="sm" variant="outline-primary" className="text-nowrap rounded-pill fw-bold">
                  <Search className="me-2" />
                  hr
                </Button>
              </Col>
              <Col xs="auto">
                <Button size="sm" variant="outline-primary" className="text-nowrap rounded-pill fw-bold">
                  <Search className="me-2" />
                  legal
                </Button>
              </Col>
              <Col xs="auto">
                <Button size="sm" variant="outline-primary" className="text-nowrap rounded-pill fw-bold">
                  <Search className="me-2" />
                  sales
                </Button>
              </Col>
              <Col xs="auto">
                <Button size="sm" variant="outline-primary" className="text-nowrap rounded-pill fw-bold">
                  <Search className="me-2" />
                  amazon
                </Button>
              </Col>
              <Col xs="auto">
                <Button size="sm" variant="outline-primary" className="text-nowrap rounded-pill fw-bold">
                  <Search className="me-2" />
                  google
                </Button>
              </Col>
              <Col xs="auto">
                <Button size="sm" variant="outline-primary" className="text-nowrap rounded-pill fw-bold">
                  <Search className="me-2" />
                  analyst
                </Button>
              </Col>
            </Row>
          </Card>
          <Card className="p-3 mt-3 rounded-0 rounded-top-2">
            <h5>Consigliato per te</h5>
            <p className="opacity-50" style={{ fontSize: "0.9rem" }}>
              Sulla base del tuo profilo e della tua cronologia delle ricerche
            </p>
          </Card>
          <WorkSection />
          <Card className="rounded-0 rounded-bottom-2 text-center p-2">
            <h6 className="opacity-50 fw-bold">
              Mostra tutto <ArrowRight />
            </h6>
          </Card>
        </Col>
        <Col xs={3}>
          <SidebarFooter />
        </Col>
      </Row>
    </Container>
  );
};

export default JobsMainPage;
