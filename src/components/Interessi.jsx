import { Tab, Tabs } from "react-bootstrap";

const Interessi = () => {
  return (
    <div className="border border-1 rounded mt-3 p-2 ">
      <h4 className="mt-3">Interessi</h4>
      <Tabs
        defaultActiveKey="profile"
        id="uncontrolled-tab-example"
        variant="underline"
        style={{ borderBottom: "1px solid grey" }}
      >
        <Tab eventKey="Aziende" title="Aziende" className="mt-3 mb-3">
          Aziende che segui compariranno qui
        </Tab>
        <Tab eventKey="Scuole e università" title="Scuole e università" className="mt-3 mb-3">
          Le scuole che hai seguito compariranno qui
        </Tab>
      </Tabs>
    </div>
  );
};

export default Interessi;
