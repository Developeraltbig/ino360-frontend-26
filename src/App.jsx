import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./components/HomePage/Home";
import InnoCheckPage from "./components/Innocheck/InnoCheckPage";
import ProvisioDraft from "./components/ProvisioDraft/ProvisioDraftPage";
import HomeTwo from "./components/HomePage2/HomeTwo";
import InnoCheckNext from "./components/InnoCheckNext/InnoCheckNext";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/homeTwo" element={<HomeTwo />} />
        <Route path="/innoCheck" element={<InnoCheckPage />} />
        <Route path="/innoCheckNext" element={<InnoCheckNext/>} />
        <Route path="/provisioDraft" element={<ProvisioDraft />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
