# Backend Template con TypeScript, JWT, Passport y Sequelize

Este proyecto es un template de backend en **TypeScript**, diseñado con **Programación Orientada a Objetos (POO)**. Incluye autenticación con **JWT y Passport.js**, gestión de usuarios y roles, y soporte para **migraciones con Sequelize**.

## 🚀 Tecnologías utilizadas

- **Node.js** con **Express** v.22.14.0
- **TypeScript**
- **Sequelize** (ORM para bases de datos SQL)
- **Passport.js** para autenticación con JWT
- **bcrypt** para encriptación de contraseñas
- **dotenv** para gestión de variables de entorno

## 📂 Estructura del proyecto

```
/src
  ├── api
  │   ├── auth
  │   │   ├── auth.controller.ts
  │   │   ├── auth.service.ts
  │   │   ├── auth.module.ts
  │   │   ├── auth.routes.ts
  │   │   ├── auth.strategy.ts
  │   │   └── auth.middleware.ts
  │   ├── users
  │   │   ├── user.controller.ts
  │   │   ├── user.service.ts
  │   │   ├── user.model.ts
  │   │   ├── user.routes.ts
  │   │   └── user.repository.ts
  ├── config
  │   ├── database
  |   |   |-- config.ts
  |   |-- swagger
  |       |-- swagger.config.ts
  |-- app.ts
  |-- server.ts
  ├── migrations
  ├── package.json
  ├── tsconfig.json
```

## 🔧 Instalación y configuración

### 1️⃣ Clonar el repositorio
```bash
git clone https://github.com/eder-rimarachinr/backend_ts_template.git
cd backend_ts_template
```

### 2️⃣ Instalar dependencias
```bash
npm install
```

### 3️⃣ Configurar variables de entorno
Crea un archivo **.env** en la raíz del proyecto y agrega:
```env
PORT=3000
JWT_SECRET=tu_secreto_super_secreto
DATABASE_URL=postgres://usuario:password@localhost:5432/tu_base_de_datos
```

### 4️⃣ Ejecutar migraciones con Sequelize
```bash
npx sequelize-cli db:migrate
```

### 5️⃣ Iniciar el servidor en desarrollo
```bash
npm run dev
```

## 🔑 Autenticación con Passport y JWT

El proyecto utiliza **Passport.js** para manejar la autenticación mediante **JWT**. La estrategia de autenticación se define en `auth.strategy.ts` y se aplica a rutas protegidas con el middleware `authenticateJWT`.

### ✨ Rutas disponibles

#### 🔹 Registro de usuario
**POST** `/auth/signup`
```json
{
  "username": "user123",
  "password": "securepassword",
  "role": "admin"
}
```

#### 🔹 Inicio de sesión
**POST** `/auth/login`
```json
{
  "username": "user123",
  "password": "securepassword"
}
```

#### 🔹 Obtener perfil (protegido con JWT)
**GET** `/auth/profile`
```bash
Authorization: Bearer <TOKEN>
```

## 🛠️ Migraciones con Sequelize

Para manejar la base de datos, el proyecto utiliza **Sequelize**.

### 🔹 Crear una nueva migración
```bash
npx sequelize-cli migration:generate --name create-users
```

### 🔹 Ejecutar migraciones
```bash
npx sequelize-cli db:migrate
```

### 🔹 Revertir la última migración
```bash
npx sequelize-cli db:migrate:undo
```

## 🏗️ Arquitectura basada en POO

El código sigue una arquitectura modular con **Programación Orientada a Objetos (POO)**.
- **Servicios** (`auth.service.ts`, `user.service.ts`) manejan la lógica de negocio.
- **Controladores** (`auth.controller.ts`, `user.controller.ts`) gestionan las peticiones HTTP.
- **Modelos** (`user.model.ts`) representan las entidades de la base de datos.
- **Repositorios** (`user.repository.ts`) interactúan con la base de datos.

## 📜 Licencia
MIT License.

## 💡 Contribuciones
¡Las contribuciones son bienvenidas! Si quieres mejorar este template, abre un PR o crea un issue en GitHub.

---

Hecho con ❤️ por Eder Rimarachin 🚀

