import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProfilePage from "./components/ProfilePage";
import Footer from "./components/Footer";
import Message from "./components/Message";
import Topbar from "./components/Topbar";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Topbar />
        <Routes>
<<<<<<< Updated upstream
          <Route
            path="/:id"
            element={<ProfilePage />}
          />
=======
          {/* <Route path="/" element={<News />} /> */}
          <Route path="profile/:id" element={<ProfilePage />} />
>>>>>>> Stashed changes
        </Routes>
        <Message />
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
