import path from 'path'
import { EnvironmentConfig } from './environment.interface';

export interface DevelopmentI extends EnvironmentConfig { };

export const DevelopmentConfig: DevelopmentI = {
    NODE_ENV: process.env.NODE_ENV || "development",
    PROY_APP_PORT: process.env.PROY_APP_PORT || "3000",

    PROY_BD_NAME: process.env.PROY_BD_NAME || "koda_db",
    PROY_BD_HOST: process.env.PROY_BD_HOST || "localhost",
    PROY_BD_USER: process.env.PROY_BD_USER || "root",
    PROY_BD_PASS: process.env.PROY_BD_PASS || "",
    PROY_BD_PORT: process.env.PROY_BD_PORT || "3306",
    PROY_BD_DIALECT: process.env.PROY_BD_DIALECT || "mysql",

    DIR: path.join(__dirname, '../../'),
    DIR_ASSETS: path.join(__dirname, '../../', 'assets'),

    PROY_FEURL: process.env.PROY_FEURL || "http://localhost:3001",
    PROY_BEURL: process.env.PROY_BEURL || "http://localhost:3000",

    SECRET_HIDDEN_KEY: process.env.SECRET_HIDDEN_KEY || "BpvnW%H4e&iBMV",

    S3_ACCESS_KEY_ID: process.env.S3_ACCESS_KEY_ID || "",
    S3_SECRET_ACCESS_KEY: process.env.S3_SECRET_ACCESS_KEY || "",
    S3_ENDPOINT_URL: process.env.S3_ENDPOINT_URL || "",
    S3_BUCKET_NAME: process.env.S3_BUCKET_NAME || "",

    JWT_SECRET: process.env.JWT_SECRET || "BpvnW%H4e&iBMV",
    JWT_EXPIRATION_TIME: process.env.JWT_EXPIRATION_TIME || "1h",

    EMAIL_HOST: process.env.EMAIL_HOST || "",
    EMAIL_PORT: process.env.EMAIL_PORT || "",
    EMAIL_USER: process.env.EMAIL_USER || "",
    EMAIL_PASS: process.env.EMAIL_PASS || "",

    LOG_LEVEL: process.env.LOG_LEVEL || "info",
    LOG_FILE_PATH: process.env.LOG_FILE_PATH || "",

    CORS_ORIGIN: process.env.CORS_ORIGIN || "http://localhost:3001",

    GOOGLE_API_KEY: process.env.GOOGLE_API_KEY || "",
    STRIPE_SECRET_KEY: process.env.STRIPE_SECRET_KEY || "",

    AWS_REGION: process.env.AWS_REGION || "",
    AWS_BUCKET_URL: process.env.AWS_BUCKET_URL || "",

    APP_NAME: process.env.APP_NAME || "backend_template",
    APP_VERSION: process.env.APP_VERSION || "1.0.0",

    API_TIMEOUT: process.env.API_TIMEOUT || "5000",
    REDIS_URL: process.env.REDIS_URL || "redis://localhost:6379",
};

