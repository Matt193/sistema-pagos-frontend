# Frontend - Sistema de Pagos

Frontend desarrollado en React para el sistema de pagos que consume el endpoint `/GET catalog` y muestra el catálogo de servicios en formato de tabla.

## Características

- **Interfaz ejecutiva corporativa** con diseño profesional y moderno
- **Interfaz responsiva** que se adapta a diferentes dispositivos
- **Tabla interactiva** con búsqueda, filtrado y ordenamiento
- **Datos de prueba (mock)** para desarrollo mientras el backend no está listo
- **Toggle** para cambiar entre datos reales y datos de prueba
- **Diseño corporativo** con badges de categorías y estados
- **Formato de precios** en pesos colombianos

## Estructura del Proyecto

```
src/
  components/
    - CatalogTable.js     # Componente principal de la tabla
    - CatalogTable.css    # Estilos de la tabla
  services/
    - CatalogService.js   # Servicio para consumir API y datos mock
  App.js                  # Componente principal
  App.css                 # Estilos generales
```

## Instalación y Ejecución Local

1. **Instalar dependencias:**
   ```bash
   npm install
   ```

2. **Configurar variables de entorno (opcional):**
   ```bash
   cp .env.example .env
   # Editar .env con la URL de tu API Gateway
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

El frontend consume el endpoint `/GET catalog` a través del servicio `CatalogService`.

### URL de la API
La URL se configura mediante la variable de entorno `REACT_APP_API_URL`. Si no se especifica, usará un valor por defecto que deberás actualizar.

### Formato de Datos Esperado

```json
[
  {
    "id": 1,
    "categoria": "Energía",
    "proveedor": "Empresa Eléctrica Nacional",
    "servicio": "Luz Residencial",
    "plan": "Básico",
    "precio_mensual": 45000,
    "detalles": "150 kWh incluidos",
    "estado": "Activo"
  }
]
```

## Características de la Tabla

- **Búsqueda en tiempo real**: Filtra por cualquier campo
- **Ordenamiento**: Click en columnas para ordenar ascendente/descendente
- **Badges visuales**: Categorías y estados con colores diferenciados
- **Formato de moneda**: Precios en pesos colombianos
- **Diseño responsivo**: Se adapta a móviles y tablets

## Datos de Prueba

La aplicación incluye 20 servicios de ejemplo que cubren:
- Energía eléctrica
- Agua potable
- Servicios de Internet
- Telefonía móvil
- TV por cable
- Paquetes combinados

Puedes activar/desactivar los datos de prueba con el toggle en la interfaz.

## Tecnologías Utilizadas

- **React 18** - Framework frontend
- **Axios** - Cliente HTTP para consumir APIs
- **CSS3** - Estilos con diseño responsivo
- **JavaScript ES6+** - Lógica de la aplicación

## Consideraciones para Producción

1. **CORS**: Asegúrate de que tu API Gateway tenga configurado CORS correctamente
2. **Variables de entorno**: Configura `REACT_APP_API_URL` con tu URL real
3. **HTTPS**: CloudFront proporcionará HTTPS automáticamente
4. **Cache**: CloudFront cacheará los archivos estáticos para mejor rendimiento
5. **Monitoreo**: Considera configurar AWS CloudWatch para monitoreo

## Troubleshooting

### Problemas Comunes

1. **Error de CORS**: Verifica la configuración de CORS en API Gateway
2. **Error 403**: Revisa la política del bucket S3
3. **Error 404**: Verifica que `index.html` esté configurado como documento por defecto
4. **No carga datos**: Revisa la URL de la API y activa el modo de prueba

### Logs y Debug

- Usa las herramientas de desarrollador del navegador para revisar errores
- Los errores de red aparecerán en la pestaña Network
- Los errores de JavaScript en la pestaña Console
