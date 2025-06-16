# Diseño de Base de Datos MongoDB

## Resumen
Este documento describe el diseño de la base de datos MongoDB para la aplicación web desarrollada para una empresa de servicios ficticia. La base de datos está estructurada para soportar la funcionalidad de la aplicación, incluyendo la gestión de servicios y el manejo de mensajes de contacto.

## Colecciones

### 1. Servicios
- **Nombre de la colección**: `servicios`
- **Descripción**: Esta colección almacena información sobre los servicios ofrecidos por la empresa.

#### Estructura del Documento
- **_id**: ObjectId (generado automáticamente por MongoDB)
- **titulo**: String (título del servicio)
- **descripcion**: String (breve descripción del servicio)
- **costo**: Number (costo del servicio, si aplica)

#### Ejemplo de Documento
```json
{
  "_id": "ObjectId('60c72b2f9b1e8a001c8e4f1a')",
  "titulo": "Servicio de Consultoría",
  "descripcion": "Asesoría profesional en diversas áreas.",
  "costo": 150
}
```

### 2. MensajesContacto
- **Nombre de la colección**: `mensajesContacto`
- **Descripción**: Esta colección almacena los mensajes enviados por los usuarios a través del formulario de contacto.

#### Estructura del Documento
- **_id**: ObjectId (generado automáticamente por MongoDB)
- **nombre**: String (nombre de la persona que envía el mensaje)
- **email**: String (correo electrónico del remitente)
- **mensaje**: String (contenido del mensaje)

#### Ejemplo de Documento
```json
{
  "_id": "ObjectId('60c72b2f9b1e8a001c8e4f1b')",
  "remitente": "Jhoan londono",
  "email": "jhoan@example.com",
  "contenido": "Estoy interesado en más información sobre sus servicios."
}
```

## Relaciones
- La colección `servicios` es independiente y no tiene relaciones directas con otras colecciones.
- La colección `mensajesContacto` se utiliza para almacenar consultas de los usuarios relacionadas con los servicios, pero no referencia directamente a la colección `servicios`.

## Conclusión
Este diseño de base de datos proporciona una estructura simple pero efectiva para soportar los requerimientos de la aplicación. Las colecciones están diseñadas para ser flexibles y escalables, permitiendo futuras mejoras según sea necesario.