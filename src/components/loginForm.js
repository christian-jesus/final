import React, { useState } from 'react';
import './LoginForm.css'; // Asegúrate de tener tu CSS para el formulario

const LoginForm = ({ onClose }) => {
  const [formData, setFormData] = useState({
    email: '', // Cambiado de 'username' a 'email'
    password: ''
  });
  const [error, setError] = useState(''); // Estado para manejar errores

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Lógica para hacer la petición al backend para login
    const response = await fetch('http://localhost:5000/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: formData.email, // Usar 'email' en lugar de 'username'
        password: formData.password
      })
    });

    const data = await response.json();

    if (response.ok) {
      // Aquí, puedes guardar el token o realizar cualquier acción después de login exitoso
      console.log('Login exitoso:', data);
      onClose(); // Cerrar el formulario al hacer submit
    } else {
      // Mostrar el error si el login no es exitoso
      setError(data.mensaje || 'Error al iniciar sesión'); // Mostrar mensaje de error del backend
    }
  };

  return (
    <div className="modal-overlay">
      <div className="login-form">
        <button className="close-button" onClick={onClose}>X</button> {/* Botón de cerrar */}

        <h2>Login</h2>

        <form onSubmit={handleSubmit}>
          <label>
            Email:
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
          </label>

          <label>
            Contraseña:
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
            />
          </label>

          {error && <p className="error-message">{error}</p>} {/* Mostrar mensaje de error si existe */}

          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
