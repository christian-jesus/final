import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar"; // Barra de navegación siempre visible
import WelcomePage from "./components/WelcomePage"; // Página de bienvenida
import RegisterForm from "./components/RegisterForm"; // Formulario de registro
import Preferencias from "./components/Preferencias"; // Preferencias del usuario
import Tutoriales from "./components/Tutoriales"; // Página de tutoriales

function App() {
  return (
    <Router>
      <Navbar /> {/* Navbar siempre visible en todas las páginas */}
      <Routes>
        {/* Ruta principal que muestra WelcomePage */}
        <Route path="/" element={<WelcomePage />} />
        {/* Ruta para el formulario de registro */}
        <Route path="/register" element={<RegisterForm />} />
        {/* Ruta para las preferencias del usuario */}
        <Route path="/preferencias" element={<Preferencias />} />
        {/* Ruta para la página de tutoriales */}
        <Route path="/tutoriales" element={<Tutoriales />} />
      </Routes>
    </Router>
  );
}

export default App;
