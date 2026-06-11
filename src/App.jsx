import { Routes, Route } from "react-router-dom";
import "./App.css";
import "./index.css";
import Login from "./Login";
import Cadastro from "./Cadastro";
import DashboardAdm from "./DashboardAdm";
import DashboardProf from "./DashboardProf";
import FormList from "./FormList";
import Modal from "./components/Modal";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />

      <Route path="/cadastro" element={<Cadastro />} />

      <Route path="/dashprof" element={<DashboardProf />} />

      <Route path="/dashadm" element={<DashboardAdm />} />

      <Route path="/form" element={<FormList />} />

      <Route path="/modal" element={<Modal />} />
    </Routes>
  );
}

export default App;
