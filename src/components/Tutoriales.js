import React, { useState } from "react";
import "./Tutoriales.css"; // Ruta del CSS para esta página

const Tutoriales = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Datos de los tutoriales
  const tutoriales = [
    {
      id: 1,
      title: "Tutorial 1",
      video: "video_url_1", // URL o código de video (YouTube, etc.)
      tags: ["Rock", "Intermedio"],
    },
    {
      id: 2,
      title: "Tutorial 2",
      video: "video_url_2",
      tags: ["Blues", "Básico"],
    },
    {
      id: 3,
      title: "Tutorial 3",
      video: "video_url_3",
      tags: ["Jazz", "Avanzado"],
    },
  ];

  const handleArrowClick = (direction) => {
    const newIndex = direction === "left" ? currentIndex - 1 : currentIndex + 1;
    if (newIndex >= 0 && newIndex < tutoriales.length) {
      setCurrentIndex(newIndex);
    }
  };

  return (
    <div className="tutoriales-container">
      <h2>Tutoriales</h2>
      <div className="tutoriales-carousel">
        <button onClick={() => handleArrowClick("left")} className="arrow left">←</button>

        <div className="tutorial-card">
          <iframe
            width="100%"
            height="200"
            src={tutoriales[currentIndex].video}
            title={tutoriales[currentIndex].title}
            frameBorder="0"
          ></iframe>
          <h3>{tutoriales[currentIndex].title}</h3>
          <p>Descripción del tutorial...</p>
          <button>Ver</button>
          <div className="tags">
            {tutoriales[currentIndex].tags.map((tag, index) => (
              <span key={index} className="tag">{tag}</span>
            ))}
          </div>
        </div>

        <button onClick={() => handleArrowClick("right")} className="arrow right">→</button>
      </div>
    </div>
  );
};

export default Tutoriales;
