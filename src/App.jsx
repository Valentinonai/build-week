import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProfilePage from "./components/ProfilePage";
import Footer from "./components/Footer";
import Message from "./components/Message";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/:id" element={<ProfilePage />} />
        </Routes>
        <Message />
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
