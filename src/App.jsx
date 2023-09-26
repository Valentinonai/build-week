import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProfilePage from "./components/ProfilePage";
import Footer from "./components/Footer";
import Message from "./components/Message";
import Topbar from "./components/Topbar";
import Home from "./components/Home";
import { useSelector } from "react-redux";
import { Alert } from "react-bootstrap";

function App() {
  const error = useSelector((state) => state.currentUser.hasError);
  const errorMsg = useSelector((state) => state.currentUser.errorMessage);
  return (
    <div className="App">
      {error ? (
        <Alert variant="danger">{errorMsg}</Alert>
      ) : (
        <BrowserRouter>
          <Topbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="profile/:id" element={<ProfilePage />} />
          </Routes>
          <Message />
          <Footer></Footer>
        </BrowserRouter>
      )}
    </div>
  );
}

export default App;
