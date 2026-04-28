# Zero to Hero: Frontend & Backend

Este repositorio contiene un proyecto completo de desarrollo web (Fullstack) separado en dos aplicaciones principales: un servidor backend (API REST con Node.js) y un cliente frontend (React con Vite).

La arquitectura general está diseñada con el propósito de aprender cómo conectar el lado del servidor con el cliente, usando buenas prácticas de estructuración y consumo de datos.

## Estructura del Repositorio

El proyecto se divide en dos carpetas principales:

- [`/backend`](./backend/README.md): Contiene la API REST construida con Node.js y Express. Maneja la lógica de negocio, acceso a datos y expone los endpoints.
- [`/frontend`](./frontend/README.md): Contiene la aplicación cliente (SPA) construida con React y Vite. Se encarga de la interfaz de usuario y el consumo de la API.

> Puedes leer el `README.md` de cada carpeta para conocer a fondo la arquitectura, pasos de configuración y siguientes mejoras de cada sub-proyecto.

## Flujo de Funcionamiento

1. El usuario interactúa con la interfaz de React en el navegador (puerto 5173).
2. Los hooks del **frontend** (como `useUsers.js`) realizan una petición HTTP a través de un cliente (`client.js`) hacia la URL del backend.
3. El **backend** recibe la petición y, usando CORS configurado, permite que el controlador la procese.
4. El controlador extrae los datos de la capa de servicios (`user.service.js`).
5. El servicio retorna los datos simulados o procesados, y el controlador responde enviando un JSON.
6. El frontend toma el JSON, actualiza sus estados y React se encarga de mostrar la información en pantalla.

## Cómo ejecutar el entorno de desarrollo

Para poder probar la aplicación al completo, debes tener los dos entornos corriendo en simultáneo. Para eso es necesario abrir **dos terminales**:

### 1. Levantar la API (Backend)
```bash
cd backend
npm install
npm run dev
```
> El servidor iniciará, típicamente en el puerto `9000`.

### 2. Levantar el Cliente (Frontend)
```bash
cd frontend
npm install
npm run dev
```
> La aplicación web abrirá, por lo general en `http://localhost:5173`.
