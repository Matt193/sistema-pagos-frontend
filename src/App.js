import React, { useState, useEffect } from 'react';
import CatalogService from './services/CatalogService';
import CatalogTable from './components/CatalogTable';
import './App.css';

function App() {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [useMock, setUseMock] = useState(true);

  useEffect(() => {
    const loadCatalog = async () => {
      try {
        setLoading(true);
        const data = useMock 
          ? CatalogService.getMockCatalog()
          : await CatalogService.getCatalog();
        setServices(data);
        setError(null);
      } catch (err) {
        setError('Error al cargar el catálogo de servicios');
        console.error('Error:', err);
      } finally {
        setLoading(false);
      }
    };

    loadCatalog();
  }, [useMock]);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Catálogo de Servicios</h1>
        <div className="toggle-container">
          <label className="toggle-label">
            <input
              type="checkbox"
              checked={useMock}
              onChange={(e) => setUseMock(e.target.checked)}
            />
            Usar datos de prueba
          </label>
        </div>
      </header>
      
      <main className="App-main">
        {loading ? (
          <div className="loading">Cargando catálogo...</div>
        ) : error ? (
          <div className="error">
            <p>{error}</p>
            <button onClick={() => window.location.reload()}>
              Reintentar
            </button>
          </div>
        ) : (
          <CatalogTable services={services} />
        )}
      </main>
    </div>
  );
}

export default App;
