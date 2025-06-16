# Aplicación Backend para el Proyecto Final Web Sem

Este documento proporciona una visión general de la parte backend del proyecto Final Web Sem, detallando las instrucciones de configuración, uso y estructura de la aplicación.

## Estructura del Proyecto

La aplicación backend está organizada de la siguiente manera:

```
backend/
├── src/
│   ├── controllers/          # Contiene la lógica para manejar las solicitudes
│   │   ├── agenteContactoController.js  # Gestiona los mensajes de contacto
│   │   └── agenteServicioController.js  # Gestiona los servicios
│   ├── models/               # Define los modelos de datos
│   │   ├── mensajeContacto.js # Esquema para los mensajes de contacto
│   │   └── servicio.js       # Esquema para los servicios
│   ├── routes/               # Define las rutas de la API
│   │   ├── contacto.js       # Rutas para los mensajes de contacto
│   │   └── servicios.js      # Rutas para los servicios
│   └── app.js                # Punto de entrada principal de la aplicación
├── package.json              # Metadatos y dependencias del proyecto
```

## Instrucciones de Configuración

1. **Clonar el Repositorio**
   Clona el repositorio del proyecto en tu máquina local usando:
   ```
   git clone <url-del-repositorio>
   ```

2. **Navegar al Directorio Backend**
   Cambia al directorio backend:
   ```
   cd finalwebsem_nombre-apellido/backend
   ```

3. **Instalar Dependencias**
   Instala las dependencias requeridas usando npm:
   ```
   npm install
   ```

4. **Configurar MongoDB**
   Asegúrate de tener una instancia de MongoDB en funcionamiento. Puedes usar MongoDB Atlas como solución en la nube o ejecutarlo localmente.

5. **Configurar Variables de Entorno**
   Crea un archivo `.env` en el directorio backend y agrega tu cadena de conexión de MongoDB:
   ```
   MONGODB_URI=<tu-cadena-de-conexión-mongodb>
   ```

6. **Iniciar el Servidor**
   Ejecuta la aplicación usando:
   ```
   npm start
   ```

   El servidor se iniciará en el puerto especificado (por defecto es el 3000).

## Uso

- **Endpoints de la API**
  - **Mensajes de Contacto**
    - `POST /contacto`: Enviar un nuevo mensaje de contacto.
  - **Servicios**
    - `GET /servicios`: Obtener una lista de servicios.
    - `GET /servicios/:id`: Obtener detalles de un servicio específico.

## Conclusión

Esta aplicación backend sirve como base para el proyecto Final Web Sem, proporcionando servicios esenciales y gestionando los mensajes de contacto. Para más detalles sobre la implementación del frontend y la estructura general del proyecto, consulta los archivos de