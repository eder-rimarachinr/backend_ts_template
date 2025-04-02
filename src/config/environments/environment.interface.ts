export interface EnvironmentConfig {
    MODE?: string

    NODE_ENV?: string;

    // SERVER
    PROY_APP_PORT?: string;

    // DATABASE
    PROY_BD_NAME?: string;
    PROY_BD_HOST?: string;
    PROY_BD_USER?: string;
    PROY_BD_PASS?: string;
    PROY_BD_PORT?: string;
    PROY_BD_DIALECT?: string;

    //DIR
    DIR?: string;
    DIR_ASSETS?: string;

    // FRONTEND
    PROY_FEURL?: string;

    // BACKEND
    PROY_BEURL?: string;

    // SECRET
    SECRET_HIDDEN_KEY?: string;

    // AWS S3
    S3_ACCESS_KEY_ID?: string;
    S3_SECRET_ACCESS_KEY?: string;
    S3_ENDPOINT_URL?: string;
    S3_BUCKET_NAME?: string;

    // JWT
    JWT_SECRET?: string;
    JWT_EXPIRATION_TIME?: string;

    // EMAIL
    EMAIL_HOST?: string;
    EMAIL_PORT?: string;
    EMAIL_USER?: string;
    EMAIL_PASS?: string;

    // LOGGING
    LOG_LEVEL?: string;
    LOG_FILE_PATH?: string;

    // CORS
    CORS_ORIGIN?: string;

    // Third-party APIs
    GOOGLE_API_KEY?: string;
    STRIPE_SECRET_KEY?: string;

    // AWS Configuration
    AWS_REGION?: string;
    AWS_BUCKET_URL?: string;

    // APP info
    APP_NAME?: string;
    APP_VERSION?: string;

    // API Timeout
    API_TIMEOUT?: string;
    REDIS_URL?: string;
}