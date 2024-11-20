import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Importa Link para navegación
import './Navbar.css';
import RegisterForm from './RegisterForm'; // Formulario de registro
import LoginForm from './loginForm'; // Asegúrate de que la ruta sea correcta

const Navbar = () => {
  const [showRegisterForm, setShowRegisterForm] = useState(false);
  const [showLoginForm, setShowLoginForm] = useState(false); // Estado para el formulario de login

  return (
    <>
      <nav className="navbar">
        <div className="navbar-logo">
          {/* Redirigir al hacer clic en el logo */}
          <Link to="/"><img src="./img/logo.png" alt="Logo" /></Link>
          <span>MyWebsite</span>
        </div>
        <ul className="navbar-links">
          {/* Navegación a Tutoriales */}
          <li><Link to="/tutoriales">Tutoriales</Link></li>
          <li><a href="#comunidad">Comunidad</a></li>
          <li><a href="#academias">Academias afiliadas</a></li>
          <li><a href="#canciones">Canciones</a></li>
        </ul>
        <div>
          <button 
            className="navbar-button"
            onClick={() => setShowLoginForm(true)} // Abre el formulario de login
          >
            Login
          </button>
          <button 
            className="navbar-button register-button"
            onClick={() => setShowRegisterForm(true)} // Abre el formulario de registro
          >
            Register
          </button>
        </div>
      </nav>

      {/* Mostrar el formulario de registro si showRegisterForm es true */}
      {showRegisterForm && <RegisterForm onClose={() => setShowRegisterForm(false)} />}
      
      {/* Mostrar el formulario de login si showLoginForm es true */}
      {showLoginForm && <LoginForm onClose={() => setShowLoginForm(false)} />}
    </>
  );
};

export default Navbar;
