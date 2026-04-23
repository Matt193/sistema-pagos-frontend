# Frontend - Sistema de Pagos

Frontend desarrollado en React para el sistema de pagos que consume el endpoint `/GET catalog` desde AWS API Gateway y muestra el catálogo de servicios en formato de tabla.

## 🚀 Aplicación en Producción

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

## Instalación y Ejecución Local

1. **Instalar dependencias:**
   ```bash
   npm install
   ```

2. **Configurar variables de entorno:**
   ```bash
   cp .env.example .env
   # Editar .env con la URL de tu API Gateway
   ```
   
   **URL actual configurada:**
   ```
   REACT_APP_API_URL=https://hb98779maa.execute-api.us-east-1.amazonaws.com/dev
   ```

3. **Ejecutar en modo desarrollo:**
   ```bash
   npm start
   ```

La aplicación estará disponible en `http://localhost:3000`

## Despliegue en AWS (S3 + CloudFront)

### Opción 1: Script Automatizado

```bash
# Ejecutar script de construcción y despliegue
chmod +x build-aws.sh
./build-aws.sh
```

### Opción 2: Pasos Manuales

1. **Construir para producción:**
   ```bash
   npm run build
   ```

2. **Crear bucket S3:**
   ```bash
   aws s3 mb s3://tu-nombre-de-bucket-unico
   ```

3. **Subir archivos al bucket:**
   ```bash
   aws s3 sync build/ s3://tu-nombre-de-bucket-unico --delete
   ```

4. **Configurar hosting estático en S3:**
   - Ir a la consola de S3
   - Seleccionar el bucket
   - Propiedades > Static website hosting
   - Habilitar y especificar `index.html` como documento

5. **Configurar política de acceso público:**
   ```json
   {
     "Version":"2012-10-17",
     "Statement":[{
       "Sid":"PublicReadGetObject",
       "Effect":"Allow",
       "Principal":"*",
       "Action":"s3:GetObject",
       "Resource":"arn:aws:s3:::tu-nombre-de-bucket-unico/*"
     }]
   }
   ```

6. **Crear distribución CloudFront:**
   - Origin domain: `tu-bucket.s3.amazonaws.com`
   - Viewer protocol policy: `Redirect HTTP to HTTPS`
   - Default root object: `index.html`

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

**Actualización manual:** Utiliza el botón "🔄 Refrescar Datos" para obtener la información más reciente del cluster.

## Tecnologías Utilizadas

- **React 18** - Framework frontend
- **Axios** - Cliente HTTP para consumir APIs
- **CSS3** - Estilos con diseño responsivo
- **JavaScript ES6+** - Lógica de la aplicación

## Consideraciones para Producción

1. **CORS**: API Gateway ya está configurado con CORS correctamente
2. **Variables de entorno**: `REACT_APP_API_URL` configurada con URL real de AWS
3. **HTTPS**: CloudFront proporciona HTTPS automáticamente
4. **Cache**: CloudFront cacheará los archivos estáticos para mejor rendimiento
5. **Monitoreo**: Considera configurar AWS CloudWatch para monitoreo
6. **Refresco de datos**: Los usuarios pueden actualizar manualmente los datos desde Redis

## Troubleshooting

### Problemas Comunes

1. **Error de CORS**: Revisa la configuración de CORS en API Gateway
2. **Error 403**: Verifica la política del bucket S3
3. **Error 404**: Verifica que `index.html` esté configurado como documento por defecto
4. **No carga datos**: Revisa la URL de la API y el estado del cluster Redis
5. **Datos desactualizados**: Usa el botón de refresco manual para actualizar

### Logs y Debug

- Usa las herramientas de desarrollador del navegador para revisar errores
- Los errores de red aparecerán en la pestaña Network
- Los errores de JavaScript en la pestaña Console
