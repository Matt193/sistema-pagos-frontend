import React, { useState, useEffect } from 'react';
import CatalogService from './services/CatalogService';
import CatalogTable from './components/CatalogTable';
import './App.css';

function App() {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [lastRefresh, setLastRefresh] = useState(new Date());

  const loadCatalog = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await CatalogService.getCatalog();
      setServices(data);
      setLastRefresh(new Date());
    } catch (err) {
      setError('Error al cargar el catálogo de servicios');
      console.error('Error:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadCatalog();
  }, []);

  const handleRefresh = () => {
    loadCatalog();
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Catálogo de Servicios</h1>
        <div className="refresh-container">
          <button 
            className="refresh-button"
            onClick={handleRefresh}
            disabled={loading}
          >
            {loading ? 'Actualizando...' : '🔄 Refrescar Datos'}
          </button>
          <span className="last-refresh">
            Última actualización: {lastRefresh.toLocaleTimeString()}
          </span>
        </div>
      </header>
      
      <main className="App-main">
        {loading ? (
          <div className="loading">Cargando catálogo...</div>
        ) : error ? (
          <div className="error">
            <p>{error}</p>
            <button onClick={handleRefresh} className="refresh-error-button">
              Refrescar Datos
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
