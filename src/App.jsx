import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import ProfilePage from "./components/ProfilePage";
import Footer from "./components/Footer";
import Message from "./components/Message";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<ProfilePage />}
          />
        </Routes>
        <Message />
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
