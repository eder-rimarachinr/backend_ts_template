import * as dotenv from "dotenv";
import path from "path";

// Cargar variables de entorno
dotenv.config({ path: path.join(__dirname, "../../../.env") });

import { DevelopmentConfig, DevelopmentI } from "./development";
import { ProductionConfig, ProductionI } from "./production";

const NODE_ENV = process.env.NODE_ENV || "development";

const currentEnv: DevelopmentI | ProductionI =
    NODE_ENV === "production" ? ProductionConfig : DevelopmentConfig;

export default currentEnv;
