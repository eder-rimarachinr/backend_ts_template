import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";

import swaggerUi from "swagger-ui-express";
import swaggerSpec from "./config/swagger/swagger.config";

import { AuthModule } from "./api/auth/auth.module";
import { UsersModule } from "./api/users/users.module";
import { errorHandler } from "./middlewares/errorHandler";
import { SystemModule } from "./api/system/system.module";
import { DataBase } from "./config/database/config";
import { config } from 'dotenv';

const envFile = process.env.NODE_ENV === 'production' ? '.env.production' : '.env.development';
config({ path: envFile });

export class App {
  public app: express.Application;

  constructor() {
    this.app = express();
    this.initializeMiddlewares();
    this.initializeModules();
    this.initializeSwagger();
  }

  private initializeMiddlewares() {
    this.app.use(cors({ credentials: true }));
    this.app.use(helmet());
    this.app.use(morgan("dev"));
    this.app.use(express.json({ limit: "10mb" }));
    this.app.use(
      express.urlencoded({
        limit: "10mb",
        extended: true,
        parameterLimit: 10000,
      })
    );
  }

  private initializeModules() {
    // Ruta no protegida
    this.app.use("/api/system", new SystemModule().router);
    this.app.use("/api/auth", new AuthModule().router);

    // Rutas protegidas
    this.app.use("/api/users", new UsersModule().router);

    // Middleware de manejo de errores (debe ir al final)
    this.app.use(errorHandler);
  }

  private initializeSwagger() {
    this.app.use("/api/docs",
      swaggerUi.serve,
      swaggerUi.setup(swaggerSpec));
  }

  public listen() {
    const PORT = process.env.PROY_APP_PORT || 4000;
    this.app.listen(PORT, () => {
      DataBase.instance;
      console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
    });
  }
}
