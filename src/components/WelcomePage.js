import React, { useState } from "react";
import "./WelcomePage.css"; // Ruta corregida al archivo CSS
import th from "./img/th.jpg"; // Ruta corregida a la imagen
import RegisterForm from "./RegisterForm"; // La ruta aquí está bien

const ArvoFont = `
  @import url('https://fonts.googleapis.com/css2?family=Arvo:wght@400;700&display=swap');
`;

const academies = [
  {
    id: 1,
    title: "Academia Andina",
    image: require('./img/andina.jpeg'), // Ruta corregida
  },
  {
    id: 2,
    title: "Academia Cultural",
    image: require('./img/cultural.jpeg'), // Ruta corregida
  },
];

const WelcomePage = () => {
  const [showRegisterForm, setShowRegisterForm] = useState(false);

  return (
    <>
      <style>{ArvoFont}</style>
      <div className="welcome-page">
        {showRegisterForm ? (
          <RegisterForm onClose={() => setShowRegisterForm(false)} />
        ) : (
          <main className="main-content">
            <div className="welcome-text">
              <h1>¡Bienvenido a SoloGuitar!</h1>
              <p>Explora nuestra plataforma para aprender y mejorar tus habilidades de guitarra.</p>
            </div>

            <div className="advertisement">
              <img src={th} alt="Publicidad" className="advertisement-image" />
              <div className="advertisement-text">
                <h2>Aprende a tocar guitarra con el método</h2>
                <h3>más fácil, simple y efectivo</h3>
                <p>En poco tiempo estarás tocando tus canciones favoritas con las mejores clases de guitarra online</p>
                <div className="buttons">
                  <button>Materiales de aprendizaje</button>
                  {/* El botón de registro ha sido eliminado */}
                </div>
              </div>
            </div>

            <h2 className="academies-title">Academias Afiliadas</h2>
            <div className="academies-container">
              {academies.map((academy) => (
                <div key={academy.id} className="academy-card">
                  <img src={academy.image} alt={academy.title} className="academy-image" />
                  <button className="button">Visitar</button>
                </div>
              ))}
            </div>
          </main>
        )}

        <footer className="footer">
          <div className="footer-links">
            <a href="#terminos">Términos y condiciones</a>
            <a href="#seguridad">Política de seguridad</a>
            <a href="#privacidad">Política de privacidad</a>
          </div>
          <p>Copyright © SoloGuitar 2024 - 2024. Todos los derechos reservados.</p>
        </footer>
      </div>
    </>
  );
};

export default WelcomePage;
