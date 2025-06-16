# Backend Application for Final Web Sem Project

This document provides an overview of the backend part of the Final Web Sem project, detailing the setup instructions, usage, and structure of the application.

## Project Structure

The backend application is organized as follows:

```
backend/
├── src/
│   ├── controllers/          # Contains the logic for handling requests
│   │   ├── agenteContactoController.js  # Manages contact messages
│   │   └── agenteServicioController.js  # Manages services
│   ├── models/               # Defines the data models
│   │   ├── mensajeContacto.js # Schema for contact messages
│   │   └── servicio.js       # Schema for services
│   ├── routes/               # Defines the API routes
│   │   ├── contacto.js       # Routes for contact messages
│   │   └── servicios.js      # Routes for services
│   └── app.js                # Main entry point for the application
├── package.json              # Project metadata and dependencies
```

## Setup Instructions

1. **Clone the Repository**
   Clone the project repository to your local machine using:
   ```
   git clone <repository-url>
   ```

2. **Navigate to the Backend Directory**
   Change to the backend directory:
   ```
   cd finalwebsem_nombre-apellido/backend
   ```

3. **Install Dependencies**
   Install the required dependencies using npm:
   ```
   npm install
   ```

4. **Set Up MongoDB**
   Ensure you have a MongoDB instance running. You can use MongoDB Atlas for a cloud solution or run it locally.

5. **Configure Environment Variables**
   Create a `.env` file in the backend directory and add your MongoDB connection string:
   ```
   MONGODB_URI=<your-mongodb-connection-string>
   ```

6. **Start the Server**
   Run the application using:
   ```
   npm start
   ```

   The server will start on the specified port (default is 3000).

## Usage

- **API Endpoints**
  - **Contact Messages**
    - `POST /contacto`: Submit a new contact message.
  - **Services**
    - `GET /servicios`: Retrieve a list of services.
    - `GET /servicios/:id`: Retrieve details of a specific service.

## Conclusion

This backend application serves as the foundation for the Final Web Sem project, providing essential services and handling contact messages. For further details on the frontend implementation and overall project structure, please refer to the respective documentation files.