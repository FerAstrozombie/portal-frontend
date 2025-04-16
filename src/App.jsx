import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import TablaPacientes from "./components/TablaPacientes/TablaPacientes.jsx";
import UpdatePaciente from "./components/UpdatePaciente/UpdatePaciente.jsx";
import NuevoPaciente from "./components/NuevoPaciente/NuevoPaciente.jsx";
import Credencial from "./components/Credencial/Credencial.jsx";
import Signup from "./components/Signup/Signup.jsx";

function App() {

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={ <TablaPacientes /> } />
        <Route exact path="/updatePaciente" element={ <UpdatePaciente /> } />
        <Route exact path="/nuevoPaciente" element={ <NuevoPaciente /> } />
        <Route exact path="/credential" element={ <Credencial /> } />
        <Route exact path="/cargadores" element={ <Signup /> } />
      </Routes>
    </Router>
  )
}

export default App
