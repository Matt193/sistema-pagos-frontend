# Frontend - Sistema de Pagos

Frontend desarrollado en React para el sistema de pagos que consume el endpoint `/GET catalog` desde AWS API Gateway y muestra el catálogo de servicios en formato de tabla.

##  Aplicación en Producción

**URL de producción:** http://sistema-pagos-frontend-prod.s3-website-us-east-1.amazonaws.com/

## Características

- **Interfaz ejecutiva corporativa** con diseño profesional y moderno
- **Interfaz responsiva** que se adapta a diferentes dispositivos
- **Tabla interactiva** con búsqueda, filtrado y ordenamiento
- **Datos dinámicos** consumidos directamente desde API Gateway de AWS
- **Botón de refresco manual** para actualizar datos desde el cluster Redis
- **Diseño corporativo** con badges de categorías y estados
- **Formato de precios** en pesos colombianos

## Estructura del Proyecto

```
src/
  components/
    - CatalogTable.js     # Componente principal de la tabla
    - CatalogTable.css    # Estilos de la tabla
  services/
    - CatalogService.js   # Servicio para consumir API de AWS
  App.js                  # Componente principal
  App.css                 # Estilos generales
  .env                    # Variables de entorno (URL de API Gateway)
```

## Configuración de la API

El frontend consume el endpoint `/GET catalog` directamente desde AWS API Gateway.

### URL de la API

**Endpoint configurado:** `https://hb98779maa.execute-api.us-east-1.amazonaws.com/dev/catalog`

La URL se configura mediante la variable de entorno `REACT_APP_API_URL` en el archivo `.env`.

### Formato de Datos Esperado

```json
[
  {
    "id": 1,
    "categoria": "Energía",
    "proveedor": "Empresa Eléctrica Nacional",
    "servicio": "Luz Residencial",
    "plan": "Básico",
    "precio_mensual": 4500,
    "detalles": "150 kWh incluidos",
    "estado": "Activo"
  }
]
```

*Nota: Los datos son consumidos dinámicamente desde un cluster Redis a través de API Gateway.*

## Características de la Tabla

- **Búsqueda en tiempo real**: Filtra por cualquier campo
- **Ordenamiento**: Click en columnas para ordenar ascendente/descendente
- **Badges visuales**: Categorías y estados con colores diferenciados
- **Formato de moneda**: Precios en pesos colombianos
- **Diseño responsivo**: Se adapta a móviles y tablets
- **Refresco manual**: Botón para actualizar datos desde la API

## Datos Dinámicos

La aplicación consume datos en tiempo real desde el cluster Redis a través de API Gateway. Los servicios mostrados incluyen:
- Energía eléctrica
- Agua potable
- Servicios de Internet
- Telefonía móvil
- TV por cable
- Paquetes combinados

**Actualización manual:** Utiliza el botón " Refrescar Datos" para obtener la información más reciente del cluster.

## Tecnologías Utilizadas

- **React 18** - Framework frontend
- **Axios** - Cliente HTTP para consumir APIs
- **CSS3** - Estilos con diseño responsivo
- **JavaScript ES6+** - Lógica de la aplicación

