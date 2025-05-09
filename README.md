Proyecto: Generador de Rutinas

📦 Descripción

Aplicación full-stack para la gestión de rutinas deportivas. Permite a los usuarios:

Registrarse e iniciar sesión

Completar su perfil (nivel, objetivos, etc.)

Crear y listar rutinas manualmente

Generar rutinas automáticamente según perfil

🛠 Tecnologías utilizadas

Frontend: Angular + TypeScript

Backend: Node.js + Express

Base de datos: MongoDB Atlas

🚀 Instrucciones de uso

1. Clonar repositorio y configurar entorno

cd frontend
npm install

cd ../backend
npm install

2. Configurar variables de entorno

Crear .env en backend/ con:

MONGO_URI=<tu_uri_de_mongodb>
JWT_SECRET=<tu_secreto>

3. Ejecutar la aplicación

Backend:

cd backend
npm run dev

Frontend:

cd frontend
ng serve

4. Acceder a la app

Ir a: http://localhost:4200

📂 Estructura del proyecto

generador-rutinas/
├── frontend/
│   ├── src/app/core/auth/...
│   ├── src/app/features/auth/...
│   ├── src/app/features/profile/...
│   ├── src/app/features/routines/...
│   └── environments/environment.ts
├── backend/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   └── routes/

✅ Funcionalidades clave

Registro / Login JWT

Guardado de token en localStorage

Protección de rutas con AuthGuard

Formulario reactivo para el perfil

CRUD de rutinas + generación automática

Conexión segura con MongoDB Atlas

📌 Notas adicionales

Requiere Node.js v18+ (evitar versiones impares como v23)

Revisar CORS y puertos si se despliega externamente

El environment.ts apunta a: http://localhost:5000/api

👤 Autor

Proyecto final de bootcamp

Desarrollado por: [Tu Nombre]

Fecha de entrega: [Fecha Final]

© 2025 Generador de Rutinas

