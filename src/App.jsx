import { Routes, Route } from "react-router-dom";
import "./App.css";
import "./index.css";
import Login from "./Login";
import Cadastro from "./Cadastro";
import DashboardAdm from "./DashboardAdm";
import DashboardProf from "./DashboardProf";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />

      <Route path="/cadastro" element={<Cadastro />} />

      <Route path="/dashprof" element={<DashboardProf />} />

      <Route path="/dashadm" element={<DashboardAdm />} />
    </Routes>
  );
}

export default App;
