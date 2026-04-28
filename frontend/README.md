# Tutorial: Creación de Cliente React con Vite

Este documento detalla la estructura y el progreso actual de la aplicación **frontend**, desarrollada para consumir e interactuar con la API REST del backend.

## Paso 1: Configuración Inicial del Proyecto

El proyecto se inicializó utilizando la herramienta de empaquetado Vite, la cual ofrece un entorno de desarrollo muy rápido y ligero para React.

1. **Inicialización**: Creación del proyecto con la plantilla de React usando `npm create vite@latest`.
2. **Dependencias principales**:
   - `react` y `react-dom`: Librerías centrales para crear interfaces de usuario.
   - `vite`: Entorno de desarrollo y construcción (build tool).

## Paso 2: Estructura del Proyecto

Hemos organizado el código para mantener una clara separación de responsabilidades y fomentar un código limpio:

- `src/api/`: Configuraciones de red. Aquí vive el archivo `client.js` donde configuramos nuestro acceso base al backend (`http://localhost:9000/api`).
- `src/hooks/`: Custom hooks de React (como `useUsers.js`). Encapsulan la lógica de fetching y estado asíncrono para mantener limpios los componentes.
- `src/components/`: Componentes visuales y de interfaz de usuario.
- `src/assets/`: Imágenes, SVG e iconos estáticos que usa la UI.
- `src/App.jsx` y `src/main.jsx`: Punto de montaje e inicio general de la aplicación.

## Paso 3: Consumo de la API (Capa de Red)

En la carpeta `src/api/` centralizamos las peticiones HTTP. Al usar un `client.js` separado, cualquier cambio de dominio del backend o el agregado de tokens de seguridad (headers) puede hacerse desde un único lugar sin tener que buscar petición por petición en todos los componentes.

## Paso 4: Manejo de Estado (Custom Hooks)

Para separar la lógica de negocio de la vista visual, usamos hooks personalizados como `useUsers.js`. 
Este hook se responsabiliza de:
- Llamar al servicio API correspondiente.
- Controlar estados como `loading` (cargando), `error` (si falla la petición) y `data` (la lista recibida).
- Exponer estas variables para que la UI responda en tiempo real.

## Paso 5: Componentes de Interfaz

En carpetas como `src/components/`, nos dedicamos netamente al UI. Los componentes aquí:
- Consumen los hooks que creamos en el paso anterior.
- Renderizan estados de carga (un simple "Cargando...") mientras llega la información.
- Muestran una lista, tabla o tarjetas visuales cuando la información está lista.

---

## Cómo ejecutar de forma individual

1. Asegúrate de estar en el directorio correcto: `cd frontend`
2. Instala dependencias: `npm install`
3. Arranca el entorno local: `npm run dev`
4. Navega a la URL que indique la consola (usualmente `http://localhost:5173`)

*(Recuerda que para que los datos carguen de verdad, el servicio backend debe estar corriendo también).*

## Próximos Pasos en la UI
- Implementar React Router (`react-router-dom`) para soportar múltiples vistas (dashboard, configuraciones).
- Formularios interactivos para POST, PUT y DELETE usando componentes controlados en React.
- Mejorar el diseño global y la accesibilidad de la aplicación.
