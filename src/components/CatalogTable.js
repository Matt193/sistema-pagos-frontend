import React, { useState } from 'react';
import './CatalogTable.css';

const CatalogTable = ({ services }) => {
  const [filter, setFilter] = useState('');
  const [sortBy, setSortBy] = useState('categoria');
  const [sortOrder, setSortOrder] = useState('asc');

  const filteredServices = services.filter(service => {
    const searchTerm = filter.toLowerCase();
    return (
      service.categoria.toLowerCase().includes(searchTerm) ||
      service.proveedor.toLowerCase().includes(searchTerm) ||
      service.servicio.toLowerCase().includes(searchTerm) ||
      service.plan.toLowerCase().includes(searchTerm) ||
      service.estado.toLowerCase().includes(searchTerm)
    );
  });

  const sortedServices = [...filteredServices].sort((a, b) => {
    let aValue = a[sortBy];
    let bValue = b[sortBy];
    
    if (typeof aValue === 'string') {
      aValue = aValue.toLowerCase();
      bValue = bValue.toLowerCase();
    }
    
    if (sortOrder === 'asc') {
      return aValue > bValue ? 1 : -1;
    } else {
      return aValue < bValue ? 1 : -1;
    }
  });

  const handleSort = (field) => {
    if (sortBy === field) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      setSortBy(field);
      setSortOrder('asc');
    }
  };

  const formatPrice = (price) => {
    return new Intl.NumberFormat('es-CO', {
      style: 'currency',
      currency: 'COP',
      minimumFractionDigits: 0
    }).format(price);
  };

  return (
    <div className="catalog-container">
      <div className="catalog-controls">
        <div className="search-container">
          <input
            type="text"
            placeholder="Buscar servicios..."
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="search-input"
          />
        </div>
        <div className="results-info">
          Mostrando {sortedServices.length} de {services.length} servicios
        </div>
      </div>

      <div className="table-wrapper">
        <table className="catalog-table">
          <thead>
            <tr>
              <th onClick={() => handleSort('categoria')} className="sortable">
                Categoría {sortBy === 'categoria' && (sortOrder === 'asc' ? '°' : '°')}
              </th>
              <th onClick={() => handleSort('proveedor')} className="sortable">
                Proveedor {sortBy === 'proveedor' && (sortOrder === 'asc' ? '°' : '°')}
              </th>
              <th onClick={() => handleSort('servicio')} className="sortable">
                Servicio {sortBy === 'servicio' && (sortOrder === 'asc' ? '°' : '°')}
              </th>
              <th onClick={() => handleSort('plan')} className="sortable">
                Plan {sortBy === 'plan' && (sortOrder === 'asc' ? '°' : '°')}
              </th>
              <th onClick={() => handleSort('precio_mensual')} className="sortable">
                Precio Mensual {sortBy === 'precio_mensual' && (sortOrder === 'asc' ? '°' : '°')}
              </th>
              <th onClick={() => handleSort('detalles')} className="sortable">
                Detalles {sortBy === 'detalles' && (sortOrder === 'asc' ? '°' : '°')}
              </th>
              <th onClick={() => handleSort('estado')} className="sortable">
                Estado {sortBy === 'estado' && (sortOrder === 'asc' ? '°' : '°')}
              </th>
            </tr>
          </thead>
          <tbody>
            {sortedServices.map((service) => (
              <tr key={service.id} className="service-row">
                <td className="category-cell">
                  <span className={`category-badge ${service.categoria.toLowerCase()}`}>
                    {service.categoria}
                  </span>
                </td>
                <td className="provider-cell">{service.proveedor}</td>
                <td className="service-cell">{service.servicio}</td>
                <td className="plan-cell">{service.plan}</td>
                <td className="price-cell">{formatPrice(service.precio_mensual)}</td>
                <td className="details-cell">{service.detalles}</td>
                <td className="status-cell">
                  <span className={`status-badge ${service.estado.toLowerCase()}`}>
                    {service.estado}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {sortedServices.length === 0 && (
        <div className="no-results">
          <p>No se encontraron servicios que coincidan con la búsqueda.</p>
        </div>
      )}
    </div>
  );
};

export default CatalogTable;
