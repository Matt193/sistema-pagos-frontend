#!/bin/bash

# Script para construir y desplegar el frontend del sistema de pagos en AWS S3 + CloudFront

echo "=== Construyendo la aplicación para producción ==="

# Instalar dependencias
npm install

# Construir la aplicación
npm run build

echo "=== Build completado ==="
echo "Los archivos están en la carpeta 'build'"
echo ""
echo "=== Próximos pasos para despliegue en AWS ==="
echo "1. Crear bucket S3:"
echo "   aws s3 mb s3://sistema-pagos-frontend-unico"
echo ""
echo "2. Subir archivos al bucket:"
echo "   aws s3 sync build/ s3://sistema-pagos-frontend-unico --delete"
echo ""
echo "3. Configurar bucket como hosting estático:"
echo "   - Ir a la consola de S3"
echo "   - Seleccionar el bucket"
echo "   - Propiedades > Static website hosting"
echo "   - Habilitar y especificar 'index.html' como documento"
echo ""
echo "4. Hacer el bucket público:"
echo "   - Deshabilitar 'Block all public access'"
echo "   - Añadir política de bucket:"
echo '   {'
echo '     "Version":"2012-10-17",'
echo '     "Statement":['
echo '       {'
echo '         "Sid":"PublicReadGetObject",'
echo '         "Effect":"Allow",'
echo '         "Principal":"*",'
echo '         "Action":"s3:GetObject",'
echo '         "Resource":"arn:aws:s3:::sistema-pagos-frontend-unico/*"'
echo '       }'
echo '     ]'
echo '   }'
echo ""
echo "5. Crear distribución CloudFront:"
echo "   - Ir a CloudFront en la consola AWS"
echo "   - Crear distribución"
echo "   - Origin domain: sistema-pagos-frontend-unico.s3.amazonaws.com"
echo "   - Viewer protocol policy: Redirect HTTP to HTTPS"
echo "   - Default root object: index.html"
echo ""
echo "6. Configurar variables de entorno:"
echo "   cp .env.example .env"
echo "   # Editar .env con tu URL de API Gateway"
echo ""
echo "=== Para pruebas locales ==="
echo "npm start"
