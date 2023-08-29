import { BrowserRouter, Routes, Route } from "react-router-dom";
import Auth from "./pages/Auth";
import Home from "./pages/Home";
import "./index.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

import Modal from "./components/Modal";
import { useSelector } from "react-redux";

function App() {
  const tokenString = localStorage.getItem("auth");
  const token = tokenString !== null ? JSON.parse(tokenString) : null;
  const { modal } = useSelector((state: any) => state.modal);

  return (
    <div>
      <BrowserRouter>
        {modal && <Modal />}
        <Routes>
          <Route path="/" element={token ? <Home /> : <Auth />} />
          <Route path="/auth" element={!token ? <Auth /> : <Home />} />
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </div>
  );
}

export default App;
