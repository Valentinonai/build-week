import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Topbar from "./components/Topbar";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Topbar />
      </BrowserRouter>
    </div>
  );
}

export default App;
