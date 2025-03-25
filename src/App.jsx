import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import TablaPacientes from "./components/TablaPacientes/TablaPacientes.jsx";
import UpdatePaciente from "./components/UpdatePaciente/UpdatePaciente.jsx";

function App() {

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={ <TablaPacientes /> } />
        <Route exact path="/updatePaciente" element={ <UpdatePaciente /> } />
      </Routes>
    </Router>
  )
}

export default App
