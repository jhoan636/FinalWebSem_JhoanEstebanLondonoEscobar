# Proyecto Final Web Semántica

## Descripción General
Este proyecto es una aplicación web básica diseñada para una empresa ficticia de servicios. Demuestra los principios de arquitectura Cliente-Servidor, modelado conceptual de agentes, diseño de una ontología simple, aplicación de la teoría del color y uso de una base de datos NoSQL (MongoDB).

## Estructura del Proyecto
El proyecto está organizado en tres directorios principales: backend, frontend y docs.

- **backend**: Contiene el código del servidor, incluyendo controladores, modelos, rutas y configuración del servidor Express.
- **frontend**: Contiene el código del cliente, incluyendo archivos HTML, CSS y JavaScript para la interfaz de usuario.
- **docs**: Contiene los archivos de documentación relacionados con la ontología, el diseño de base de datos, la teoría del color, el manual de usuario y el informe final.

## Setup Instructions

### Backend
1. Navega al directorio `backend`.
2. Instala las dependencias necesarias:
   ```
   npm install
   ```
3. **Configurar MongoDB**
   Asegúrate de tener una instancia de MongoDB en funcionamiento. Puedes usar MongoDB Atlas como solución en la nube o ejecutarlo localmente.

3. **Configurar Variables de Entorno**
   Crea un archivo `.env` en el directorio backend y agrega tu cadena de conexión de MongoDB:
   ```
   MONGODB_URI=<tu-cadena-de-conexión-mongodb>
   ```
> NOTA: Ya tiene una BD por defecto en caso de quererla cambiar lo puedes hacer en el .env
5. Start the server:
   ```
   npm start
   ```
6. El servidor se ejecutará en `http://localhost:3001`.

### Frontend
1. Navega al directorio `frontend/public`.
2. Abre `index.html` en un navegador web para visualizar la aplicación.

## Funcionalidades
- **Página de Inicio**: Página principal que presenta la empresa de servicios.
- **Página de Servicios**: Lista de los servicios ofrecidos con una breve descripción.
- **Página de Detalle de Servicio**: Muestra información detallada sobre un servicio específico.
- **Página de Contacto**: Formulario para que los usuarios envíen mensajes de contacto, los cuales se almacenan en MongoDB.

## Documentación
- Para información detallada sobre el backend, consulta `backend/README.md`.
- Para la documentación del frontend, consulta `frontend/README.md`.
- Documentación adicional sobre la ontología, el diseño de base de datos y la teoría del color se encuentra en el directorio `docs`.

## Integrantes del Equipo
Este proyecto fue desarrollado por **Jhoan Esteban Londoño Escobar**. Para más información sobre el equipo, visita la página "Acerca de" en el frontend.

## Conclusión
Este proyecto sirve como un ejercicio educativo en el desarrollo de aplicaciones web, enfocándose en la integración de diversos conceptos de la ingeniería de software.
