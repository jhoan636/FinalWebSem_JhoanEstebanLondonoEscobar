# Informe Final del Proyecto

## Resumen del Proyecto

Este proyecto consiste en el desarrollo de una aplicación web básica para una empresa ficticia de servicios. La aplicación está diseñada siguiendo la arquitectura Cliente-Servidor, utilizando Node.js y Express para el backend y HTML, CSS y JavaScript para el frontend. La base de datos utilizada es MongoDB, donde se almacenan los servicios ofrecidos y los mensajes de contacto de los usuarios.

## Estructura Cliente-Servidor

La arquitectura del proyecto se divide en dos partes principales:

1. **Cliente (Frontend)**: 
   - Se compone de archivos HTML, CSS y JavaScript que se ejecutan en el navegador del usuario.
   - Las páginas principales incluyen: Home, Servicios, Detalle de Servicio, Contacto y Acerca de.
   - Se aplica la Teoría del Color en el diseño visual para mejorar la experiencia del usuario.

2. **Servidor (Backend)**:
   - Implementado con Node.js y Express, maneja las solicitudes del cliente y se comunica con la base de datos MongoDB.
   - Se organizó en módulos que representan agentes conceptuales, como `AgenteServicio` y `AgenteContacto`, que gestionan la lógica de negocio relacionada con los servicios y los mensajes de contacto, respectivamente.

## Modelado de Agentes

Se identificaron dos agentes conceptuales principales:

- **AgenteServicio**: 
  - Responsable de gestionar los servicios ofrecidos por la empresa.
  - Incluye funciones para obtener la lista de servicios y detalles de un servicio específico.

- **AgenteContacto**: 
  - Encargado de manejar los mensajes de contacto enviados por los usuarios.
  - Incluye funciones para crear y almacenar nuevos mensajes de contacto en la base de datos.

## Ontología Diseñada

La ontología conceptual del proyecto incluye las siguientes clases y propiedades:

- **Clases de Agentes**:
  - `agt:AgenteServicio`
  - `agt:AgenteContacto`

- **Clases de Conceptos de Negocio**:
  - `biz:Servicio` con propiedades como `biz:titulo`, `biz:descripcion`, `biz:costo`.
  - `biz:MensajeContacto` con propiedades como `biz:remitente`, `biz:email`, `biz:contenido`.

- **Relaciones**:
  - `agt:AgenteServicio` gestiona `biz:Servicio`.
  - `agt:AgenteContacto` gestiona `biz:MensajeContacto`.

## Uso de MongoDB

La base de datos MongoDB se utilizó para almacenar los siguientes datos:

- **Colección de Servicios**: Contiene documentos que representan los servicios ofrecidos, con campos para el título, descripción y costo.
- **Colección de Mensajes de Contacto**: Almacena los mensajes enviados por los usuarios, incluyendo el nombre, email y contenido del mensaje.

## Aplicación de la Teoría del Color

Se eligió una paleta de colores coherente que refleja la identidad de la empresa ficticia. La selección de colores se basó en principios de la teoría del color, buscando crear un diseño atractivo y funcional que mejore la usabilidad de la aplicación.

## Conclusiones

Este proyecto ha permitido aplicar conceptos de arquitectura de software, modelado conceptual y diseño de bases de datos en un entorno práctico. La separación clara entre el cliente y el servidor, junto con la organización del código en módulos que representan agentes conceptuales, ha facilitado el desarrollo y mantenimiento de la aplicación. Además, la implementación de MongoDB ha proporcionado una solución eficiente para el almacenamiento de datos.

## Instrucciones para Ejecutar el Proyecto

1. Clonar el repositorio del proyecto.
2. Navegar a la carpeta `backend` y ejecutar `npm install` para instalar las dependencias.
3. Configurar la conexión a MongoDB en el archivo `app.js`.
4. Iniciar el servidor con `node app.js`.
5. Navegar a la carpeta `frontend` y abrir el archivo `index.html` en un navegador para acceder a la aplicación.

## Integrantes del Proyecto

- Jhoan Esteban Londono Escobar

Este informe final resume el desarrollo y la implementación de la aplicación web, destacando los aspectos clave del diseño y la arquitectura del sistema.