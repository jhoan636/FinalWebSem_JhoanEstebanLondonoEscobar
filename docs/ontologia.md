# Ontología Conceptual para la Aplicación Web de Servicios

## Introducción
La ontología conceptual de esta aplicación web se ha diseñado para estructurar y organizar la información de manera que sea accesible tanto para los usuarios como para el sistema. Se identifican dos agentes principales: **AgenteServicio** y **AgenteContacto**, así como los conceptos de negocio relevantes: **Servicio** y **MensajeContacto**.

## Agentes Conceptuales

### AgenteServicio
- **Responsabilidad**: Gestionar la información relacionada con los servicios ofrecidos por la empresa.
- **Relaciones**:
  - `agt:AgenteServicio agt:gestiona biz:Servicio`

### AgenteContacto
- **Responsabilidad**: Manejar los mensajes de contacto enviados por los usuarios.
- **Relaciones**:
  - `agt:AgenteContacto agt:gestiona biz:MensajeContacto`

## Clases de Conceptos de Negocio

### Servicio
- **Propiedades**:
  - `biz:Servicio tiene biz:titulo`
  - `biz:Servicio tiene biz:descripcion`
  - `biz:Servicio tiene biz:costo`

### MensajeContacto
- **Propiedades**:
  - `biz:MensajeContacto tiene biz:remitente`
  - `biz:MensajeContacto tiene biz:email`
  - `biz:MensajeContacto tiene biz:contenido`

## Estructura de la Ontología
La ontología se puede representar de la siguiente manera:

```
AgenteServicio
  └── gestiona
      └── Servicio
          ├── titulo
          ├── descripcion
          └── costo

AgenteContacto
  └── gestiona
      └── MensajeContacto
          ├── remitente
          ├── email
          └── contenido
```

## Conclusión
Esta ontología conceptual proporciona un marco claro para el desarrollo de la aplicación, asegurando que los agentes y conceptos estén bien definidos y estructurados. Esto facilitará la implementación y el mantenimiento del sistema, así como la comprensión de su funcionamiento por parte de los desarrolladores y usuarios.