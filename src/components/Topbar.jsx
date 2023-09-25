import { useEffect, useState } from "react";
import { Col, Container, Form, Nav, NavDropdown, Navbar } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchProfileData, searchJobAction } from "../redux/action";
import DropdownItem from "react-bootstrap/esm/DropdownItem";
import ProfileTopbar from "./ProfileTopbar";

const Topbar = () => {
  const [search, setSearch] = useState("");
  const profile = useSelector((state) => state.currentUser.userData);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(searchJobAction(search));
  };

  useEffect(() => {
    dispatch(fetchProfileData());
  }, []);

  return (
    <Navbar sticky="top" bg="light" expand="lg">
      <Container fluid className="px-5">
        <Container className="d-flex px-1 align-items-center">
          <Link to={"/"}>
            <Navbar.Brand href="#">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="34"
                height="34"
                fill="currentColor"
                className="bi bi-linkedin text-primary"
                viewBox="0 0 16 16"
              >
                <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
              </svg>
            </Navbar.Brand>
          </Link>
          <Navbar.Toggle className="ms-auto" aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Col xs={2}>
              <Form onSubmit={handleSubmit} className="d-flex bg-light">
                <Form.Control
                  type="search"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="🔍 Search"
                  className="input-search me-2 border-0 rounded"
                  aria-label="Search"
                />
              </Form>
            </Col>
            <Nav className="ms-auto my-2 my-lg-0 gap-2 align-items-center" style={{ maxHeight: "100px" }} navbarScroll>
              <Link to={"/"} className="text-decoration-none">
                <Nav.Link href="#action1" className="link-nav">
                  <div className="d-flex flex-column align-items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      data-supported-dps="24x24"
                      fill="currentColor"
                      className="mercado-match"
                      width="24"
                      height="24"
                      focusable="false"
                    >
                      <path d="M23 9v2h-2v7a3 3 0 01-3 3h-4v-6h-4v6H6a3 3 0 01-3-3v-7H1V9l11-7z"></path>
                    </svg>
                    Home
                  </div>
                </Nav.Link>
              </Link>
              <Nav.Link href="#action2" className="link-nav ">
                <div className="d-flex flex-column align-items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    data-supported-dps="24x24"
                    fill="currentColor"
                    className="mercado-match"
                    width="24"
                    height="24"
                    focusable="false"
                  >
                    <path d="M12 16v6H3v-6a3 3 0 013-3h3a3 3 0 013 3zm5.5-3A3.5 3.5 0 1014 9.5a3.5 3.5 0 003.5 3.5zm1 2h-2a2.5 2.5 0 00-2.5 2.5V22h7v-4.5a2.5 2.5 0 00-2.5-2.5zM7.5 2A4.5 4.5 0 1012 6.5 4.49 4.49 0 007.5 2z"></path>
                  </svg>
                  Rete
                </div>
              </Nav.Link>
              <Link to={"/jobs/"} className="text-decoration-none">
                <Nav.Link href="#action2" className="link-nav ">
                  <div className="d-flex flex-column align-items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      data-supported-dps="24x24"
                      fill="currentColor"
                      className="mercado-match"
                      width="24"
                      height="24"
                      focusable="false"
                    >
                      <path d="M17 6V5a3 3 0 00-3-3h-4a3 3 0 00-3 3v1H2v4a3 3 0 003 3h14a3 3 0 003-3V6zM9 5a1 1 0 011-1h4a1 1 0 011 1v1H9zm10 9a4 4 0 003-1.38V17a3 3 0 01-3 3H5a3 3 0 01-3-3v-4.38A4 4 0 005 14z"></path>
                      <path d="M17 6V5a3 3 0 00-3-3h-4a3 3 0 00-3 3v1H2v4a3 3 0 003 3h14a3 3 0 003-3V6zM9 5a1 1 0 011-1h4a1 1 0 011 1v1H9zm10 9a4 4 0 003-1.38V17a3 3 0 01-3 3H5a3 3 0 01-3-3v-4.38A4 4 0 005 14z"></path>
                    </svg>
                    Lavoro
                  </div>
                </Nav.Link>
              </Link>
              <Nav.Link href="#action2" className="link-nav ">
                <div className="d-flex flex-column align-items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    data-supported-dps="24x24"
                    fill="currentColor"
                    className="mercado-match"
                    width="24"
                    height="24"
                    focusable="false"
                  >
                    <path d="M16 4H8a7 7 0 000 14h4v4l8.16-5.39A6.78 6.78 0 0023 11a7 7 0 00-7-7zm-8 8.25A1.25 1.25 0 119.25 11 1.25 1.25 0 018 12.25zm4 0A1.25 1.25 0 1113.25 11 1.25 1.25 0 0112 12.25zm4 0A1.25 1.25 0 1117.25 11 1.25 1.25 0 0116 12.25z"></path>
                  </svg>
                  Messaggistica
                </div>
              </Nav.Link>
              <Nav.Link href="#action2" className="link-nav ">
                <div className="d-flex flex-column align-items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    data-supported-dps="24x24"
                    fill="currentColor"
                    className="mercado-match"
                    width="24"
                    height="24"
                    focusable="false"
                  >
                    <path d="M22 19h-8.28a2 2 0 11-3.44 0H2v-1a4.52 4.52 0 011.17-2.83l1-1.17h15.7l1 1.17A4.42 4.42 0 0122 18zM18.21 7.44A6.27 6.27 0 0012 2a6.27 6.27 0 00-6.21 5.44L5 13h14z"></path>
                  </svg>
                  Notifiche
                </div>
              </Nav.Link>
              <div className="d-flex flex-column align-items-center px-0">
                <Col className="d-flex justify-content-center">
                  <img
                    src={profile.image}
                    alt="profile-img"
                    className="img-profile-nav rounded-circle"
                    width="24"
                    height="24"
                  />
                </Col>
                <NavDropdown title="Tu" className="link-nav ">
                  <DropdownItem className="p-0">
                    <ProfileTopbar />
                  </DropdownItem>
                </NavDropdown>
              </div>
              <div className="d-flex flex-column align-items-center border-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  data-supported-dps="24x24"
                  fill="currentColor"
                  className="mercado-match"
                  width="24"
                  height="24"
                  focusable="false"
                >
                  <path d="M3 3h4v4H3zm7 4h4V3h-4zm7-4v4h4V3zM3 14h4v-4H3zm7 0h4v-4h-4zm7 0h4v-4h-4zM3 21h4v-4H3zm7 0h4v-4h-4zm7 0h4v-4h-4z"></path>
                </svg>
                <NavDropdown title="Lavoro" className="link-nav"></NavDropdown>
              </div>
              <Nav.Link className="text-gratis text-decoration-underline d-flex align-items-center">
                Prova Premium gratis
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Container>
    </Navbar>
  );
};

export default Topbar;
