import { Card, Dropdown, Image } from "react-bootstrap";
import { Calendar3, CardList, Hash, PeopleFill, PersonFill, Postcard } from "react-bootstrap-icons";
import SidebarFooter from "../SideBar/SidebarFooter";

const SidebarRete = () => {
  return (
    <Card className="p-3">
      <div className="d-flex">
        <PeopleFill className="me-2 align-self-center" size={35} />
        <p className="fw-bold mb-0">Collegamenti</p>
      </div>
      <Dropdown>
        <Dropdown.Toggle>Vedi altro</Dropdown.Toggle>
        <Dropdown.Menu>
          <div className="d-flex">
            <PersonFill className="me-2 align-self-center" size={30} />
            <p className="fw-bold pt-3">Persone che segui e follower</p>
          </div>
          <div className="d-flex mb-2">
            <Calendar3 className="me-2 align-self-center" size={35} />
            <p className="fw-bold mb-0">Eventi</p>
          </div>
          <div className="d-flex mb-2">
            <CardList className="me-2 align-self-center" size={35} />
            <p className="fw-bold mb-0">Pagine</p>
          </div>
          <div className="d-flex">
            <Postcard className="me-2 align-self-center" size={35} />
            <p className="fw-bold mb-0">Newsletter</p>
          </div>
          <div className="d-flex">
            <Hash className="me-2 align-self-center" size={35} />
            <p className="fw-bold mb-0">Hashtag</p>
          </div>
        </Dropdown.Menu>
      </Dropdown>
      <Image fluid src="https://media.licdn.com/media/AAYQAgTPAAgAAQAAAAAAADVuOvKzTF-3RD6j-qFPqhubBQ.png" />

      <SidebarFooter />
    </Card>
  );
};

export default SidebarRete;
