import path from 'path'
import { EnvironmentConfig } from './environment.interface';

export interface ProductionI extends EnvironmentConfig { };

export const ProductionConfig: ProductionI = {

    NODE_ENV: process.env.NODE_ENV,
    PROY_APP_PORT: process.env.PROY_APP_PORT,

    PROY_BD_NAME: process.env.PROY_BD_NAME,
    PROY_BD_HOST: process.env.PROY_BD_HOST,
    PROY_BD_USER: process.env.PROY_BD_USER,
    PROY_BD_PASS: process.env.PROY_BD_PASS,
    PROY_BD_PORT: process.env.PROY_BD_PORT,
    PROY_BD_DIALECT: process.env.PROY_BD_DIALECT,

    DIR: path.join(__dirname, '../../'),
    DIR_ASSETS: path.join(__dirname, '../../', 'assets'),

    PROY_FEURL: process.env.PROY_FEURL,
    PROY_BEURL: process.env.PROY_BEURL,

    SECRET_HIDDEN_KEY: process.env.SECRET_HIDDEN_KEY,

    S3_ACCESS_KEY_ID: process.env.S3_ACCESS_KEY_ID,
    S3_SECRET_ACCESS_KEY: process.env.S3_SECRET_ACCESS_KEY,
    S3_ENDPOINT_URL: process.env.S3_ENDPOINT_URL,
    S3_BUCKET_NAME: process.env.S3_BUCKET_NAME,

    JWT_SECRET: process.env.JWT_SECRET,
    JWT_EXPIRATION_TIME: process.env.JWT_EXPIRATION_TIME,

    EMAIL_HOST: process.env.EMAIL_HOST,
    EMAIL_PORT: process.env.EMAIL_PORT,
    EMAIL_USER: process.env.EMAIL_USER,
    EMAIL_PASS: process.env.EMAIL_PASS,

    LOG_LEVEL: process.env.LOG_LEVEL,
    LOG_FILE_PATH: process.env.LOG_FILE_PATH,

    CORS_ORIGIN: process.env.CORS_ORIGIN,

    GOOGLE_API_KEY: process.env.GOOGLE_API_KEY,
    STRIPE_SECRET_KEY: process.env.STRIPE_SECRET_KEY,

    AWS_REGION: process.env.AWS_REGION,
    AWS_BUCKET_URL: process.env.AWS_BUCKET_URL,

    APP_NAME: process.env.APP_NAME,
    APP_VERSION: process.env.APP_VERSION,

    API_TIMEOUT: process.env.API_TIMEOUT,
    REDIS_URL: process.env.REDIS_URL,
};
