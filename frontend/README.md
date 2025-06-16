# Frontend Application Documentation

## Project Overview
This project is a simple web application for a fictional service company. It is designed to demonstrate the concepts of Client-Server architecture, agent modeling, a basic ontology, color theory in design, and the use of a NoSQL database (MongoDB).

## Setup Instructions
To set up the frontend application, follow these steps:

1. **Clone the Repository**
   Clone the repository to your local machine using the following command:
   ```
   git clone <repository-url>
   ```

2. **Navigate to the Frontend Directory**
   Change to the frontend directory:
   ```
   cd finalwebsem_nombre-apellido/frontend
   ```

3. **Open the Application**
   Open the `public/index.html` file in your web browser to view the homepage of the application. You can navigate to other pages using the links provided in the navigation menu.

## File Structure
The frontend application consists of the following key files:

- **public/**
  - `index.html`: The main homepage of the application.
  - `servicios.html`: A page that lists the services offered by the company.
  - `detalle-servicio.html`: A page that displays details of a specific service.
  - `contacto.html`: A page containing a contact form for user inquiries.
  - `acerca-de.html`: A page that provides information about the project team.

- **css/**
  - `styles.css`: Contains the CSS styles for the application, implementing the chosen color palette.

- **js/**
  - `main.js`: Contains JavaScript code for handling user interactions and making API calls to the backend.

## Usage
- **Viewing Services**: Navigate to the "Servicios" page to view the list of services offered.
- **Service Details**: Click on a service to view its details on the "Detalle Servicio" page.
- **Contact Us**: Use the "Contacto" page to fill out the contact form. Submitting the form will send your message to the backend and store it in the MongoDB database.

## Color Theory
The design of the application applies principles of color theory to create a visually appealing and coherent user experience. The chosen color palette is justified based on the identity of the fictional company and aims to enhance usability and aesthetics.

## Conclusion
This frontend application serves as a basic demonstration of web development concepts and practices. For further details on the backend implementation, please refer to the backend README file.