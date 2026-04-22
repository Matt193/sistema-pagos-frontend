import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_API_URL || 'https://your-api-gateway-url.com';

class CatalogService {
  static async getCatalog() {
    try {
      const response = await axios.get(`${API_BASE_URL}/catalog`);
      return response.data;
    } catch (error) {
      console.error('Error fetching catalog:', error);
      throw error;
    }
  }

  static getMockCatalog() {
    return [
      {
        "id": 1,
        "categoria": "Energía",
        "proveedor": "Empresa Eléctrica Nacional",
        "servicio": "Luz Residencial",
        "plan": "Básico",
        "precio_mensual": 45000,
        "detalles": "150 kWh incluidos",
        "estado": "Activo"
      },
      {
        "id": 2,
        "categoria": "Energía",
        "proveedor": "Empresa Eléctrica Nacional",
        "servicio": "Luz Residencial",
        "plan": "Premium",
        "precio_mensual": 75000,
        "detalles": "300 kWh incluidos",
        "estado": "Activo"
      },
      {
        "id": 3,
        "categoria": "Agua",
        "proveedor": "Acueducto Municipal",
        "servicio": "Agua Potable",
        "plan": "Estándar",
        "precio_mensual": 25000,
        "detalles": "20 m³ incluidos",
        "estado": "Activo"
      },
      {
        "id": 4,
        "categoria": "Internet",
        "proveedor": "Tigo",
        "servicio": "Internet Hogar",
        "plan": "Básico",
        "precio_mensual": 89900,
        "detalles": "100 Mbps",
        "estado": "Activo"
      },
      {
        "id": 5,
        "categoria": "Internet",
        "proveedor": "Tigo",
        "servicio": "Internet Hogar",
        "plan": "Avanzado",
        "precio_mensual": 129900,
        "detalles": "200 Mbps",
        "estado": "Activo"
      },
      {
        "id": 6,
        "categoria": "Internet",
        "proveedor": "Movistar",
        "servicio": "Fibra Óptica",
        "plan": "Essential",
        "precio_mensual": 79900,
        "detalles": "120 Mbps",
        "estado": "Activo"
      },
      {
        "id": 7,
        "categoria": "Internet",
        "proveedor": "Movistar",
        "servicio": "Fibra Óptica",
        "plan": "Plus",
        "precio_mensual": 119900,
        "detalles": "250 Mbps",
        "estado": "Activo"
      },
      {
        "id": 8,
        "categoria": "Internet",
        "proveedor": "Claro",
        "servicio": "Internet Hogar",
        "plan": "Básico",
        "precio_mensual": 85000,
        "detalles": "100 Mbps",
        "estado": "Activo"
      },
      {
        "id": 9,
        "categoria": "Internet",
        "proveedor": "Claro",
        "servicio": "Internet Hogar",
        "plan": "Full",
        "precio_mensual": 135000,
        "detalles": "300 Mbps",
        "estado": "Activo"
      },
      {
        "id": 10,
        "categoria": "Telefonía",
        "proveedor": "Tigo",
        "servicio": "Pospago",
        "plan": "Control",
        "precio_mensual": 45000,
        "detalles": "3 GB + Minutos ilimitados",
        "estado": "Activo"
      },
      {
        "id": 11,
        "categoria": "Telefonía",
        "proveedor": "Tigo",
        "servicio": "Pospago",
        "plan": "Max",
        "precio_mensual": 85000,
        "detalles": "10 GB + Minutos ilimitados",
        "estado": "Activo"
      },
      {
        "id": 12,
        "categoria": "Telefonía",
        "proveedor": "Movistar",
        "servicio": "Pospago",
        "plan": "Básico",
        "precio_mensual": 40000,
        "detalles": "2 GB + Minutos ilimitados",
        "estado": "Activo"
      },
      {
        "id": 13,
        "categoria": "Telefonía",
        "proveedor": "Movistar",
        "servicio": "Pospago",
        "plan": "Premium",
        "precio_mensual": 90000,
        "detalles": "15 GB + Minutos ilimitados",
        "estado": "Activo"
      },
      {
        "id": 14,
        "categoria": "Telefonía",
        "proveedor": "Claro",
        "servicio": "Pospago",
        "plan": "Económico",
        "precio_mensual": 35000,
        "detalles": "1.5 GB + Minutos ilimitados",
        "estado": "Activo"
      },
      {
        "id": 15,
        "categoria": "Telefonía",
        "proveedor": "Claro",
        "servicio": "Pospago",
        "plan": "Total",
        "precio_mensual": 95000,
        "detalles": "20 GB + Minutos ilimitados",
        "estado": "Activo"
      },
      {
        "id": 16,
        "categoria": "TV",
        "proveedor": "Tigo",
        "servicio": "TV Digital",
        "plan": "Básico",
        "precio_mensual": 59900,
        "detalles": "80 canales",
        "estado": "Activo"
      },
      {
        "id": 17,
        "categoria": "TV",
        "proveedor": "Tigo",
        "servicio": "TV Digital",
        "plan": "Ultra",
        "precio_mensual": 99900,
        "detalles": "150 canales + HD",
        "estado": "Activo"
      },
      {
        "id": 18,
        "categoria": "TV",
        "proveedor": "Claro",
        "servicio": "TV Cable",
        "plan": "Estándar",
        "precio_mensual": 65000,
        "detalles": "100 canales",
        "estado": "Activo"
      },
      {
        "id": 19,
        "categoria": "TV",
        "proveedor": "Claro",
        "servicio": "TV Cable",
        "plan": "Premium",
        "precio_mensual": 110000,
        "detalles": "200 canales + HD",
        "estado": "Activo"
      },
      {
        "id": 20,
        "categoria": "Paquete",
        "proveedor": "Tigo",
        "servicio": "Triple Play",
        "plan": "Hogar",
        "precio_mensual": 199900,
        "detalles": "Internet + TV + Teléfono",
        "estado": "Activo"
      }
    ];
  }
}

export default CatalogService;
