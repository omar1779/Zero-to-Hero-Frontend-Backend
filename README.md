# Tutorial: Creación de API REST con Node.js y Express

Este tutorial documenta el progreso actual del proyecto **backend**, enfocado en la gestión de usuarios utilizando una arquitectura por capas.

## Paso 1: Configuración Inicial del Proyecto

Soporte para módulos de ES (import/export) y configuración del entorno de desarrollo.

1. **Inicialización**: Ejecución de `npm init -y`.
2. **Módulos**: Configuración de `"type": "module"` en `package.json`.
3. **Dependencias**:
   - `express`: Servidor web.
   - `cors`: Seguridad y acceso cruzado.
   - `dotenv`: Gestión de variables de entorno.
   - `nodemon` (dev): Reinicio automático.

## Paso 2: Estructura del Proyecto

Hemos implementado una arquitectura limpia por capas:

- `src/config/`: Configuraciones globales (CORS, etc.).
- `src/services/`: Lógica de acceso a datos (simulada por ahora).
- `src/controllers/`: Lógica de negocio y manejo de peticiones HTTP.
- `src/routes/`: Definición de los puntos de acceso (endpoints).
- `src/app.js`: Corazón de la aplicación y punto de entrada.

## Paso 3: Capa de Servicios (Datos)

El archivo `src/services/user.service.js` actúa como nuestro repositorio de datos. Por ahora, devuelve un arreglo estático de usuarios para simular una respuesta de base de datos.

## Paso 4: Capa de Controladores

En `src/controllers/user.controllers.js` procesamos la lógica de la petición:
- Llamamos al servicio correspondiente.
- Esperamos la respuesta.
- Enviamos los datos al cliente con el código de estado adecuado (200 para éxito, 500 para errores).

## Paso 5: Rutas y Middlewares

- **CORS**: Configurado en `src/config/cors.js` para permitir peticiones desde el frontend (`localhost:5173`).
- **Endpoints**: Las rutas se registran en `src/routes/user.routes.js` y se montan en el servidor con el prefijo `/api/users`.

## Paso 6: Servidor Principal (app.js)

Ensamblamos todo:
1. Cargamos middlewares (CORS y JSON Parser).
2. Integramos las rutas del proyecto.
3. Iniciamos el servidor en el puerto 9000.

---

## Cómo ejecutar el proyecto

1. Instalar dependencias: `npm install`
2. Iniciar en desarrollo: `npm run dev`
3. Probar endpoint: `GET http://localhost:9000/api/users`

## Próximos Pasos
- Conexión a base de datos real.
- Implementación de POST, PUT y DELETE.
- Añadir validaciones y seguridad.
