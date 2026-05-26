import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [facts, setFacts] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentTip, setCurrentTip] = useState('');

  // Cargar datos del backend al iniciar (Integración HTTP)
  useEffect(() => {
    fetch('http://localhost:3001/api/facts')
      .then(res => res.json())
      .then(data => setFacts(data))
      .catch(err => console.error('Error fetching facts:', err));
  }, []);

  // Función para obtener un consejo dinámico desde el servidor Node.js
  const handleGetTip = () => {
    fetch('http://localhost:3001/api/tips/random')
      .then(res => res.json())
      .then(data => {
        setCurrentTip(data.tip);
        setIsModalOpen(true);
      })
      .catch(err => console.error('Error fetching tip:', err));
  };

  return (
    <div className="app-container">
      {/* Navbar Responsivo */}
      <nav className="navbar">
        <div className="logo">🌱 EcoHub</div>
      </nav>

      {/* Sección Hero */}
      <header className="hero">
        <h1>Pequeños cambios,<br/>Gran impacto global</h1>
        <p>
          Descubre el estado de nuestro planeta y aprende acciones sencillas
          que puedes aplicar hoy mismo para reducir tu huella ecológica.
        </p>
        <button className="btn-primary" onClick={handleGetTip}>
          ✨ Obtener un consejo verde
        </button>
      </header>

      {/* Contenido Principal con Grid */}
      <main className="main-content">
        <h2 className="section-title">Datos que debes conocer</h2>
        <div className="facts-grid">
          {facts.length === 0 ? (
            <p style={{ textAlign: 'center', width: '100%', color: 'var(--text-muted)' }}>
              Cargando datos desde el servidor Express...
            </p>
          ) : (
            facts.map(fact => (
              <div key={fact.id} className="glass-card">
                <h3>{fact.title}</h3>
                <p>{fact.description}</p>
              </div>
            ))
          )}
        </div>
      </main>

      {/* Footer */}
      <footer className="footer">
        <p>© 2026 EcoHub - Proyecto Final de Desarrollo Full Stack</p>
      </footer>

      {/* Modal Interactivo */}
      {isModalOpen && (
        <div className="modal-overlay" onClick={() => setIsModalOpen(false)}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <button className="close-btn" onClick={() => setIsModalOpen(false)}>
              &times;
            </button>
            <h2>💡 Consejo del Día</h2>
            <p>{currentTip}</p>
            <button className="btn-primary" onClick={() => setIsModalOpen(false)}>
              ¡Lo haré!
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
